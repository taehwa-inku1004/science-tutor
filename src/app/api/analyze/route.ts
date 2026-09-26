import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { TutorAnalysis } from "@/types/tutor";

export const maxDuration = 60; // 60s timeout for vision AI

const SYSTEM_INSTRUCTION = `당신은 대한민국 중학교 2학년 과학(2015/2022 개정 교육과정) 최고 권위의 1타 과외선생님입니다.
학생이 기말고사를 대비하다가 틀린 문제의 사진을 찍어 보냈습니다.

[★최우선 절대 원칙 1: 시험지 필기/체크 표시 100% 무시 & 과학적 독립 풀이]
1. 시험지 사진에 크게 쓰인 손글씨 번호(예: 커다란 '4' 동그라미), 특정 선지에 그어진 V체크, X표시, 밑줄 등은 학생이 풀다가 "틀린 오답"이거나 학생의 주관적 낙서입니다! 절대로 사진 속 손글씨 번호나 표시를 정답으로 믿거나 따라가지 마세요.
   (★주의: 수많은 학생들이 '뚝 떨어지니 4번(온도)'이라고 써놓고 틀리는 경우가 매우 많습니다. 사진에 쓰인 '4'를 절대로 정답으로 착각하지 마세요!)
2. 모든 손글씨를 깨끗이 지웠다고 생각하고, 오직 [인쇄된 활자 문제 본문, 그래프, 도표, <보기>, 선지 ①~⑤]만을 보고 처음부터 독립적으로 직접 푸세요.

[★최우선 절대 원칙 2: 대한민국 중학교 2학년 과학 교육과정 표준 및 교과서 정형 도표 준수]
1. 대한민국 중2 과학 시험 문제는 교과서(동아, 비상, 미래엔, 천재 등)에 수록된 정형화된 표준 도표와 기본 개념을 그대로 출제합니다.

2. 【광합성과 환경 요인 그래프의 핵심 과학적 원리와 출제 공식】:
   - [빛의 세기 / CO2 농도에 따른 그래프]:
     빛이나 CO2가 증가할 때: 0에서부터 우상향 증가하다가 '광포화점' 또는 '포화 농도'에 도달하면 일정하게 수평을 유지합니다.
     ★반대로 이미 포화된 상태에서 [빛이 점차 약해지거나 CO2 농도가 감소할 때(①번 선지)]:
     처음에는 포화 구간이므로 광합성량이 최대로 '일정하게 유지(수평)'되다가, 포화점 이하로 빛/CO2가 부족해지면 '급격히 감소(하강)'합니다!
     따라서 **"광합성량이 처음에 일정(수평)하게 유지되다가 특정 시점 이후 뚝 떨어지는(하강) 그래프"**는 **100% ①번 [빛이 점차 약해진다] (또는 CO2 농도 감소)**입니다!
   - [온도에 따른 그래프(④번 선지)]:
     온도가 점차 상승할 때: 저온(0℃ 부근)에서는 효소 활성이 낮아 광합성량이 거의 0이었다가 온도가 상승하며 증가하여 35~40℃에서 최고점을 찍고, 40℃ 이상에서 효소 열변성으로 급감하는 **[반드시 0에서 시작하여 올라갔다 내려오는 산 모양 / 종 모양 (Bell shape)]**입니다!
     ★경고: 절대로 "처음부터 최대로 일정하다가 뚝 떨어지는" 그래프는 온도가 될 수 없습니다! 저온에서 최대 광합성을 하는 식물은 없습니다. 많은 학생들이 '뚝 떨어지니 온도(4번)'라고 착각하여 틀리는 대표적인 오답 함정이므로 절대로 4번을 고르지 마세요.

3. 【세포 호흡과 노폐물 도표 표준】:
   - 영양소(탄/단/지) + 산소(㉠) -> [세포 호흡 (가)] -> 에너지(생명활동, 체온유지) + 노폐물(물, 이산화 탄소, ㉡) 구조에서, ㉡은 교과서상 100% **"암모니아"**(단백질 분해 산물)입니다. (ㄱ, ㄴ, ㄷ, ㄹ 모두 참이면 ⑤번 정답)

4. 【<보기> 조합형 문제 판정 원칙】:
   - <보기>의 ㄱ, ㄴ, ㄷ, ㄹ 각각을 교과서 표준 지식에 입각하여 [참(O) / 거짓(X)]으로 철저히 판별하세요.
   - 참(O)으로 판정된 보기들의 조합을 선지 ①~⑤에서 정확히 대조하여 일치하는 번호를 유일한 정답으로 확정하세요.

반드시 다음 JSON 형식으로만 응답해야 합니다. 마크다운 백틱 없이 순수 JSON만 출력하세요:
{
  "title": "단원 및 핵심 주제 요약 (예: 광합성에 영향을 미치는 환경 요인과 광합성량)",
  "subjectDomain": "화학 (물질의 특성)" 또는 "생물 (동물과 에너지)" 또는 "물리 (열과 우리 생활)" 또는 "지구과학 (수권과 해수)" 또는 "기타/공통",
  "curriculumUnit": "중2 과학 > 단원명 > 소단원명",
  "keyConcept": "핵심 개념 키워드",
  "recognizedProblem": "사진 속 문제와 보기/선지 내용 텍스트",
  "optionsAnalysis": [
    "① 선지: [선지 내용] -> [O 또는 X 판정 및 과학적 이유]",
    "② 선지: [선지 내용] -> [O 또는 X 판정 및 과학적 이유]",
    "③ 선지: [선지 내용] -> [O 또는 X 판정 및 과학적 이유]",
    "④ 선지: [선지 내용] -> [O 또는 X 판정 및 과학적 이유]",
    "⑤ 선지: [선지 내용] -> [O 또는 X 판정 및 과학적 이유]"
  ],
  "correctAnswer": "선지 분석을 통해 도출된 진짜 정답 (예: ①번 (빛이 점차 약해진다))",
  "correctAnswerReason": "왜 이 선지만이 유일한 정답인지 명쾌하게 증명한 1~2줄 핵심 근거",
  "examIntent": "출제자가 이 문제로 학생의 어떤 지식/사고력을 묻고자 했는지 설명",
  "trapAndMisconceptions": "학생들이 왜 엉뚱한 오답(예: 4번 등)을 고르고 헷갈리기 쉬운지 분석",
  "teacherExplanation": {
    "analogy": "중2 학생이 단번에 무릎을 탁 칠 만한 재미있고 생생한 일상생활 비유",
    "corePrinciples": [
      "1단계 핵심 원리...",
      "2단계 문제 및 그래프 적용...",
      "3단계 정답 도출..."
    ],
    "memoryTip": "시험 보기 직전에 꼭 외워야 할 암기 꿀팁"
  },
  "twinQuiz": [
    {
      "id": "quiz-1",
      "question": "확인 퀴즈 1 (유사 쌍둥이 문제)",
      "options": ["선지1", "선지2", "선지3", "선지4"],
      "correctAnswerIndex": 0,
      "explanation": "상세한 해설"
    },
    {
      "id": "quiz-2",
      "question": "확인 퀴즈 2",
      "options": ["선지1", "선지2", "선지3", "선지4"],
      "correctAnswerIndex": 1,
      "explanation": "상세한 해설"
    }
  ]
}`;

