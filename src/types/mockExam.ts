export interface MockExamQuestion {
  id: string;
  number: number;
  unit: string;
  question: string;
  diagramSvg?: string; // High-resolution SVG graphic code
  diagramImageUrl?: string; // Realistic textbook illustration image URL
  diagramCaption?: string;
  options: string[]; // 5 choices: ①, ②, ③, ④, ⑤
  correctAnswerIndex: number; // 0 ~ 4
  explanation: string;
  chunjaeConcept: string; // 천재 교과서 핵심 출제 포인트
}

export interface MockExam {
  id: string;
  title: string;
  subtitle: string;
  textbook: string; // "천재교육 중학교 2학년 과학"
  totalQuestions: number;
  timeLimitMinutes: number;
  questions: MockExamQuestion[];
  createdAt: string;
}

export interface ExamSubmission {
  answers: Record<number, number>; // question number (1-25) -> selected option index (0-4)
  score: number;
  totalScore: number;
  correctCount: number;
  totalCount: number;
  timeSpentSeconds: number;
  submittedAt: string;
}
