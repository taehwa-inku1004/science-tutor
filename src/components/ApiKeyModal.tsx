"use client";

import React, { useState } from "react";
import { X, Key, ExternalLink, Check, ShieldCheck } from "lucide-react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentApiKey: string;
  onSaveApiKey: (key: string) => void;
}

export function ApiKeyModal({
  isOpen,
  onClose,
  currentApiKey,
  onSaveApiKey,
}: ApiKeyModalProps) {
  const [keyInput, setKeyInput] = useState(currentApiKey);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = keyInput.trim().replace(/^Bearer\s+/i, "").replace(/^["']|["']$/g, "");
    onSaveApiKey(cleaned);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleClear = () => {
    setKeyInput("");
    onSaveApiKey("");
  };

  const isGitHubToken = keyInput.startsWith("ghp_") || keyInput.startsWith("github_pat_");

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Gemini API 키 설정</h3>
              <p className="text-xs text-slate-500">
                문제 사진 비전 분석을 위해 필요합니다
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free API Key Guide */}
        <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-900">
              💡 무료 API 키 발급 방법 (1분 소요)
            </span>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 underline underline-offset-2"
            >
              Google AI Studio
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-xs text-indigo-700 leading-relaxed font-sans">
            구글 계정만 있으면 Google AI Studio에서 <strong>무료(Free of charge)</strong>로 &apos;AIzaSy...&apos; 형태의 키를 즉시 생성할 수 있습니다.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Google Gemini API Key
            </label>
            <input
              type="text"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="AIzaSy... 또는 AQ..."
              className={`w-full text-sm font-mono rounded-xl border p-3 focus:outline-hidden focus:ring-2 bg-slate-50 ${
                isGitHubToken
                  ? "border-rose-300 focus:ring-rose-500 text-rose-800 bg-rose-50/50"
                  : "border-slate-300 focus:ring-indigo-500"
              }`}
            />
            {isGitHubToken && (
              <p className="mt-1.5 text-xs text-rose-600 font-semibold">
                ⚠️ 이것은 GitHub 토큰입니다! Google AI Studio에서 발급받은 AIzaSy... 형태의 키를 입력해 주세요.
              </p>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>입력한 키는 사용자의 로컬 브라우저에만 안전하게 보관됩니다.</span>
          </div>

          <div className="flex gap-2.5 pt-2">
            {currentApiKey && (
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-3 rounded-2xl border border-rose-200 text-rose-600 text-xs font-bold hover:bg-rose-50 transition-colors"
              >
                키 삭제
              </button>
            )}
            <button
              type="submit"
              className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  저장되었습니다!
                </>
              ) : (
                "설정 저장"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
