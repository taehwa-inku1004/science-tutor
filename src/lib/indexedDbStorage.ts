import { SavedNote } from "@/types/tutor";
import { INITIAL_SAVED_NOTES } from "@/lib/initialNotes";

const DB_NAME = "science_tutor_db";
const STORE_NAME = "saved_notes";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      reject(new Error("IndexedDB not supported in this environment"));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getAllNotesFromIndexedDB(): Promise<SavedNote[]> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        let notes = (request.result as SavedNote[]) || [];

        // Check and merge from localStorage backup (iPad Safari fail-safe)
        try {
          if (typeof window !== "undefined") {
            const lsRaw = localStorage.getItem("science_tutor_notes_backup");
            if (lsRaw) {
              const lsNotes: SavedNote[] = JSON.parse(lsRaw);
              const noteMap = new Map(notes.map((n) => [n.id, n]));
              lsNotes.forEach((lsN) => {
                if (!noteMap.has(lsN.id)) {
                  noteMap.set(lsN.id, lsN);
                  try {
                    store.put(lsN);
                  } catch {}
                }
              });
              notes = Array.from(noteMap.values());
            }
          }
        } catch (lsErr) {
          console.warn("LocalStorage merge error:", lsErr);
        }

        // Auto-seed initial saved notes so new devices get previous notes immediately
        const noteMap = new Map(notes.map((n) => [n.id, n]));
        for (const initNote of INITIAL_SAVED_NOTES) {
          if (!noteMap.has(initNote.id)) {
            noteMap.set(initNote.id, initNote);
            try {
              store.put(initNote);
            } catch {}
          }
        }
        notes = Array.from(noteMap.values());

        notes.sort((a, b) => {
          const dateA = new Date(a.savedAt || a.createdAt).getTime();
          const dateB = new Date(b.savedAt || b.createdAt).getTime();
          return dateB - dateA;
        });
        resolve(notes);
      };

      request.onerror = () => {
        // Fallback to localStorage and initial notes
        try {
          const lsRaw = localStorage.getItem("science_tutor_notes_backup");
          if (lsRaw) {
            resolve(JSON.parse(lsRaw));
            return;
          }
        } catch {}
        resolve(INITIAL_SAVED_NOTES);
      };
    });
  } catch (err) {
    console.warn("IndexedDB getAllNotes error, falling back:", err);
    try {
      const lsRaw = localStorage.getItem("science_tutor_notes_backup");
      if (lsRaw) return JSON.parse(lsRaw);
    } catch {}
    return INITIAL_SAVED_NOTES;
  }
}

export async function saveNoteToIndexedDB(note: SavedNote): Promise<void> {
  // Always update localStorage backup first as immediate sync
  try {
    if (typeof window !== "undefined") {
      const lsRaw = localStorage.getItem("science_tutor_notes_backup");
      const existing: SavedNote[] = lsRaw ? JSON.parse(lsRaw) : [];
      const updated = [note, ...existing.filter((n) => n.id !== note.id)];
      // Keep up to 30 notes in localStorage backup, limit huge base64 strings to protect quota
      const safeBackup = updated.slice(0, 30).map((n) => {
        if (n.imageUrl && n.imageUrl.length > 500000) {
          return { ...n, imageUrl: undefined };
        }
        return n;
      });
      localStorage.setItem("science_tutor_notes_backup", JSON.stringify(safeBackup));
    }
  } catch (lsErr) {
    console.warn("LocalStorage backup warning:", lsErr);
  }

  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.put(note);

      request.onsuccess = () => resolve();
      request.onerror = () => resolve();
    });
  } catch (err) {
    console.warn("IndexedDB saveNote error:", err);
  }
}

export async function deleteNoteFromIndexedDB(id: string): Promise<void> {
  try {
    if (typeof window !== "undefined") {
      const lsRaw = localStorage.getItem("science_tutor_notes_backup");
      if (lsRaw) {
        const existing: SavedNote[] = JSON.parse(lsRaw);
        const updated = existing.filter((n) => n.id !== id);
        localStorage.setItem("science_tutor_notes_backup", JSON.stringify(updated));
      }
    }
  } catch {}

  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => resolve();
    });
  } catch (err) {
    console.warn("IndexedDB deleteNote error:", err);
  }
}
