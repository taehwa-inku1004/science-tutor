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

function getCleanTextbookDiagram(note: SavedNote): { imageUrl?: string; caption?: string } {
  const text = `${note.curriculumUnit} ${note.title} ${note.keyConcept}`;
  if (text.includes("소화계") || text.includes("소화 기관")) {
    return { imageUrl: "/mock-exam/q-2.jpg", caption: "[교과서 표준 도식] 사람의 소화계 구조" };
  }
  if (text.includes("침") || text.includes("녹말") || text.includes("아밀레이스")) {
    return { imageUrl: "/mock-exam/q-3.jpg", caption: "[교과서 표준 실험] 침의 소화 작용 실험" };
  }
  if (text.includes("융털") || text.includes("소장")) {
    return { imageUrl: "/mock-exam/q-8.jpg", caption: "[교과서 표준 도식] 소장 융털의 구조와 영양소 흡수" };
  }
  if (text.includes("혈액") && text.includes("원심분리")) {
    return { imageUrl: "/mock-exam/q-9.jpg", caption: "[교과서 표준 도식] 혈액의 구성 성분" };
  }
  if (text.includes("심장") || text.includes("판막")) {
    return { imageUrl: "/mock-exam/q-10.jpg", caption: "[교과서 표준 도식] 심장의 구조와 판막" };
  }
  if (text.includes("순환") || text.includes("폐순환") || text.includes("온몸순환")) {
    return { imageUrl: "/mock-exam/q-12.jpg", caption: "[교과서 표준 도식] 사람의 혈액 순환 경로" };
  }
  if (text.includes("정맥") || text.includes("혈관")) {
    return { imageUrl: "/mock-exam/q-15.jpg", caption: "[교과서 표준 도식] 정맥의 판막과 혈류" };
  }
  if (text.includes("잎") || text.includes("단면")) {
    return { imageUrl: "/mock-exam/q-17.jpg", caption: "[교과서 표준 도식] 잎의 단면 구조" };
  }
  if (text.includes("검정말") || text.includes("기포")) {
    return { imageUrl: "/mock-exam/q-20.jpg", caption: "[교과서 표준 실험] 검정말 광합성 실험" };
  }
  if (text.includes("기공") || text.includes("공변세포")) {
    return { imageUrl: "/mock-exam/q-22.jpg", caption: "[교과서 표준 현미경] 기공과 공변세포의 개폐" };
  }
  if (text.includes("BTB") || text.includes("호흡과 광합성")) {
    return { imageUrl: "/mock-exam/q-23.jpg", caption: "[교과서 표준 실험] BTB 용액을 이용한 광합성과 호흡" };
  }
  if (text.includes("영양소") || text.includes("검출")) {
    return { imageUrl: "/mock-exam/q-1.jpg", caption: "[교과서 표준 실험] 영양소 검출 반응" };
  }
  return { imageUrl: undefined, caption: undefined };
}

  // 2. Convert each saved note into a freshly-authored MockExamQuestion (no handwritten pen marks)
  const customQuestions: MockExamQuestion[] = [];

  notesToUse.forEach((note, noteIdx) => {
    const cleanDiagram = getCleanTextbookDiagram(note);

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
        unit: note.curriculumUnit || "오답노트 클리닉",
        question: `[오답 클리닉 신규 문항] ${q.question}`,
        diagramImageUrl: cleanDiagram.imageUrl,
        diagramCaption: cleanDiagram.caption,
        options,
        correctAnswerIndex: Math.min(q.correctAnswerIndex, 4),
        explanation: `${q.explanation}\n\n[핵심 원리] ${note.correctAnswerReason || note.keyConcept}`,
        chunjaeConcept: `출제 핵심 개념: ${note.keyConcept} (${note.title})`,
      });
    } else if (note.recognizedProblem) {
      // Clean fallback without any raw photo
      customQuestions.push({
        id: `custom-note-${note.id}-${noteIdx}`,
        number: 0,
        unit: note.curriculumUnit || "오답노트 클리닉",
        question: `[오답 클리닉 신규 문항] ${note.title}: 다음 중 이에 대한 설명으로 옳은 것은?`,
        diagramImageUrl: cleanDiagram.imageUrl,
        diagramCaption: cleanDiagram.caption,
        options: [
          note.correctAnswer || "정답 선지",
          "오답 선지 ①",
          "오답 선지 ②",
          "오답 선지 ③",
          "오답 선지 ④",
        ],
        correctAnswerIndex: 0,
        explanation: note.correctAnswerReason || "정답 해설입니다.",
        chunjaeConcept: `출제 핵심 개념: ${note.keyConcept}`,
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