let globalLastWorkingModel = "gemini-3.5-flash";
const globalExhaustedQuotaModels = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { imageBase64, mimeType = "image/jpeg", userApiKey, studentQuestion } = body;

    if (!imageBase64) {
      return NextResponse.json(
        { error: "문제 사진 이미지가 전송되지 않았습니다." },
        { status: 400 }
      );
    }

    const apiKey = userApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "API_KEY_REQUIRED",
          message:
            "Google Gemini API 키가 설정되지 않았습니다. 상단 [설정] 버튼을 눌러 API 키를 입력하거나 환경변수를 설정해 주세요."
        },
        { status: 400 }
      );
    }

    // Clean base64 string if data URL prefix exists
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, "");

    const ai = new GoogleGenAI({ apiKey });

    const userPrompt = studentQuestion
      ? `[★경고: 사진에 쓰인 손글씨 번호나 체크 표시는 학생이 틀린 오답이므로 100% 무시하세요! 활자 텍스트와 그래프 형태를 직접 과학적으로 분석하여 ①~⑤ 선지별 O/X를 따져 진짜 정답을 맞히세요.]\n[학생의 질문 또는 헷갈렸던 점]: "${studentQuestion}"\n위 사진의 중학교 2학년 과학 문제를 정밀 분석하고, 학생 질문을 반영하여 과외선생님 스타일로 완벽하게 가르쳐주세요.`
      : `[★경고: 사진에 쓰인 손글씨 번호나 체크 표시는 학생이 틀린 오답이므로 100% 무시하세요! 활자 텍스트와 그래프 형태를 직접 과학적으로 분석하여 ①~⑤ 선지별 O/X를 따져 진짜 정답을 맞히세요.]\n위 사진의 중학교 2학년 과학 시험/문제집 문제를 분석하여, 중2 학생이 개념을 100% 이해할 수 있도록 친절한 1타 과외 피드백을 제공해 주세요.`;

    let candidateModels = [
      globalLastWorkingModel,
      "gemini-3.5-flash",
      "gemini-2.5-flash",
      "gemini-3.1-flash-lite",
      "gemini-2.5-flash-lite",
      "gemini-flash-latest",
      "gemini-3.7-flash",
      "gemini-3.8-flash",
      "gemini-3-flash-preview",
    ].filter(m => !globalExhaustedQuotaModels.has(m));

    try {
      const modelPager = await ai.models.list();
      const discovered: string[] = [];
      const excludeKeywords = [
        "embedding", "imagen", "aqa", "tts", "audio", "live",
        "transcribe", "robotics", "computer-use", "customtools", "veo", "lyria", "gemini-2.5-pro"
      ];

      for await (const m of modelPager) {
        const name = (m.name || "").replace(/^models\//, "");
        if (name && !excludeKeywords.some(k => name.includes(k)) && !globalExhaustedQuotaModels.has(name)) {
          discovered.push(name);
        }
      }

      if (discovered.length > 0) {
        const priorityOrder = [
          globalLastWorkingModel,
          "gemini-3.5-flash",
          "gemini-2.5-flash",
          "gemini-3.1-flash-lite",
          "gemini-2.5-flash-lite",
          "gemini-flash-latest",
          "gemini-3.7-flash",
          "gemini-3.8-flash",
          "gemini-3-flash-preview",
        ];

        discovered.sort((a, b) => {
          const idxA = priorityOrder.indexOf(a);
          const idxB = priorityOrder.indexOf(b);
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;
          return 0;
        });

        candidateModels = Array.from(new Set([globalLastWorkingModel, ...discovered])).filter(m => !globalExhaustedQuotaModels.has(m));
      }
    } catch (e) {
      console.warn("Could not list models dynamically:", (e as Error).message);
    }

    console.log("Fast candidate models to attempt (top model first):", candidateModels);

    let rawText = "";
    let lastError: Error | null = null;
    let had503Error = false;

    for (const modelName of candidateModels) {
      console.log(`Attempting analysis with model: ${modelName}...`);
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: [
            {
              role: "user",
              parts: [
                { text: SYSTEM_INSTRUCTION },
                { text: userPrompt },
                {
                  inlineData: {
                    mimeType,
                    data: cleanBase64
                  }
                }
              ]
            }
          ],
          config: {
            responseMimeType: "application/json"
          }
        });

        rawText = response.text || "";
        if (rawText) {
          console.log(`Success with model: ${modelName}! Caching as primary working model.`);
          globalLastWorkingModel = modelName;
          break;
        }
      } catch (err: unknown) {
        lastError = err as Error;
        const msg = lastError.message || "";
        const is429 = msg.includes("429") || msg.includes("quota") || msg.includes("RESOURCE_EXHAUSTED");
        const is503 = msg.includes("503") || msg.includes("high demand");
        if (is429) {
          console.warn(`Model ${modelName} exceeded quota (429), adding to session blacklist.`);
          globalExhaustedQuotaModels.add(modelName);
        }
        if (is503) had503Error = true;
        console.warn(`Model ${modelName} failed (${lastError.message}), quickly trying next model...`);
      }
    }

    if (!rawText) {
      if (had503Error) {
        throw new Error(
          "구글 AI 서버에 순간적인 요청량 폭주(503 High Demand)가 발생했습니다. 약 10~20초 후 다시 [과외선생님 분석 시작하기]를 눌러주세요."
        );
      }
      throw lastError || new Error("문제 분석에 실패했습니다.");
    }
