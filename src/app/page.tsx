"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ImageUploadZone } from "@/components/ImageUploadZone";
import { ProblemViewer } from "@/components/ProblemViewer";
import { TutorClinicView } from "@/components/TutorClinicView";
import { IpadGuideModal } from "@/components/IpadGuideModal";
import { ApiKeyModal } from "@/components/ApiKeyModal";
import { NotesArchiveModal } from "@/components/NotesArchiveModal";
import { TutorAnalysis, SavedNote } from "@/types/tutor";
import { ArrowLeft, Sparkles, AlertCircle } from "lucide-react";
import {
  getAllNotesFromIndexedDB,
  saveNoteToIndexedDB,
  deleteNoteFromIndexedDB,
} from "@/lib/indexedDbStorage";
import { INITIAL_SAVED_NOTES } from "@/lib/initialNotes";

export default function Home() {
  const [activeAnalysis, setActiveAnalysis] = useState<TutorAnalysis | null>(null);
  const [activeImageUrl, setActiveImageUrl] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [savedNotes, setSavedNotes] = useState<SavedNote[]>(INITIAL_SAVED_NOTES);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  // Modals
  const [isIpadGuideOpen, setIsIpadGuideOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isNotesArchiveOpen, setIsNotesArchiveOpen] = useState(false);

  const localIp = "192.168.75.192";

  // Helper to sync active study session with sessionStorage so refresh never loses state
  const handleSetActiveAnalysis = (analysis: TutorAnalysis | null, imageUrl?: string) => {
    setActiveAnalysis(analysis);
    setActiveImageUrl(imageUrl);
    try {
      if (analysis) {
        sessionStorage.setItem("science_tutor_active_analysis", JSON.stringify(analysis));
        if (imageUrl) sessionStorage.setItem("science_tutor_active_image", imageUrl);
        else sessionStorage.removeItem("science_tutor_active_image");
      } else {
        sessionStorage.removeItem("science_tutor_active_analysis");
        sessionStorage.removeItem("science_tutor_active_image");
      }
    } catch {
      // ignore
    }
  };

  // Load saved state from server API and restore active session if available
  useEffect(() => {
    try {
      const storedKey = localStorage.getItem("gemini_api_key") || "";
      setApiKey(storedKey);
    } catch {
      // ignore
    }

    // 1. Restore active problem session across browser refresh
    try {
      const cachedAnalysis = sessionStorage.getItem("science_tutor_active_analysis");
      const cachedImage = sessionStorage.getItem("science_tutor_active_image");
      if (cachedAnalysis) {
        const parsed = JSON.parse(cachedAnalysis);
        setActiveAnalysis(parsed);
        if (cachedImage) setActiveImageUrl(cachedImage);
      }
    } catch {
      // ignore
    }

    // 2. Load persistent notes from IndexedDB first (lightning fast on iPad/Vercel)
    getAllNotesFromIndexedDB()
      .then((idbNotes) => {
        if (idbNotes && idbNotes.length > 0) {
          // Auto-heal any stale /api/images/ URLs from earlier sessions
          const healed = idbNotes.map((note) => {
            if (note.imageUrl && note.imageUrl.startsWith("/api/images/")) {
              const matched = INITIAL_SAVED_NOTES.find((init) => init.id === note.id);
              if (matched && matched.imageUrl) {
                saveNoteToIndexedDB({ ...note, imageUrl: matched.imageUrl }).catch(() => {});
                return { ...note, imageUrl: matched.imageUrl };
              }
            }
            return note;
          });
          setSavedNotes(healed);
        }
      })
      .catch((e) => console.warn("IDB initial load error:", e));

    // Also check server API for sync if running locally
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.notes) && data.notes.length > 0) {
          setSavedNotes((prev) => {
            const map = new Map<string, SavedNote>();
            data.notes.forEach((n: SavedNote) => map.set(n.id, n));
            prev.forEach((n: SavedNote) => map.set(n.id, n));
            const merged = Array.from(map.values());
            merged.forEach((n) => saveNoteToIndexedDB(n).catch(() => {}));
            return merged;
          });
        }
      })
      .catch(() => {
        // running offline or purely on Vercel
      });
  }, []);

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    try {
      localStorage.setItem("gemini_api_key", key);
    } catch {
      // ignore
    }
  };

  const handleAnalyze = async (
    imageBase64: string,
    mimeType: string,
    studentQuestion?: string
  ) => {
    setIsLoading(true);
    setErrorBanner(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64,
          mimeType,
          userApiKey: apiKey,
          studentQuestion,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        if (json.error === "API_KEY_REQUIRED") {
          setIsApiKeyModalOpen(true);
          throw new Error("Gemini API 키가 필요합니다. 설정창에서 입력해 주세요.");
        }
        throw new Error(json.message || "문제 분석에 실패했습니다.");
      }

      const result: TutorAnalysis = json.data;
      result.imageUrl = imageBase64;
      handleSetActiveAnalysis(result, imageBase64);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: unknown) {
      const error = err as Error;
      setErrorBanner(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSaveNote = async () => {
    if (!activeAnalysis) return;

    const exists = savedNotes.some((n) => n.id === activeAnalysis.id);

    if (exists) {
      // Remove note
      const updated = savedNotes.filter((n) => n.id !== activeAnalysis.id);
      setSavedNotes(updated);
      deleteNoteFromIndexedDB(activeAnalysis.id).catch(() => {});
      try {
        await fetch(`/api/notes?id=${activeAnalysis.id}`, { method: "DELETE" });
      } catch {
        // ignore
      }
    } else {
      // Save note permanently to IndexedDB
      const newNote: SavedNote = {
        ...activeAnalysis,
        imageUrl: activeImageUrl,
        savedAt: new Date().toISOString(),
      };
      const updated = [newNote, ...savedNotes];
      setSavedNotes(updated);
      saveNoteToIndexedDB(newNote).catch(() => {});

      try {
        await fetch("/api/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ note: newNote }),
        });
      } catch {
        // ignore server error on Vercel
      }
    }
  };

  const handleDeleteNote = async (id: string) => {
    const updated = savedNotes.filter((n) => n.id !== id);
    setSavedNotes(updated);
    deleteNoteFromIndexedDB(id).catch(() => {});
    try {
      await fetch(`/api/notes?id=${id}`, { method: "DELETE" });
    } catch {
      // ignore
    }
  };

  const isCurrentSaved = !!(
    activeAnalysis && savedNotes.some((n) => n.id === activeAnalysis.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Global Header */}
      <Header
        hasApiKey={!!apiKey}
        savedNotesCount={savedNotes.length}
        onOpenIpadGuide={() => setIsIpadGuideOpen(true)}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        onOpenNotesArchive={() => setIsNotesArchiveOpen(true)}
        onNewAnalysis={() => handleSetActiveAnalysis(null)}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {errorBanner && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{errorBanner}</span>
            </div>
            <button
              onClick={() => setErrorBanner(null)}
              className="text-xs font-bold px-2 py-1 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 cursor-pointer"
            >
              닫기
            </button>
          </div>
        )}

        {!activeAnalysis ? (
          /* View 1: Upload and Saved Notes showcase */
          <ImageUploadZone
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
            hasApiKey={!!apiKey}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
            savedNotes={savedNotes}
            onSelectNote={(note) => {
              handleSetActiveAnalysis(note, note.imageUrl);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onDeleteNote={handleDeleteNote}
            onOpenNotesArchive={() => setIsNotesArchiveOpen(true)}
          />
        ) : (
          /* View 2: iPad Optimized 2-Column Dashboard */
          <div className="space-y-6">
            {/* Back Button */}
            <div className="flex items-center justify-between no-print">
              <button
                onClick={() => handleSetActiveAnalysis(null)}
                className="flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-slate-500" />
                다른 문제 풀기
              </button>

              <div className="text-xs text-slate-500 font-medium hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                iPad 분할 화면 최적화 뷰
              </div>
            </div>

            {/* Split Screen Grid: Left = Problem image & recognized text, Right = Tutor lecture & quiz */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column (5 cols on large / iPad landscape): Problem Viewer */}
              <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-4">
                <ProblemViewer
                  imageUrl={activeImageUrl}
                  recognizedText={activeAnalysis.recognizedProblem}
                />
              </div>

              {/* Right Column (7 cols): Tutor Clinic & Interactive Quiz */}
              <div className="lg:col-span-7 space-y-6">
                <TutorClinicView
                  key={activeAnalysis.id}
                  analysis={activeAnalysis}
                  isSaved={isCurrentSaved}
                  onSaveNote={handleToggleSaveNote}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-200 bg-white/60 text-center text-xs text-slate-400 no-print">
        <p>중학교 2학년 과학 기말고사 대비 AI 과외 클리닉 • iPad PWA 지원</p>
      </footer>

      {/* Modals */}
      <IpadGuideModal
        isOpen={isIpadGuideOpen}
        onClose={() => setIsIpadGuideOpen(false)}
        localIp={localIp}
      />

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        currentApiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />

      <NotesArchiveModal
        isOpen={isNotesArchiveOpen}
        onClose={() => setIsNotesArchiveOpen(false)}
        savedNotes={savedNotes}
        onSelectNote={(note) => {
          handleSetActiveAnalysis(note, note.imageUrl);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  );
}
