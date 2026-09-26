"use client";

import React, { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";

interface ProblemViewerProps {
  imageUrl?: string;
  recognizedText: string;
}

export function ProblemViewer({ imageUrl, recognizedText }: ProblemViewerProps) {
  const [scale, setScale] = useState(1);
  const [showFullModal, setShowFullModal] = useState(false);

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.75));
  const resetZoom = () => setScale(1);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Top Header */}
      <div className="px-4 py-3 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          원본 문제 및 지문
        </span>

        {/* Zoom Controls */}
        {imageUrl && (
          <div className="flex items-center gap-1 no-print">
            <button
              onClick={zoomOut}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
              title="축소"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-slate-500 w-10 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
              title="확대"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={resetZoom}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
              title="원래 크기"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setShowFullModal(true)}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
              title="전체화면"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Image Viewer Area */}
      {imageUrl && (
        <div className="relative bg-slate-950 overflow-hidden flex items-center justify-center p-3 min-h-[220px] max-h-[380px] sm:max-h-[460px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt="문제 사진"
            style={{ transform: `scale(${scale})` }}
            className="max-h-full max-w-full object-contain transition-transform duration-150 origin-center rounded-sm"
          />
        </div>
      )}

      {/* Recognized Text Area */}
      <div className="p-4 bg-slate-50/50 flex-1 border-t border-slate-200 overflow-y-auto">
        <h4 className="text-xs font-semibold text-slate-500 mb-1.5">
          인식된 문제 텍스트
        </h4>
        <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-wrap bg-white p-3 rounded-xl border border-slate-200">
          {recognizedText}
        </div>
      </div>

      {/* Fullscreen modal on tap */}
      {showFullModal && imageUrl && (
        <div
          onClick={() => setShowFullModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt="문제 사진 확대"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={() => setShowFullModal(false)}
            className="absolute top-6 right-6 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl text-sm font-semibold backdrop-blur-md"
          >
            닫기 (화면 터치)
          </button>
        </div>
      )}
    </div>
  );
}