function extractJsonObject(str: string): string {
  const start = str.indexOf('{');
  if (start === -1) return str;
  let depth = 0;
  let inString = false;
  let escape = false;

  for (let i = start; i < str.length; i++) {
    const ch = str[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === '\\') {
      escape = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (!inString) {
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          return str.substring(start, i + 1);
        }
      }
    }
  }
  return str.substring(start);
}

function cleanJsonString(str: string): string {
  let result = "";
  let inString = false;
  let i = 0;

  while (i < str.length) {
    const ch = str[i];

    if (!inString) {
      if (ch === '"') {
        inString = true;
      }
      result += ch;
      i++;
    } else {
      if (ch === '"') {
        inString = false;
        result += ch;
        i++;
      } else if (ch === '\\') {
        const next = str[i + 1];

        // Valid JSON escapes: \\, \", \uXXXX, or \n, \r, \t when followed by whitespace/delimiter
        if (next === '\\') {
          result += "\\\\";
          i += 2;
        } else if (next === '"') {
          result += '\\"';
          i += 2;
        } else if (next === 'u' && /^[0-9a-fA-F]{4}$/.test(str.slice(i + 2, i + 6))) {
          result += str.slice(i, i + 6);
          i += 6;
        } else if (next === 'n' && (i + 2 >= str.length || /[\s"\\]/.test(str[i + 2]))) {
          result += "\\n";
          i += 2;
        } else if (next === 'r' && (i + 2 >= str.length || /[\s"\\]/.test(str[i + 2]))) {
          result += "\\r";
          i += 2;
        } else if (next === 't' && (i + 2 >= str.length || /[\s"\\]/.test(str[i + 2]))) {
          result += "\\t";
          i += 2;
        } else {
          // Unescaped LaTeX backslash (e.g. \frac, \text, \Delta, \circ, \times, \cdot)
          result += "\\\\";
          i++; // consume only the backslash
        }
      } else {
        result += ch;
        i++;
      }
    }
  }

  return result;
}

    // 1. Extract purely the root JSON object { ... } ignoring markdown wrappers or trailing comments/text
    const extracted = extractJsonObject(rawText);

    // 2. Remove any trailing commas before closing braces/brackets
    const withoutTrailingCommas = extracted.replace(/,(\s*[}\]])/g, "$1");

    // 3. Escape lone/LaTeX backslashes
    const sanitizedJson = cleanJsonString(withoutTrailingCommas);

    let parsedData: TutorAnalysis;
    try {
      parsedData = JSON.parse(sanitizedJson);
    } catch (parseError) {
      console.warn("Sanitized JSON.parse failed, attempting fallback:", (parseError as Error).message);
      try {
        parsedData = JSON.parse(extracted);
      } catch {
        throw new Error(`AI 응답 형식 처리 실패: ${(parseError as Error).message}`);
      }
    }

    parsedData.id = "analysis-" + Date.now();
    parsedData.createdAt = new Date().toISOString();

    return NextResponse.json({ success: true, data: parsedData });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Gemini Analysis Error:", err);
    return NextResponse.json(
      {
        error: "ANALYSIS_FAILED",
        message:
          err.message || "이미지 분석 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      },
      { status: 500 }
    );
  }
}
