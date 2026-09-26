"use client";

import React, { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, RotateCw, Maximize2, X } from "lucide-react";

interface ProblemViewerProps {
  imageUrl?: string;
  recognizedText: string;
}

export function ProblemViewer({ imageUrl, recognizedText }: ProblemViewerProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showFullModal, setShowFullModal] = useState(false);

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.75));
  const resetZoom = () => {
    setScale(1);
    setRotation(0);
  };
  const rotateRight = () => setRotation((r) => (r + 90) % 360);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Top Header */}
      <div className="px-4 py-3 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          원본 문제 및 지문
        </span>

        {/* Zoom & Rotate Controls */}
        {imageUrl && (
          <div className="flex items-center gap-1 no-print">
            <button
              onClick={rotateRight}
              className="p-1.5 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition-colors flex items-center gap-1 cursor-pointer"
              title="오른쪽으로 90° 회전"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span className="text-[10px] font-semibold text-indigo-600 hidden sm:inline">회전</span>
            </button>
            <div className="w-px h-3.5 bg-slate-300 mx-0.5" />
            <button
              onClick={zoomOut}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="축소"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-slate-500 w-10 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="확대"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={resetZoom}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="원래 크기 및 방향 초기화"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setShowFullModal(true)}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="전체화면"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Image Viewer Area */}
      {imageUrl && (
        <div className="relative bg-slate-950 overflow-hidden flex items-center justify-center p-3 min-h-[260px] max-h-[420px] sm:max-h-[500px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt="문제 사진"
            style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
            className="max-h-full max-w-full object-contain transition-transform duration-200 origin-center rounded-sm"
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
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={rotateRight}
              className="px-3.5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
              90° 회전
            </button>
            <button
              onClick={() => setShowFullModal(false)}
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-xl backdrop-blur-md cursor-pointer"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt="문제 사진 확대"
            style={{ transform: `rotate(${rotation}deg)` }}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
          />
        </div>
      )}
    </div>
  );
}
