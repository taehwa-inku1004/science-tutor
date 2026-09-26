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

export async function getAllNotesFromIndexedDB(): Promise<SavedNote[]> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const notes = (request.result as SavedNote[]) || [];
        // Sort descending by savedAt or createdAt
        notes.sort((a, b) => {
          const dateA = new Date(a.savedAt || a.createdAt).getTime();
          const dateB = new Date(b.savedAt || b.createdAt).getTime();
          return dateB - dateA;
        });
        resolve(notes);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn("IndexedDB getAllNotes error, falling back:", err);
    return [];
  }
}

export async function saveNoteToIndexedDB(note: SavedNote): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.put(note);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn("IndexedDB saveNote error:", err);
  }
}

export async function deleteNoteFromIndexedDB(id: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn("IndexedDB deleteNote error:", err);
  }
}
