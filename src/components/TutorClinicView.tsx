"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Target,
  AlertTriangle,
  BookMarked,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Printer,
  Bookmark,
  Check,
  Share2,
  RotateCcw,
} from "lucide-react";
import { TutorAnalysis } from "@/types/tutor";
import { LatexRenderer } from "./LatexRenderer";

interface TutorClinicViewProps {
  analysis: TutorAnalysis;
  isSaved: boolean;
  onSaveNote: () => void;
}

export function TutorClinicView({
  analysis,
  isSaved,
  onSaveNote,
}: TutorClinicViewProps) {
  // Quiz state: map of quizId -> selected option index
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // Automatically reset quiz choices and feedback when switching to another note or problem
  useEffect(() => {
    setSelectedAnswers({});
    setShowFeedback({});
  }, [analysis.id]);

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowFeedback({});
  };

  const handleSelectOption = (quizId: string, optionIndex: number, correctIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [quizId]: optionIndex }));
    setShowFeedback((prev) => ({ ...prev, [quizId]: true }));

    if (optionIndex === correctIndex) {
      // Fire celebration confetti!
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // ignore if canvas not supported
      }
    }
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `[중2 과학] ${analysis.title}`,
          text: `[핵심 개념] ${analysis.keyConcept}\n${analysis.correctAnswerReason || ""}`,
          url: window.location.href,
        });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(
        `[중2 과학 과외노트] ${analysis.title}\n핵심: ${analysis.keyConcept}\n${window.location.href}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6 print-page">
      {/* Top Banner / Actions */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
              {analysis.subjectDomain}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {analysis.curriculumUnit}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {analysis.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            핵심 키워드: <span className="text-indigo-600 font-bold">{analysis.keyConcept}</span>
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-2 no-print shrink-0">
          <button
            onClick={onSaveNote}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
              isSaved
                ? "bg-emerald-50 text-emerald-700 border-emerald-300 shadow-2xs"
                : "bg-white hover:bg-slate-50 text-slate-700 border-slate-300"
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                보관 완료
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-slate-500" />
                오답노트 저장
              </>
            )}
          </button>

          <button
            onClick={handlePrintPdf}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-2xs transition-colors"
            title="굿노트(GoodNotes) / 인쇄용 PDF 출력"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">PDF 출력</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
            title="공유하기"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Primary Correct Answer Callout Box - High Visibility & Clean Contrast */}
      {analysis.correctAnswer && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-500 shadow-md shadow-emerald-500/5 relative overflow-hidden">
          {/* Top accent gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600" />

          {/* Top Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200 shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider block mb-0.5">
                  문제의 정확한 정답
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-slate-400">정답:</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                    {analysis.correctAnswer}
                  </span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-extrabold self-start sm:self-auto border border-emerald-200">
              <Check className="w-4 h-4 text-emerald-600" />
              검증된 정답
            </div>
          </div>

          {/* Core Reason Box with Crisp High Contrast */}
          {analysis.correctAnswerReason && (
            <div className="mt-4 p-4 rounded-2xl bg-slate-50/90 border border-emerald-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-emerald-900">
                <span className="text-base">💡</span>
                <span>정답인 핵심 이유</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-800 leading-relaxed font-sans font-medium pl-1">
                <LatexRenderer content={analysis.correctAnswerReason} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Options Analysis Breakdown (선지별 O/X 정밀 분석) */}
      {analysis.optionsAnalysis && analysis.optionsAnalysis.length > 0 && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-indigo-900 border-b border-slate-100 pb-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight">선지별 O / X 정밀 판별표</h3>
              <p className="text-[11px] text-slate-500">
                시험지 필기를 배제하고 순수 과학 원리로 검증한 선지별 분석입니다.
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            {analysis.optionsAnalysis.map((item, idx) => {
              // Extract circled numbers (①, ②, ③, ④, ⑤) or "N번"
              const circledList = ["①", "②", "③", "④", "⑤"];
              let itemNum = idx + 1;
              for (let i = 0; i < circledList.length; i++) {
                if (item.includes(circledList[i])) {
                  itemNum = i + 1;
                  break;
                }
              }

              let correctNum: number | null = null;
              for (let i = 0; i < circledList.length; i++) {
                if (analysis.correctAnswer.includes(circledList[i])) {
                  correctNum = i + 1;
                  break;
                }
              }
              if (correctNum === null) {
                const match = analysis.correctAnswer.match(/([1-5])\s*번/);
                if (match) correctNum = parseInt(match[1], 10);
              }

              // True ONLY if this item's number matches the winning option number
              const isCorrectOption = correctNum !== null && itemNum === correctNum;

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border transition-all text-xs sm:text-sm leading-relaxed font-sans ${
                    isCorrectOption
                      ? "bg-emerald-50/90 border-2 border-emerald-400 text-emerald-950 font-medium shadow-xs ring-1 ring-emerald-300"
                      : "bg-slate-50/80 border border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <LatexRenderer content={item} />
                    </div>
                    {isCorrectOption ? (
                      <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center gap-1 shadow-2xs">
                        <Check className="w-3 h-3" />
                        정답 선지
                      </span>
                    ) : (
                      <span className="shrink-0 px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold">
                        오답
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2-Column or Stacked Educational Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: Exam Intent */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-indigo-200 transition-colors">
          <div className="flex items-center gap-2 mb-3 text-indigo-700">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Target className="w-4 h-4 text-indigo-600" />
            </div>
            <h3 className="text-sm font-bold tracking-tight">출제자의 시험 출제 의도</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            {analysis.examIntent}
          </p>
        </div>

        {/* Card 2: Trap and Misconception */}
        <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/80 shadow-xs">
          <div className="flex items-center gap-2 mb-3 text-amber-800">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
            </div>
            <h3 className="text-sm font-bold tracking-tight">학생들이 틀리기 쉬운 함정!</h3>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-sans">
            {analysis.trapAndMisconceptions}
          </p>
        </div>
      </div>

      {/* Step-by-Step Core Principles */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 text-indigo-900 border-b border-slate-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <BookMarked className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold">단계별 핵심 원리 & 수식 공식 마스터</h3>
            <span className="text-xs text-slate-500 font-medium">
              문제 풀이의 뼈대가 되는 핵심 개념과 정답 도출 단계
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {analysis.teacherExplanation.corePrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:bg-indigo-50/20 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                {idx + 1}
              </div>
              <div className="flex-1 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                <LatexRenderer content={principle} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 5-Choice Twin Quiz */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-6 print-page-break">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3">
          <div className="flex items-center gap-3 text-slate-900">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shadow-2xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">실전 5지선다 쌍둥이 확인 퀴즈</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold">
                  총 {analysis.twinQuiz?.length || 0}문제
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                실제 학교 시험과 동일한 5지선다형 객관식 문제입니다. 정답 번호를 터치하여 바로 채점해 보세요.
              </p>
            </div>
          </div>

          {/* Live Progress & Score & Reset button */}
          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto flex-wrap">
            {analysis.twinQuiz && analysis.twinQuiz.length > 0 && (
              <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold">
                <span className="text-slate-600">
                  풀이 완료:{" "}
                  <strong className="text-indigo-600">
                    {analysis.twinQuiz.filter((q) => selectedAnswers[q.id] !== undefined).length}
                  </strong>
                  /{analysis.twinQuiz.length}
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">
                  정답:{" "}
                  <strong className="text-emerald-600">
                    {analysis.twinQuiz.filter((q) => selectedAnswers[q.id] === q.correctAnswerIndex).length}
                  </strong>
                  개
                </span>
              </div>
            )}

            {Object.keys(selectedAnswers).length > 0 && (
              <button
                type="button"
                onClick={handleResetQuiz}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer shadow-2xs active:scale-[0.98]"
                title="퀴즈 풀이 상태 초기화"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>다시 풀기</span>
              </button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {analysis.twinQuiz.map((quiz, qIdx) => {
            const selected = selectedAnswers[quiz.id];
            const isAnswered = selected !== undefined;
            const isCorrect = selected === quiz.correctAnswerIndex;

            return (
              <div
                key={quiz.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3.5 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-indigo-600 text-white shrink-0 mt-0.5 shadow-2xs">
                    Q{qIdx + 1}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    <LatexRenderer content={quiz.question} />
                  </div>
                </div>

                {/* 5-Choice Vertical Options */}
                <div className="flex flex-col gap-2 pt-1">
                  {quiz.options.map((opt, optIdx) => {
                    const isSelected = selected === optIdx;
                    const isRightOption = optIdx === quiz.correctAnswerIndex;

                    let btnStyle =
                      "bg-white hover:bg-indigo-50/50 text-slate-800 border-slate-200 hover:border-indigo-300";

                    if (isAnswered) {
                      if (isRightOption) {
                        btnStyle =
                          "bg-emerald-50 text-emerald-900 border-emerald-400 font-bold ring-2 ring-emerald-300";
                      } else if (isSelected && !isRightOption) {
                        btnStyle =
                          "bg-rose-50 text-rose-900 border-rose-300 opacity-80";
                      } else {
                        btnStyle = "bg-white text-slate-400 border-slate-100 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() =>
                          handleSelectOption(quiz.id, optIdx, quiz.correctAnswerIndex)
                        }
                        className={`flex items-center gap-3 p-3 sm:py-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer select-none active:scale-[0.99] ${btnStyle}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                            isAnswered && isRightOption
                              ? "bg-emerald-200 text-emerald-900"
                              : isAnswered && isSelected
                              ? "bg-rose-200 text-rose-900"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {["①", "②", "③", "④", "⑤"][optIdx] || optIdx + 1}
                        </span>
                        <span className="flex-1">
                          <LatexRenderer content={opt} />
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Box */}
                {isAnswered && (
                  <div
                    className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 transition-all ${
                      isCorrect
                        ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                        : "bg-rose-50 text-rose-900 border border-rose-200"
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1.5 flex-1">
                      <p className="font-bold text-sm">
                        {isCorrect
                          ? "정답입니다! 🎉"
                          : `아쉽게 틀렸어요! (정답: ${["①", "②", "③", "④", "⑤"][quiz.correctAnswerIndex] || quiz.correctAnswerIndex + 1}번)`}
                      </p>
                      <div className="text-slate-700 leading-relaxed font-sans pt-1 border-t border-slate-200/60">
                        <strong className="text-xs text-slate-500 block mb-0.5">해설:</strong>
                        <LatexRenderer content={quiz.explanation} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
