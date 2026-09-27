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

// Dedicated Textbook SVGs
const SVG_RING_BARKING = `<svg viewBox="0 0 540 280" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="barkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#78350f" />
      <stop offset="40%" stop-color="#9a3412" />
      <stop offset="70%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>
    <linearGradient id="xylemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fef3c7" />
      <stop offset="50%" stop-color="#ffedd5" />
      <stop offset="100%" stop-color="#fde68a" />
    </linearGradient>
    <filter id="shadowBark" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.2" />
    </filter>
  </defs>
  <rect width="540" height="280" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5" />

  <!-- Tree trunk stem -->
  <g transform="translate(180, 20)" filter="url(#shadowBark)">
    <!-- Upper trunk above swelling -->
    <path d="M 40 10 L 40 70 L 100 70 L 100 10 Z" fill="url(#barkGrad)" stroke="#451a03" stroke-width="1.5" />
    <!-- Swollen area (A: 부풀어 오른 윗부분) -->
    <path d="M 40 70 C 20 85, 20 105, 43 115 L 97 115 C 120 105, 120 85, 100 70 Z" fill="url(#barkGrad)" stroke="#451a03" stroke-width="1.5" />
    
    <!-- Cut area (환상 박피 부위: 껍질/체관 제거, 안쪽 물관 노출) -->
    <rect x="44" y="115" width="52" height="40" fill="url(#xylemGrad)" stroke="#d97706" stroke-width="1.5" />
    <!-- Striations for xylem wood -->
    <line x1="57" y1="115" x2="57" y2="155" stroke="#f59e0b" stroke-width="1" />
    <line x1="70" y1="115" x2="70" y2="155" stroke="#f59e0b" stroke-width="1" />
    <line x1="83" y1="115" x2="83" y2="155" stroke="#f59e0b" stroke-width="1" />

    <!-- Lower trunk (B: 아래쪽 줄기, 굵기 변화 없음) -->
    <path d="M 40 155 L 40 230 L 100 230 L 100 155 Z" fill="url(#barkGrad)" stroke="#451a03" stroke-width="1.5" />
  </g>

  <!-- Labels & Callouts -->
  <!-- Callout A -->
  <rect x="25" y="65" width="130" height="42" rx="8" fill="#ffffff" stroke="#b91c1c" stroke-width="1.5" filter="url(#shadowBark)" />
  <text x="90" y="84" font-size="12" font-weight="900" fill="#b91c1c" text-anchor="middle">A (줄기 위쪽)</text>
  <text x="90" y="99" font-size="9" font-weight="bold" fill="#7f1d1d" text-anchor="middle">부풀어 오름 (양분 축적)</text>
  <line x1="155" y1="88" x2="202" y2="88" stroke="#b91c1c" stroke-width="2" />
  <circle cx="202" cy="88" r="3" fill="#b91c1c" />

  <!-- Cut zone label -->
  <rect x="345" y="115" width="165" height="42" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5" filter="url(#shadowBark)" />
  <text x="427" y="133" font-size="11" font-weight="900" fill="#92400e" text-anchor="middle">환상 박피 부위</text>
  <text x="427" y="148" font-size="9" fill="#78350f" text-anchor="middle">바깥쪽 체관 제거 / 안쪽 물관 유지</text>
  <line x1="345" y1="135" x2="278" y2="135" stroke="#d97706" stroke-width="2" />
  <circle cx="278" cy="135" r="3" fill="#d97706" />

  <!-- Callout B -->
  <rect x="25" y="170" width="130" height="42" rx="8" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5" filter="url(#shadowBark)" />
  <text x="90" y="189" font-size="12" font-weight="900" fill="#1d4ed8" text-anchor="middle">B (줄기 아래쪽)</text>
  <text x="90" y="204" font-size="9" fill="#1e3a8a" text-anchor="middle">굵기 변화 없음</text>
  <line x1="155" y1="192" x2="220" y2="192" stroke="#1d4ed8" stroke-width="2" />
  <circle cx="220" cy="192" r="3" fill="#1d4ed8" />

  <!-- Bottom explanation banner -->
  <rect x="25" y="240" width="490" height="30" rx="6" fill="#fefce8" stroke="#fde047" />
  <text x="270" y="260" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">
    원리: 잎에서 만든 유기 양분(설탕)이 체관을 타고 내려오다 박피 부위(A)에 쌓여 부풀어 오름
  </text>
</svg>`;
const SVG_TEMP_GRAPH = `<svg viewBox="0 0 540 280" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="curveFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0.0" />
    </linearGradient>
    <linearGradient id="lightFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0" />
    </linearGradient>
    <filter id="shadowGraph" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2.5" flood-opacity="0.12" />
    </filter>
  </defs>
  <rect width="540" height="280" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5" />

  <!-- Graph 1: (가) 빛의 세기 / CO2 농도 -->
  <g transform="translate(30, 25)">
    <rect x="0" y="0" width="220" height="195" rx="10" fill="#ffffff" stroke="#cbd5e1" filter="url(#shadowGraph)" />
    <text x="110" y="24" font-size="11" font-weight="900" fill="#1e40af" text-anchor="middle">(가) 빛의 세기 or CO₂ 농도</text>

    <!-- Axes -->
    <line x1="35" y1="155" x2="195" y2="155" stroke="#334155" stroke-width="2" />
    <line x1="35" y1="155" x2="35" y2="45" stroke="#334155" stroke-width="2" />
    <!-- Arrow heads -->
    <polygon points="198,155 190,151 190,159" fill="#334155" />
    <polygon points="35,42 31,50 39,50" fill="#334155" />
    
    <text x="115" y="172" font-size="9" fill="#475569" text-anchor="middle">빛의 세기(CO₂ 농도) ➔</text>
    <text x="25" y="42" font-size="9" fill="#475569" text-anchor="middle">광합성량</text>

    <!-- Curve: Saturation curve -->
    <path d="M 35 155 Q 75 140 100 85 T 185 80 L 185 155 Z" fill="url(#lightFill)" />
    <path d="M 35 155 Q 75 140 100 85 T 185 80" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
    
    <circle cx="115" cy="81" r="3.5" fill="#2563eb" />
    <text x="115" y="73" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">광포화점</text>
    <text x="115" y="115" font-size="9" fill="#64748b" text-anchor="middle">일정 세기 이상 ➔ 일정</text>
  </g>

  <!-- Graph 2: (나) 온도 (Temperature) - Asymmetric Bell Curve -->
  <g transform="translate(280, 25)">
    <rect x="0" y="0" width="230" height="195" rx="10" fill="#ffffff" stroke="#cbd5e1" filter="url(#shadowGraph)" />
    <text x="115" y="24" font-size="11" font-weight="900" fill="#b91c1c" text-anchor="middle">(나) 온도 (Temperature) ★</text>

    <!-- Axes -->
    <line x1="35" y1="155" x2="205" y2="155" stroke="#334155" stroke-width="2" />
    <line x1="35" y1="155" x2="35" y2="45" stroke="#334155" stroke-width="2" />
    <polygon points="208,155 200,151 200,159" fill="#334155" />
    <polygon points="35,42 31,50 39,50" fill="#334155" />

    <text x="120" y="172" font-size="9" fill="#475569" text-anchor="middle">온도(℃) ➔</text>
    <text x="25" y="42" font-size="9" fill="#475569" text-anchor="middle">광합성량</text>

    <!-- Temperature Ticks -->
    <text x="35" y="166" font-size="8" fill="#64748b" text-anchor="middle">0</text>
    <text x="75" y="166" font-size="8" fill="#64748b" text-anchor="middle">20</text>
    <text x="115" y="166" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">35~40</text>
    <text x="155" y="166" font-size="8" fill="#64748b" text-anchor="middle">50</text>

    <!-- Bell curve: slow rise, sharp peak at 36-38C, steep drop -->
    <path d="M 35 155 Q 75 145 105 105 Q 115 60 120 60 Q 128 65 138 120 L 145 155 Z" fill="url(#curveFill)" />
    <path d="M 35 155 Q 75 145 105 105 Q 115 60 120 60 Q 128 65 138 120 L 145 155" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round" />

    <!-- Peak Marker -->
    <circle cx="120" cy="60" r="4" fill="#dc2626" />
    <line x1="120" y1="60" x2="120" y2="155" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />
    <text x="120" y="50" font-size="9" font-weight="900" fill="#b91c1c" text-anchor="middle">최적 온도 (약 35~40℃)</text>
    <text x="175" y="110" font-size="8" font-weight="bold" fill="#991b1b" text-anchor="middle">40℃ 이상</text>
    <text x="175" y="122" font-size="8" font-weight="bold" fill="#991b1b" text-anchor="middle">효소 변성으로 급감!</text>
  </g>

  <!-- Bottom Summary -->
  <rect x="30" y="235" width="480" height="32" rx="6" fill="#fef2f2" stroke="#fca5a5" />
  <text x="270" y="255" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">
    핵심: 온도는 35~40℃에서 정점을 찍고 그 이상에서는 효소의 단백질 변성으로 급격히 감소하는 종 모양!
  </text>
</svg>`;

