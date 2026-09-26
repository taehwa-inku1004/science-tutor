"use client";

import React, { useState, useRef } from "react";
import { Upload, Camera, Image as ImageIcon, Sparkles, AlertCircle, ArrowRight, BookOpen, Trash2 } from "lucide-react";
import { SavedNote } from "@/types/tutor";

interface ImageUploadZoneProps {
  onAnalyze: (fileBase64: string, mimeType: string, studentQuestion?: string) => Promise<void>;
  isLoading: boolean;
  hasApiKey: boolean;
  onOpenApiKeyModal: () => void;
  savedNotes?: SavedNote[];
  onSelectNote?: (note: SavedNote) => void;
  onDeleteNote?: (id: string) => void;
  onOpenNotesArchive?: () => void;
}

export function ImageUploadZone({
  onAnalyze,
  isLoading,
  hasApiKey,
  onOpenApiKeyModal,
  savedNotes = [],
  onSelectNote,
  onDeleteNote,
  onOpenNotesArchive,
}: ImageUploadZoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>("image/jpeg");
  const [studentQuestion, setStudentQuestion] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setErrorMsg("이미지 파일(JPG, PNG, WebP 등)만 업로드할 수 있습니다.");
      return;
    }
    setErrorMsg(null);
    setMimeType(file.type);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
      setImageBase64(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!imageBase64) return;
    if (!hasApiKey) {
      onOpenApiKeyModal();
      return;
    }
    await onAnalyze(imageBase64, mimeType, studentQuestion.trim() || undefined);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4 sm:py-6">
      {/* Hero Banner */}
      <div className="text-center space-y-3 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          중학교 2학년 과학 기말고사 전용 AI 과외
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          틀린 문제 사진만 올리세요.<br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600">
            개념을 꿰뚫어 드립니다!
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          단순한 답지 해설이 아닙니다. 왜 그 문제가 나왔는지 출제 의도와 함정을 짚고,
          중2 눈높이 맞춤 일상 비유와 확인 퀴즈로 100% 이해시켜 드립니다.
        </p>
      </div>

      {/* Main Upload Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 transition-all">
        {/* Hidden inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && processFile(e.target.files[0])}
        />
        {/* Mobile/iPad Camera capture */}
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && processFile(e.target.files[0])}
        />

        {!previewUrl ? (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-all ${
              dragActive
                ? "border-indigo-500 bg-indigo-50/50 scale-[0.99]"
                : "border-slate-300 hover:border-indigo-400 bg-slate-50/50 hover:bg-indigo-50/20"
            }`}
          >
            <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-100/80 text-indigo-600 flex items-center justify-center mb-4 shadow-xs">
              <Upload className="w-8 h-8" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1">
              문제 사진을 끌어다 놓거나 선택하세요
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              휴대폰/아이패드로 찍은 사진, 캡처 화면(JPG, PNG, WebP) 모두 지원합니다.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-transform active:scale-95"
              >
                <Camera className="w-4 h-4" />
                아이패드/카메라로 바로 촬영
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-300 shadow-2xs transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-slate-500" />
                앨범/파일에서 선택
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Preview image */}
            <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 max-h-96 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="업로드된 문제 미리보기"
                className="max-h-96 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => {
                  setPreviewUrl(null);
                  setImageBase64(null);
                }}
                className="absolute top-3 right-3 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-medium rounded-lg backdrop-blur-xs transition-colors"
              >
                사진 다시 올리기
              </button>
            </div>

            {/* Optional student question input */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                내가 적은 답이나 헷갈렸던 점 (선택)
              </label>
              <textarea
                value={studentQuestion}
                onChange={(e) => setStudentQuestion(e.target.value)}
                placeholder="예: 3번 골라서 틀렸는데 2번하고 헷갈려요 / 용해도 공식에서 물 100g이 왜 들어가는지 모르겠어요"
                rows={2}
                className="w-full text-sm rounded-xl border border-slate-300 p-3 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50"
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setPreviewUrl(null);
                  setImageBase64(null);
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                취소
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white text-sm font-bold shadow-md shadow-indigo-100 disabled:opacity-50 transition-all cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    선생님이 문제 분석 중...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    과외선생님 분석 시작하기
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {errorMsg && (
          <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 text-xs sm:text-sm flex items-center gap-2 border border-red-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Saved Notes Section directly on Home */}
      {savedNotes && savedNotes.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              내가 저장한 오답노트 ({savedNotes.length}개)
            </h3>
            {onOpenNotesArchive && (
              <button
                type="button"
                onClick={onOpenNotesArchive}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                전체 보관함 보기
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {savedNotes.slice(0, 6).map((note) => (
              <div
                key={note.id}
                className="group p-4 bg-white hover:bg-indigo-50/50 rounded-2xl border border-indigo-100 hover:border-indigo-400 transition-all shadow-xs flex flex-col justify-between"
              >
                <div
                  className="space-y-2 cursor-pointer"
                  onClick={() => onSelectNote && onSelectNote(note)}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                      {note.subjectDomain}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900 line-clamp-1">
                    {note.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    핵심 개념: {note.keyConcept}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  {onDeleteNote && (
                    <button
                      type="button"
                      onClick={() => onDeleteNote(note.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="오답노트 삭제"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {onSelectNote && (
                    <button
                      type="button"
                      onClick={() => onSelectNote(note)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors cursor-pointer ml-auto"
                    >
                      <span>공부하기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
