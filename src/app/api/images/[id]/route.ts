import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "data", "images");

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return new NextResponse("Image ID required", { status: 400 });
    }

    // Sanitize id to prevent directory traversal
    const safeId = path.basename(id);
    const filePath = path.join(IMAGES_DIR, `${safeId}.jpg`);

    try {
      const fileBuffer = await fs.readFile(filePath);
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        },
      });
    } catch {
      return new NextResponse("Image not found", { status: 404 });
    }
  } catch (error: unknown) {
    const err = error as Error;
    return new NextResponse(`Server error: ${err.message}`, { status: 500 });
  }
}