function getCleanTextbookDiagram(note: SavedNote): { imageUrl?: string; svg?: string; caption?: string } {
  const text = `${note.curriculumUnit} ${note.title} ${note.keyConcept}`;
  
  if (text.includes("환상 박피") || text.includes("박피")) {
    return { svg: SVG_RING_BARKING, caption: "[천재교과서 탐구] 줄기의 환상 박피 실험과 유기 양분의 이동" };
  }
  if (text.includes("온도") && (text.includes("광합성") || text.includes("그래프"))) {
    return { svg: SVG_TEMP_GRAPH, caption: "[천재교과서 도식] 환경 요인(온도·빛·CO₂)과 광합성량 그래프" };
  }
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
  return { imageUrl: undefined, svg: undefined, caption: undefined };
}

  // 2. Convert each saved note into a freshly-authored MockExamQuestion (no handwritten pen marks)
  const customQuestions: MockExamQuestion[] = [];

  notesToUse.forEach((note, noteIdx) => {
    const cleanDiagram = getCleanTextbookDiagram(note);

    // Pick the best quiz question from twinQuiz
    if (note.twinQuiz && note.twinQuiz.length > 0) {
      const q = note.twinQuiz[0];
      let options = [...q.options];

      // Ensure 5 choices with meaningful scientific distractors
      const distractors = [
        "해당 조건에서는 관련 반응이나 물질 이동이 전혀 일어나지 않는다.",
        "농도나 압력 차이와 무관하게 항상 일정한 속도로 진행된다.",
        "생명 활동에 필요한 에너지를 전혀 소모하거나 방출하지 않는다."
      ];
      while (options.length < 5) {
        options.push(distractors[(options.length) % distractors.length]);
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
        diagramSvg: cleanDiagram.svg,
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
