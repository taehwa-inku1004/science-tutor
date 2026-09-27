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

export const CANONICAL_NOTE_IDS = new Set(INITIAL_SAVED_NOTES.map((n) => n.id));

export async function getAllNotesFromIndexedDB(): Promise<SavedNote[]> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        let rawNotes = (request.result as SavedNote[]) || [];

        // 1. Purge any stale notes that are not part of the canonical 12 notes
        rawNotes.forEach((n) => {
          if (!CANONICAL_NOTE_IDS.has(n.id) && !(n as any).isUserCreated) {
            try {
              store.delete(n.id);
            } catch {}
          }
        });

        // Keep only valid canonical notes (or user created notes)
        rawNotes = rawNotes.filter((n) => CANONICAL_NOTE_IDS.has(n.id) || (n as any).isUserCreated);

        // Normalize dates to current format
        rawNotes = rawNotes.map((n) => {
          let updated = { ...n };
          let changed = false;
          if (updated.createdAt && updated.createdAt.includes("2026-09-26")) {
            updated.createdAt = updated.createdAt.replace("2026-09-26", "2026-09-27");
            changed = true;
          }
          if (updated.savedAt && updated.savedAt.includes("2026-09-26")) {
            updated.savedAt = updated.savedAt.replace("2026-09-26", "2026-09-27");
            changed = true;
          }
          if (changed) {
            try {
              store.put(updated);
            } catch {}
          }
          return updated;
        });

        let notes = rawNotes;

        // 2. Clean localStorage backup as well
        try {
          if (typeof window !== "undefined") {
            const lsRaw = localStorage.getItem("science_tutor_notes_backup");
            if (lsRaw) {
              const lsNotes: SavedNote[] = JSON.parse(lsRaw);
              const cleanedLsNotes = lsNotes.filter(
                (n) => CANONICAL_NOTE_IDS.has(n.id) || (n as any).isUserCreated
              );
              localStorage.setItem("science_tutor_notes_backup", JSON.stringify(cleanedLsNotes));
            }
          }
        } catch (lsErr) {
          console.warn("LocalStorage cleanup error:", lsErr);
        }

        // 3. Auto-seed or upgrade all 12 canonical saved notes
        const noteMap = new Map(notes.map((n) => [n.id, n]));
        for (const initNote of INITIAL_SAVED_NOTES) {
          const existing = noteMap.get(initNote.id);
          if (
            !existing ||
            !existing.twinQuiz ||
            existing.twinQuiz.length < (initNote.twinQuiz?.length || 10) ||
            (existing.twinQuiz[0] && existing.twinQuiz[0].options.length < 5)
          ) {
            noteMap.set(initNote.id, initNote);
            try {
              store.put(initNote);
            } catch {}
          }
        }
        notes = Array.from(noteMap.values());

        // Update localStorage backup
        try {
          if (typeof window !== "undefined") {
            localStorage.setItem("science_tutor_notes_backup", JSON.stringify(notes));
          }
        } catch {}

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
