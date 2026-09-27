import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { SavedNote } from "@/types/tutor";

const DATA_DIR = path.join(process.cwd(), "data");
const NOTES_FILE = path.join(DATA_DIR, "saved_notes.json");
const IMAGES_DIR = path.join(DATA_DIR, "images");

async function ensureDirs() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.mkdir(IMAGES_DIR, { recursive: true });
    await fs.access(NOTES_FILE);
  } catch {
    try {
      await fs.writeFile(NOTES_FILE, JSON.stringify([], null, 2), "utf-8");
    } catch {
      // Ephemeral or read-only filesystem (e.g. Vercel)
    }
  }
}

async function saveImageIfBase64(id: string, imageUrl?: string): Promise<string | undefined> {
  if (!imageUrl) return undefined;
  if (!imageUrl.startsWith("data:image")) return imageUrl;

  try {
    await fs.mkdir(IMAGES_DIR, { recursive: true });
    const matches = imageUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (matches && matches[2]) {
      const buffer = Buffer.from(matches[2], "base64");
      const safeId = path.basename(id);
      const filePath = path.join(IMAGES_DIR, `${safeId}.jpg`);
      await fs.writeFile(filePath, buffer);
      return `/api/images/${safeId}`;
    }
  } catch (err) {
    // If running in read-only environment, keep the base64 URL
    console.warn("Storage not writable on serverless, preserving in-memory image:", err);
  }
  return imageUrl;
}

async function deleteImageFile(id: string) {
  try {
    const safeId = path.basename(id);
    const filePath = path.join(IMAGES_DIR, `${safeId}.jpg`);
    await fs.unlink(filePath);
  } catch {
    // ignore if doesn't exist
  }
}

async function readNotes(): Promise<SavedNote[]> {
  try {
    await ensureDirs();
    const raw = await fs.readFile(NOTES_FILE, "utf-8");
    const notes: SavedNote[] = JSON.parse(raw);
    return notes.filter((n) => {
      const d = n.savedAt || n.createdAt || "";
      return !d.includes("2026-09-26");
    });
  } catch {
    return [];
  }
}

async function writeNotes(notes: SavedNote[]): Promise<void> {
  try {
    await ensureDirs();
    await fs.writeFile(NOTES_FILE, JSON.stringify(notes, null, 2), "utf-8");
  } catch {
    // read-only in Vercel serverless
  }
}

export async function GET() {
  try {
    const notes = await readNotes();
    return NextResponse.json({ success: true, notes });
  } catch (error: unknown) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { note } = body as { note: SavedNote };

    if (!note || !note.id) {
      return NextResponse.json({ success: false, error: "Invalid note data" }, { status: 400 });
    }

    // Save image to disk if base64 to keep JSON file lightweight
    const optimizedImageUrl = await saveImageIfBase64(note.id, note.imageUrl);
    const noteToSave: SavedNote = {
      ...note,
      imageUrl: optimizedImageUrl,
      savedAt: new Date().toISOString(),
    };

    const currentNotes = await readNotes();
    const existingIndex = currentNotes.findIndex((n) => n.id === note.id);

    let updated: SavedNote[];
    if (existingIndex >= 0) {
      updated = [...currentNotes];
      updated[existingIndex] = noteToSave;
    } else {
      updated = [noteToSave, ...currentNotes];
    }

    await writeNotes(updated);
    return NextResponse.json({ success: true, notes: updated, savedNote: noteToSave });
  } catch (error: unknown) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing id parameter" }, { status: 400 });
    }

    const currentNotes = await readNotes();
    const updated = currentNotes.filter((n) => n.id !== id);

    await writeNotes(updated);
    await deleteImageFile(id);

    return NextResponse.json({ success: true, notes: updated });
  } catch (error: unknown) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
