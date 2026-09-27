export type ScienceDomain = '화학 (물질의 특성)' | '생물 (동물과 에너지)' | '생물 (식물과 에너지)' | '물리 (열과 우리 생활)' | '지구과학 (수권과 해수)' | '기타/공통';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface TutorAnalysis {
  id: string;
  title: string;
  subjectDomain: ScienceDomain;
  curriculumUnit: string; // e.g. "4단원. 물질의 특성 (용해도와 재결정)"
  keyConcept: string; // 핵심 키워드
  recognizedProblem: string; // 사진 속 인식된 문제 내용 요약
  correctAnswer: string; // 정확한 정답 (예: "①번 (빛이 점차 약해진다)")
  correctAnswerReason: string; // 정답인 핵심 이유 요약 (1~2줄)
  optionsAnalysis?: string[]; // 선지 ①~⑤ 각각의 O/X 및 상세 분석
  examIntent?: string; // (선택) 시험 출제자의 의도
  trapAndMisconceptions: string; // 왜 틀리기 쉬운가? 함정 포인트
  teacherExplanation: {
    analogy?: string; // (선택) 일상 속 쉬운 비유
    corePrinciples: string[]; // 단계별 핵심 원리 설명 (수식 포함)
    memoryTip?: string; // (선택) 시험 직전 꼭 외울 암기 꿀팁
  };
  twinQuiz: QuizQuestion[];
  createdAt: string;
  imageUrl?: string;
  userNote?: string;
}

export interface SavedNote extends TutorAnalysis {
  savedAt: string;
}
