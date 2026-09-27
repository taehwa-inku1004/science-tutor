"use client";

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Clock,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ListOrdered,
  BookOpen,
  FileCheck2,
  Printer,
  Sparkles,
} from "lucide-react";
import { MockExam, MockExamQuestion, ExamSubmission } from "@/types/mockExam";
import { LatexRenderer } from "./LatexRenderer";

interface MockExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: MockExam;
}

export function MockExamModal({ isOpen, onClose, exam }: MockExamModalProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(exam.timeLimitMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [submission, setSubmission] = useState<ExamSubmission | null>(null);
  const [reviewFilter, setReviewFilter] = useState<"all" | "wrong" | "correct">("all");
  const [isOmrOpen, setIsOmrOpen] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset when exam opens
  useEffect(() => {
    if (isOpen && !isSubmitted) {
      setAnswers({});
      setCurrentIdx(0);
      setIsSubmitted(false);
      setSubmission(null);
      setSecondsRemaining(exam.timeLimitMinutes * 60);
      setIsTimerRunning(true);
    }
  }, [isOpen, exam]);

  // Countdown Timer
  useEffect(() => {
    if (isOpen && isTimerRunning && !isSubmitted) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isTimerRunning, isSubmitted]);

  if (!isOpen) return null;

  const currentQ: MockExamQuestion = exam.questions[currentIdx];
  const answeredCount = Object.keys(answers).length;

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleSelectAnswer = (qNumber: number, optionIdx: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [qNumber]: optionIdx }));
  };

  const handleSubmitExam = () => {
    if (isSubmitted) return;

    let correctCount = 0;
    exam.questions.forEach((q) => {
      if (answers[q.number] === q.correctAnswerIndex) {
        correctCount += 1;
      }
    });

    const score = Math.round((correctCount / exam.totalQuestions) * 100);
    const timeSpent = exam.timeLimitMinutes * 60 - secondsRemaining;

    const sub: ExamSubmission = {
      answers,
      score,
      totalScore: 100,
      correctCount,
      totalCount: exam.totalQuestions,
      timeSpentSeconds: timeSpent,
      submittedAt: new Date().toISOString(),
    };

    setSubmission(sub);
    setIsSubmitted(true);
    setIsTimerRunning(false);

    if (score >= 80) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }
  };

  const handleResetExam = () => {
    setAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setSubmission(null);
    setSecondsRemaining(exam.timeLimitMinutes * 60);
    setIsTimerRunning(true);
  };

  const filteredReviewQuestions = exam.questions.filter((q) => {
    if (!submission) return true;
    const isCorrect = answers[q.number] === q.correctAnswerIndex;
    if (reviewFilter === "wrong") return !isCorrect;
    if (reviewFilter === "correct") return isCorrect;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className="bg-slate-50 rounded-3xl w-full max-w-5xl h-[95vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                  {exam.textbook}
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  25문항 실전 시험
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                {exam.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Timer (Active during test) */}
            {!isSubmitted && (
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-colors ${
                  secondsRemaining < 300
                    ? "bg-rose-50 border-rose-300 text-rose-700 animate-pulse"
                    : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            )}

            {/* Answered Counter */}
            {!isSubmitted && (
              <span className="hidden md:inline-flex items-center text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200">
                답안 작성: {answeredCount}/{exam.totalQuestions}
              </span>
            )}

            {/* OMR Toggle for iPad / mobile */}
            {!isSubmitted && (
              <button
                type="button"
                onClick={() => setIsOmrOpen(!isOmrOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                <ListOrdered className="w-4 h-4 text-slate-500" />
                <span className="hidden sm:inline">OMR 카드</span>
              </button>
            )}

            {/* Submit button */}
            {!isSubmitted ? (
              <button
                type="button"
                onClick={() => {
                  if (
                    answeredCount < exam.totalQuestions &&
                    !window.confirm(
                      `아직 풀지 않은 문제가 ${exam.totalQuestions - answeredCount}개 있습니다. 그래도 제출하시겠습니까?`
                    )
                  ) {
                    return;
                  }
                  handleSubmitExam();
                }}
                className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer active:scale-95"
              >
                시험 제출 & 채점
              </button>
            ) : (
              <button
                type="button"
                onClick={handleResetExam}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>다시 응시하기</span>
              </button>
            )}

            {/* Close modal */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Body Container */}
        {!isSubmitted ? (
          /* ================= ACTIVE EXAM VIEW ================= */
          <div className="flex-1 flex overflow-hidden">
            {/* Left/Center: Question Paper */}
            <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Question Card */}
              <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-black shadow-2xs">
                      {currentQ.number}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {currentQ.unit}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono font-medium">
                    {currentQ.number} / {exam.totalQuestions}
                  </span>
                </div>

                {/* Question Prompt */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  <LatexRenderer content={currentQ.question} />
                </h3>

                {/* Scientific Vector Diagram / Graph */}
                {currentQ.diagramSvg && (
                  <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-200/80 my-2">
                    {currentQ.diagramCaption && (
                      <p className="text-xs font-bold text-indigo-700 mb-2 text-center">
                        {currentQ.diagramCaption}
                      </p>
                    )}
                    <div
                      className="flex justify-center"
                      dangerouslySetInnerHTML={{ __html: currentQ.diagramSvg }}
                    />
                  </div>
                )}

                {/* 5 Choices */}
                <div className="space-y-2.5 pt-2">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = answers[currentQ.number] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectAnswer(currentQ.number, optIdx)}
                        className={`w-full flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all cursor-pointer select-none active:scale-[0.99] ${
                          isSelected
                            ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold ring-2 ring-indigo-200 shadow-xs"
                            : "bg-white hover:bg-slate-50/80 border-slate-200 text-slate-800"
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                            isSelected
                              ? "bg-indigo-600 text-white shadow-2xs"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {["①", "②", "③", "④", "⑤"][optIdx] || optIdx + 1}
                        </span>
                        <span className="flex-1 leading-relaxed">
                          <LatexRenderer content={option} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                  disabled={currentIdx === 0}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>이전 문제</span>
                </button>

                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-500 font-semibold">
                    {answeredCount}개 입력 완료
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentIdx((prev) =>
                      Math.min(exam.totalQuestions - 1, prev + 1)
                    )
                  }
                  disabled={currentIdx === exam.totalQuestions - 1}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold disabled:opacity-40 transition-colors cursor-pointer shadow-xs"
                >
                  <span>다음 문제</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: OMR Sheet (Always visible on lg, slide-over on mobile) */}
            <div
              className={`w-72 bg-white border-l border-slate-200 flex flex-col shrink-0 p-4 transition-all duration-200 ${
                isOmrOpen ? "block" : "hidden lg:flex"
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <ListOrdered className="w-4 h-4 text-indigo-600" />
                  <h4 className="text-xs font-bold text-slate-800">
                    OMR 답안지 (1 ~ 25)
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {answeredCount}/{exam.totalQuestions}
                </span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
                {exam.questions.map((q, idx) => {
                  const selectedOpt = answers[q.number];
                  const isCurrent = idx === currentIdx;
                  const isAnswered = selectedOpt !== undefined;

                  return (
                    <div
                      key={q.number}
                      onClick={() => setCurrentIdx(idx)}
                      className={`flex items-center justify-between p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                        isCurrent
                          ? "border-indigo-600 bg-indigo-50/50 font-bold ring-1 ring-indigo-300"
                          : "border-slate-100 hover:border-slate-300 bg-slate-50/50"
                      }`}
                    >
                      <span className="text-slate-600 font-mono w-6">
                        {String(q.number).padStart(2, " ")}번
                      </span>
                      <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map((optIdx) => {
                          const isChoice = selectedOpt === optIdx;
                          return (
                            <span
                              key={optIdx}
                              className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                                isChoice
                                  ? "bg-indigo-600 text-white shadow-2xs"
                                  : "bg-white text-slate-400 border border-slate-200"
                              }`}
                            >
                              {["①", "②", "③", "④", "⑤"][optIdx]}
                            </span>
                          );
                        })}
                      </div>
                      <span
                        className={`text-[10px] font-bold ${
                          isAnswered ? "text-emerald-600" : "text-slate-300"
                        }`}
                      >
                        {isAnswered ? "완료" : "미입력"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleSubmitExam}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  답안 제출 & 채점하기
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= EXAM REPORT / GRADING VIEW ================= */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Score Banner */}
            <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-xs">
                  <Award className="w-4 h-4" />
                  <span>천재교육 교과서 25제 최종 모의고사 채점 결과</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  {submission?.score! >= 90
                    ? "대단해요! 기말고사 만점 각입니다! 🏆"
                    : submission?.score! >= 80
                    ? "우수한 성적입니다! 틀린 문제만 점검하세요! ✨"
                    : "조금만 더 복습하면 충분히 100점 가능합니다! 힘내세요! 💪"}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-200 font-sans">
                  총 {exam.totalQuestions}문제 중 {submission?.correctCount}문제를
                  맞혔습니다. (소요 시간: {Math.floor(submission?.timeSpentSeconds! / 60)}분 {submission?.timeSpentSeconds! % 60}초)
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xs border border-white/10 shrink-0">
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">
                    {submission?.score}
                  </span>
                  <span className="text-xs text-indigo-200 block">/ 100점</span>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {submission?.correctCount}/{exam.totalQuestions}
                  </span>
                  <span className="text-xs text-indigo-200 block">정답 수</span>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setReviewFilter("all")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    reviewFilter === "all"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  전체 문항 (25)
                </button>
                <button
                  type="button"
                  onClick={() => setReviewFilter("wrong")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                    reviewFilter === "wrong"
                      ? "bg-rose-600 text-white"
                      : "bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200"
                  }`}
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>오답만 보기 ({exam.totalQuestions - submission?.correctCount!})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReviewFilter("correct")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                    reviewFilter === "correct"
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>맞힌 문제만 ({submission?.correctCount})</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>인쇄하기</span>
                </button>
              </div>
            </div>

            {/* Review Question List */}
            <div className="space-y-6">
              {filteredReviewQuestions.map((q) => {
                const userChoice = answers[q.number];
                const isCorrect = userChoice === q.correctAnswerIndex;

                return (
                  <div
                    key={q.id}
                    className={`bg-white rounded-3xl p-5 sm:p-6 border shadow-xs space-y-4 ${
                      isCorrect ? "border-slate-200" : "border-rose-300 ring-2 ring-rose-100"
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black text-white ${
                            isCorrect ? "bg-emerald-600" : "bg-rose-600"
                          }`}
                        >
                          {q.number}
                        </span>
                        <span className="text-xs font-bold text-slate-700">
                          {q.unit}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            정답
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" />
                            오답 (내가 고른 답: {userChoice !== undefined ? ["①", "②", "③", "④", "⑤"][userChoice] : "미입력"})
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      <LatexRenderer content={q.question} />
                    </h4>

                    {q.diagramSvg && (
                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 my-2">
                        {q.diagramCaption && (
                          <p className="text-xs font-bold text-indigo-700 mb-1.5 text-center">
                            {q.diagramCaption}
                          </p>
                        )}
                        <div
                          className="flex justify-center"
                          dangerouslySetInnerHTML={{ __html: q.diagramSvg }}
                        />
                      </div>
                    )}

                    {/* Options list */}
                    <div className="space-y-1.5 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const isRightOpt = optIdx === q.correctAnswerIndex;
                        const isUserOpt = optIdx === userChoice;

                        let style = "bg-slate-50/70 border-slate-200 text-slate-700";
                        if (isRightOpt) {
                          style = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-300";
                        } else if (isUserOpt && !isRightOpt) {
                          style = "bg-rose-50 border-rose-300 text-rose-900 line-through opacity-80";
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs sm:text-sm ${style}`}
                          >
                            <span className="w-6 h-6 rounded-lg bg-white/80 flex items-center justify-center font-bold shrink-0">
                              {["①", "②", "③", "④", "⑤"][optIdx]}
                            </span>
                            <span className="flex-1">
                              <LatexRenderer content={opt} />
                            </span>
                            {isRightOpt && (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                                정답
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Textbook Concept & Detailed Explanation */}
                    <div className="mt-3 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-indigo-900 font-bold">
                        <BookOpen className="w-4 h-4 text-indigo-600" />
                        <span>{q.chunjaeConcept}</span>
                      </div>
                      <p className="text-slate-800 leading-relaxed font-sans">
                        <LatexRenderer content={q.explanation} />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
