import { MockExam, MockExamQuestion } from "@/types/mockExam";
import { SavedNote } from "@/types/tutor";

/**
 * Builds a dynamic 25-question Mock Exam by blending student's saved incorrect notes
 * with the 2022 revised Chunjae Science 2 textbook exam questions.
 */
export function buildDynamicMockExam(
  baseExam: MockExam,
  savedNotes: SavedNote[]
): MockExam {
  if (!savedNotes || savedNotes.length === 0) {
    return baseExam;
  }

  // 1. Filter notes relevant to the exam scope (Unit 5: 식물과 에너지, Unit 4: 동물과 에너지 - 소화/순환/호흡/배설)
  // Or if none match strictly, use any saved notes from 2학년 과학
  const relevantNotes = savedNotes.filter((note) => {
    const text = `${note.curriculumUnit} ${note.subjectDomain} ${note.keyConcept} ${note.title}`;
    return (
      text.includes("식물") ||
      text.includes("광합성") ||
      text.includes("호흡") ||
      text.includes("동물") ||
      text.includes("소화") ||
      text.includes("순환") ||
      text.includes("심장") ||
      text.includes("혈액") ||
      text.includes("배설") ||
      text.includes("콩팥") ||
      text.includes("오줌") ||
      text.includes("네프론") ||
      text.includes("폐포") ||
      text.includes("가로막")
    );
  });

  const notesToUse = relevantNotes.length > 0 ? relevantNotes : savedNotes;

  // 2. Convert each saved note into a MockExamQuestion
  const customQuestions: MockExamQuestion[] = [];

  notesToUse.forEach((note, noteIdx) => {
    // Pick the best quiz question from twinQuiz
    if (note.twinQuiz && note.twinQuiz.length > 0) {
      const q = note.twinQuiz[0];
      let options = [...q.options];

      // Ensure 5 choices
      while (options.length < 5) {
        options.push(`기타 선지 ${options.length + 1}`);
      }
      if (options.length > 5) {
        options = options.slice(0, 5);
      }

      customQuestions.push({
        id: `custom-note-${note.id}-${noteIdx}`,
        number: 0, // Will renumber later
        unit: note.curriculumUnit || "오답노트 연계 문항",
        question: `[내 오답노트 연계] ${q.question}`,
        diagramImageUrl: note.imageUrl,
        diagramCaption: `[내 오답노트 등록 문제] ${note.keyConcept}`,
        options,
        correctAnswerIndex: Math.min(q.correctAnswerIndex, 4),
        explanation: `${q.explanation}\n\n[핵심 정리] ${note.correctAnswerReason || note.keyConcept}`,
        chunjaeConcept: `내 오답노트 출제 포인트: ${note.keyConcept} (${note.title})`,
      });
    } else if (note.recognizedProblem) {
      // Fallback if twinQuiz is empty: use recognized problem
      customQuestions.push({
        id: `custom-note-${note.id}-${noteIdx}`,
        number: 0,
        unit: note.curriculumUnit || "오답노트 연계 문항",
        question: `[내 오답노트 연계] ${note.title}: ${note.recognizedProblem.slice(0, 120)}...`,
        diagramImageUrl: note.imageUrl,
        diagramCaption: `[내 오답노트 등록 문제] ${note.keyConcept}`,
        options: [
          note.correctAnswer || "정답 선지",
          "오답 선지 ①",
          "오답 선지 ②",
          "오답 선지 ③",
          "오답 선지 ④",
        ],
        correctAnswerIndex: 0,
        explanation: note.correctAnswerReason || "정답 해설입니다.",
        chunjaeConcept: `내 오답노트 핵심: ${note.keyConcept}`,
      });
    }
  });

  // Limit custom questions to max 10 to keep a healthy mix with textbook questions
  const maxCustom = Math.min(customQuestions.length, 10);
  const selectedCustom = customQuestions.slice(0, maxCustom);

  // Take remaining from baseExam to make exactly 25 questions
  const remainingCount = 25 - selectedCustom.length;
  const selectedBase = baseExam.questions.slice(0, remainingCount);

  // Combine and renumber from 1 to 25
  const mergedQuestions: MockExamQuestion[] = [
    ...selectedCustom,
    ...selectedBase,
  ].map((q, idx) => ({
    ...q,
    number: idx + 1,
  }));

  return {
    ...baseExam,
    subtitle: `내 오답노트 연계 (${selectedCustom.length}제) + 천재교과서 실전 (${selectedBase.length}제) = 총 25제 완벽 대비`,
    questions: mergedQuestions,
    totalQuestions: 25,
  };
}
