"use client";

import React, { useState } from "react";
import { X, BookOpen, Trash2, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { SavedNote, ScienceDomain } from "@/types/tutor";

interface NotesArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedNotes: SavedNote[];
  onSelectNote: (note: SavedNote) => void;
  onDeleteNote: (id: string) => void;
}

export function NotesArchiveModal({
  isOpen,
  onClose,
  savedNotes,
  onSelectNote,
  onDeleteNote,
}: NotesArchiveModalProps) {
  const [filterDomain, setFilterDomain] = useState<string>("전체");

  if (!isOpen) return null;

  const categories = [
    "전체",
    "화학 (물질의 특성)",
    "생물 (동물과 에너지)",
    "생물 (식물과 에너지)",
    "물리 (열과 우리 생활)",
    "지구과학 (수권과 해수)",
  ];

  const filteredNotes =
    filterDomain === "전체"
      ? savedNotes
      : savedNotes.filter((n) => n.subjectDomain === (filterDomain as ScienceDomain));

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] p-6 sm:p-8 shadow-2xl border border-slate-200 flex flex-col space-y-5 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                나만의 오답노트 보관함 ({savedNotes.length})
              </h3>
              <p className="text-xs text-slate-500">
                기말고사 전 언제든 다시 복습하고 퀴즈를 풀어보세요
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

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterDomain(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterDomain === cat
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredNotes.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Sparkles className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-medium">저장된 오답노트가 없습니다.</p>
              <p className="text-xs">
                문제를 분석한 후 [오답노트 저장] 버튼을 누르면 이곳에 보관됩니다.
              </p>
            </div>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                className="group p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50/40 border border-slate-200/80 hover:border-indigo-300 transition-all flex items-center justify-between gap-4"
              >
                <div
                  onClick={() => {
                    onSelectNote(note);
                    onClose();
                  }}
                  className="flex-1 cursor-pointer space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800">
                      {note.subjectDomain}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900">
                    {note.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    핵심 개념: {note.keyConcept}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDeleteNote(note.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                    title="오답노트 삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectNote(note);
                      onClose();
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white group-hover:bg-indigo-600 text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-indigo-600 text-xs font-semibold transition-all"
                  >
                    <span>공부하기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
