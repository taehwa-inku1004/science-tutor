import { SavedNote } from "@/types/tutor";

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

export function isSept26OrOlderNote(note: SavedNote): boolean {
  if (!note) return true;
  const d = note.savedAt || note.createdAt || "";
  if (d.includes("2026-09-26")) return true;
  if (note.id && note.id.startsWith("analysis-")) {
    const ts = parseInt(note.id.replace("analysis-", ""), 10);
    // 2026-09-27 00:00:00 KST is ~1790434800000. Notes prior to this are from Sept 26
    if (!isNaN(ts) && ts < 1790434800000) {
      return true;
    }
  }
  return false;
}

export async function getAllNotesFromIndexedDB(): Promise<SavedNote[]> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        let rawNotes = (request.result as SavedNote[]) || [];

        // 1. Purge all 9월 26일 notes directly from IndexedDB
        rawNotes.forEach((n) => {
          if (isSept26OrOlderNote(n)) {
            try {
              store.delete(n.id);
            } catch {}
          }
        });

        let notes = rawNotes.filter((n) => !isSept26OrOlderNote(n));

        // 2. Check and clean localStorage backup (purge 9/26 notes, merge only 9/27+ notes)
        try {
          if (typeof window !== "undefined") {
            const lsRaw = localStorage.getItem("science_tutor_notes_backup");
            if (lsRaw) {
              const lsNotes: SavedNote[] = JSON.parse(lsRaw);
              const cleanedLsNotes = lsNotes.filter((n) => !isSept26OrOlderNote(n));
              const noteMap = new Map(notes.map((n) => [n.id, n]));
              cleanedLsNotes.forEach((lsN) => {
                if (!noteMap.has(lsN.id)) {
                  noteMap.set(lsN.id, lsN);
                  try {
                    store.put(lsN);
                  } catch {}
                }
              });
              notes = Array.from(noteMap.values());
              localStorage.setItem("science_tutor_notes_backup", JSON.stringify(notes));
            }
          }
        } catch (lsErr) {
          console.warn("LocalStorage merge error:", lsErr);
        }

        notes.sort((a, b) => {
          const dateA = new Date(a.savedAt || a.createdAt).getTime();
          const dateB = new Date(b.savedAt || b.createdAt).getTime();
          return dateB - dateA;
        });
        resolve(notes);
      };

      request.onerror = () => {
        // Fallback to localStorage (only 9/27+ notes)
        try {
          const lsRaw = localStorage.getItem("science_tutor_notes_backup");
          if (lsRaw) {
            const parsed: SavedNote[] = JSON.parse(lsRaw);
            resolve(parsed.filter((n) => !isSept26OrOlderNote(n)));
            return;
          }
        } catch {}
        resolve([]);
      };
    });
  } catch (err) {
    console.warn("IndexedDB getAllNotes error, falling back:", err);
    try {
      const lsRaw = localStorage.getItem("science_tutor_notes_backup");
      if (lsRaw) {
        const parsed: SavedNote[] = JSON.parse(lsRaw);
        return parsed.filter((n) => !isSept26OrOlderNote(n));
      }
    } catch {}
    return [];
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
