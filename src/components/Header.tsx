"use client";

import React from "react";
import { Sparkles, Tablet, Key, BookOpen, PlusCircle } from "lucide-react";

interface HeaderProps {
  hasApiKey: boolean;
  savedNotesCount: number;
  onOpenIpadGuide: () => void;
  onOpenApiKeyModal: () => void;
  onOpenNotesArchive: () => void;
  onNewAnalysis: () => void;
}

export function Header({
  hasApiKey,
  savedNotesCount,
  onOpenIpadGuide,
  onOpenApiKeyModal,
  onOpenNotesArchive,
  onNewAnalysis,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-4 sm:px-6 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Logo and Brand */}
        <div 
          onClick={onNewAnalysis} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                중2 과학 오답 클리닉
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60 hidden sm:inline-block">
                  기말고사 완벽대비
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 hidden md:block">
              사진 한 장으로 개념을 꿰뚫는 AI 1:1 과외선생님
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* New Problem */}
          <button
            onClick={onNewAnalysis}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">새 문제 풀기</span>
            <span className="sm:hidden">새 문제</span>
          </button>

          {/* iPad Guide Button */}
          <button
            onClick={onOpenIpadGuide}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-colors"
            title="아이패드 연동 안내"
          >
            <Tablet className="w-4 h-4 text-sky-600" />
            <span className="hidden md:inline">아이패드 연동</span>
          </button>

          {/* Saved Notes */}
          <button
            onClick={onOpenNotesArchive}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors relative"
            title="나만의 오답노트 보관함"
          >
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="hidden md:inline">오답노트</span>
            {savedNotesCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-indigo-600 text-white">
                {savedNotesCount}
              </span>
            )}
          </button>

          {/* API Key Modal Button */}
          <button
            onClick={onOpenApiKeyModal}
            className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors ${
              hasApiKey
                ? "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                : "bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 animate-pulse"
            }`}
            title="Gemini API 키 설정"
          >
            <Key className="w-4 h-4" />
            <span className="hidden lg:inline">{hasApiKey ? "API 키 설정됨" : "API 키 필요"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
