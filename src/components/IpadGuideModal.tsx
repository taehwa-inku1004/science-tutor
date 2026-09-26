"use client";

import React, { useState } from "react";
import { X, Tablet, Wifi, Share2, PlusSquare, Copy, Check, Sparkles, FileText } from "lucide-react";

interface IpadGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  localIp: string;
}

export function IpadGuideModal({ isOpen, onClose, localIp }: IpadGuideModalProps) {
  const [copied, setCopied] = useState(false);
  const targetUrl = `http://${localIp || "192.168.75.192"}:3000`;

  if (!isOpen) return null;

  const copyUrl = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shadow-xs">
              <Tablet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                아이패드(iPad) 연동 및 활용 가이드
              </h3>
              <p className="text-xs text-slate-500">
                컴퓨터와 같은 Wi-Fi에서 앱스토어 앱처럼 바로 사용하세요
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

        {/* Steps */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              1
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-indigo-600" />
                동일한 Wi-Fi 연결 확인
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                현재 컴퓨터와 아이패드가 <strong>같은 공유기(Wi-Fi)</strong>에 연결되어 있는지 확인합니다.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              2
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="text-sm font-bold text-slate-900">
                아이패드 Safari(사파리) 브라우저에서 주소 입력
              </h4>
              <p className="text-xs text-slate-600">
                아이패드 사파리 주소창에 아래 주소를 입력하여 접속합니다:
              </p>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-300 font-mono text-xs text-indigo-600 font-bold select-all">
                <span className="flex-1 overflow-x-auto">{targetUrl}</span>
                <button
                  onClick={copyUrl}
                  className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-sans flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "복사됨" : "주소 복사"}
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              3
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-sky-600" />
                <PlusSquare className="w-4 h-4 text-sky-600" />
                [홈 화면에 추가] (전체화면 앱 전환)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                아이패드 사파리 상단의 <strong>[공유]</strong> 버튼을 누른 뒤, <strong>[홈 화면에 추가]</strong>를 선택하면 아이패드 바탕화면에 과학 과외 아이콘이 생깁니다. 브라우저 바 없이 깔끔한 풀스크린 앱으로 공부할 수 있습니다!
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              4
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                굿노트(GoodNotes) / 노타빌리티로 전송
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                과외 분석 화면에서 <strong>[PDF 출력]</strong> 버튼을 누르고, 공유 대상에서 <strong>GoodNotes</strong>를 선택하면 바로 애플펜슬로 필기하면서 복습할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-2.5 text-xs text-indigo-900">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>
            추후 집 밖(독서실, 학교)에서도 쓰고 싶다면 Vercel을 통해 무료로 인터넷에 배포할 수도 있습니다.
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xs transition-colors"
        >
          확인했습니다
        </button>
      </div>
    </div>
  );
}
