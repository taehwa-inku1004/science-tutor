import { MockExam } from "@/types/mockExam";

export const CHUNJAE_FINAL_MOCK_EXAM: MockExam = {
  id: "chunjae-exam-2026-custom-scope",
  title: "중2 과학 기말고사 최종 모의고사 (25제)",
  subtitle: "천재교과서(정대홍) 과학2 시험범위 [5. 식물과 에너지 / 4. 동물과 에너지(소화와 순환)] 100% 출제",
  textbook: "천재교과서 중2 과학 (2022 개정, 대표저자 정대홍)",
  totalQuestions: 25,
  timeLimitMinutes: 45,
  createdAt: "2026-09-27T00:00:00.000Z",
  questions: [
    /* ---------------- PART 1: 동물과 에너지 (소화) ---------------- */
    {
      id: "q-1",
      number: 1,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "다음 표는 음식물 속에 들어있는 4대 영양소를 검출하기 위한 시약과 반응 결과 나타나는 색깔 변화를 정리한 것이다. 기호 A~D에 들어갈 시약과 색깔의 연결로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구] 4대 영양소의 검출 반응",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Table Header -->
        <rect x="20" y="20" width="320" height="28" fill="#e0e7ff" rx="4"/>
        <text x="70" y="38" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">영양소</text>
        <text x="180" y="38" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">검출 시약</text>
        <text x="280" y="38" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">반응 색깔</text>
        <!-- Rows -->
        <line x1="20" y1="75" x2="340" y2="75" stroke="#cbd5e1"/>
        <text x="70" y="66" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">녹말</text>
        <text x="180" y="66" font-size="10" fill="#475569" text-anchor="middle">아이오딘-아이오딘화 칼륨</text>
        <text x="280" y="66" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">A (청람색)</text>

        <line x1="20" y1="105" x2="340" y2="105" stroke="#cbd5e1"/>
        <text x="70" y="96" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">포도당/당분</text>
        <text x="180" y="96" font-size="10" font-weight="bold" fill="#ea580c" text-anchor="middle">B (베네딕트액 + 가열)</text>
        <text x="280" y="96" font-size="10" fill="#dc2626" text-anchor="middle">황적색</text>

        <line x1="20" y1="135" x2="340" y2="135" stroke="#cbd5e1"/>
        <text x="70" y="126" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">단백질</text>
        <text x="180" y="126" font-size="10" fill="#475569" text-anchor="middle">5% 수산화 나트륨+1% 황산 구리</text>
        <text x="280" y="126" font-size="10" font-weight="bold" fill="#7c3aed" text-anchor="middle">C (보라색)</text>

        <text x="70" y="156" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">지방</text>
        <text x="180" y="156" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">D (수단 Ⅲ 용액)</text>
        <text x="280" y="156" font-size="10" fill="#e11d48" text-anchor="middle">선홍색</text>
      </svg>`,
      options: [
        "A: 보라색, B: 뷰렛 용액, C: 황적색, D: 수단 Ⅲ 용액",
        "A: 청람색, B: 베네딕트 용액(가열), C: 보라색, D: 수단 Ⅲ 용액",
        "A: 황갈색, B: 아이오딘 용액, C: 청람색, D: 에탄올",
        "A: 청람색, B: 수단 Ⅲ 용액, C: 적갈색, D: 베네딕트 용액",
        "A: 적갈색, B: 베네딕트 용액(냉각), C: 황갈색, D: 뷰렛 용액"
      ],
      correctAnswerIndex: 1,
      explanation: "녹말은 아이오딘-아이오딘화 칼륨 용액과 반응하여 A: 청람색을 띱니다. 포도당(당분)은 B: 베네딕트 용액을 넣고 가열했을 때 황적색으로 변합니다. 단백질은 뷰렛 반응(5% 수산화 나트륨 + 1% 황산 구리) 시 C: 보라색으로 변하며, 지방은 D: 수단 Ⅲ 용액에 의해 선홍색으로 염색됩니다.",
      chunjaeConcept: "천재교과서(정대홍) [탐구: 영양소 검출 반응]: 녹말-청람색, 당분-베네딕트(가열) 황적색, 단백질-뷰렛 보라색, 지방-수단Ⅲ 선홍색!"
    },
    {
      id: "q-2",
      number: 2,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "다음 그림은 사람의 소화 기관을 나타낸 모식도이다. 기호 A~E에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 사람의 소화계 구조",
      diagramImageUrl: "/mock-exam/q-2.jpg",
      diagramSvg: `<svg viewBox="0 0 360 210" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="210" fill="#f8fafc" rx="12" />
        <!-- Liver A -->
        <path d="M 90 40 Q 150 35 160 85 Q 90 95 90 40 Z" fill="#b45309" opacity="0.8"/>
        <text x="110" y="65" font-size="11" font-weight="bold" fill="#ffffff">A (간)</text>
        <!-- Gallbladder B -->
        <circle cx="145" cy="80" r="10" fill="#15803d"/>
        <text x="125" y="100" font-size="10" font-weight="bold" fill="#15803d">B (쓸개)</text>
        <!-- Stomach C -->
        <path d="M 175 50 Q 240 50 220 100 Q 180 110 175 50 Z" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
        <text x="200" y="80" font-size="11" font-weight="bold" fill="#ffffff">C (위)</text>
        <!-- Pancreas D -->
        <rect x="155" y="105" width="55" height="16" rx="6" fill="#fde047" stroke="#ca8a04"/>
        <text x="182" y="117" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">D (이자)</text>
        <!-- Small Intestine E -->
        <rect x="135" y="130" width="90" height="55" rx="12" fill="#fed7aa" stroke="#ea580c"/>
        <text x="180" y="160" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">E (소장)</text>
      </svg>`,
      options: [
        "A(간)는 3대 영양소를 모두 분해하는 소화 효소를 분비한다.",
        "B(쓸개)에서 지방 분해 효소인 라이페이스가 직접 합성된다.",
        "C(위)에서는 강한 염산과 펩신이 분비되어 단백질을 1차 분해한다.",
        "D(이자)는 쓸개즙을 합성하여 십이지장으로 보낸다.",
        "E(소장)는 수분만 흡수하고 소화 작용은 전혀 일어나지 않는다."
      ],
      correctAnswerIndex: 2,
      explanation: "C(위)의 위샘에서는 펩시노젠과 강한 염산이 분비되어 단백질을 펩톤으로 1차 분해합니다. 염산은 살균 작용과 함께 펩신의 활성화를 돕습니다. 간(A)은 쓸개즙을 생성하고, 쓸개(B)는 쓸개즙을 보관만 하며 효소가 없습니다. 이자(D)는 3대 영양소 분해 효소를 모두 분비합니다.",
      chunjaeConcept: "천재교과서(정대홍) [위에서의 소화]: 염산의 살균 및 펩신 활성화, 단백질의 1차 분해!"
    },
    {
      id: "q-3",
      number: 3,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "다음은 침 속의 소화 효소(아밀레이스)에 의한 녹말의 소화 실험을 나타낸 것이다. 시험관 A~D 중 30분 후 아이오딘 반응 시 청람색이 나타나지 않고 황갈색을 유지하는 시험관과 그 까닭으로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구] 침에 의한 녹말의 소화와 온도",
      diagramImageUrl: "/mock-exam/q-3.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <g transform="translate(30, 15)">
          <rect x="0" y="15" width="28" height="85" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
          <text x="14" y="135" font-size="9" fill="#475569" text-anchor="middle">녹말+침</text>
          <text x="14" y="150" font-size="9" font-weight="bold" fill="#0284c7" text-anchor="middle">37℃</text>
        </g>
        <g transform="translate(110, 15)">
          <rect x="0" y="15" width="28" height="85" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
          <text x="14" y="135" font-size="9" fill="#475569" text-anchor="middle">녹말+침</text>
          <text x="14" y="150" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">100℃ 가열</text>
        </g>
        <g transform="translate(190, 15)">
          <rect x="0" y="15" width="28" height="85" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
          <text x="14" y="135" font-size="9" fill="#475569" text-anchor="middle">녹말+물</text>
          <text x="14" y="150" font-size="9" font-weight="bold" fill="#0284c7" text-anchor="middle">37℃</text>
        </g>
        <g transform="translate(270, 15)">
          <rect x="0" y="15" width="28" height="85" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">D</text>
          <text x="14" y="135" font-size="9" fill="#475569" text-anchor="middle">녹말+침</text>
          <text x="14" y="150" font-size="9" font-weight="bold" fill="#2563eb" text-anchor="middle">0℃ (얼음)</text>
        </g>
      </svg>`,
      options: [
        "시험관 B: 100℃의 높은 온도에서 아밀레이스의 분해 작용이 가장 빠르기 때문이다.",
        "시험관 C: 침이 섞이지 않아 녹말의 상태가 가장 안정적으로 보존되기 때문이다.",
        "시험관 A: 체온 범위(37℃)에서 아밀레이스가 녹말을 엿당으로 분해하여 녹말이 사라졌기 때문이다.",
        "시험관 D: 저온에서 침의 소화 효소가 가장 농축되어 분해 속도가 빠르기 때문이다.",
        "시험관 A와 B: 침이 들어가면 온도와 관계없이 녹말이 100% 분해되기 때문이다."
      ],
      correctAnswerIndex: 2,
      explanation: "소화 효소(단백질)는 사람의 체온 범위(35~40℃)에서 입체 구조가 안정되어 활성이 가장 높습니다. 시험관 A(37℃)에서는 아밀레이스가 녹말을 엿당으로 모두 분해하여 녹말이 남아있지 않으므로 아이오딘 반응 시 청람색이 되지 않고 황갈색을 띱니다. B는 고온 변성으로 파괴되었고, C는 효소 부재, D는 저온 억제 상태입니다.",
      chunjaeConcept: "천재교과서(정대홍) [탐구: 침에 의한 소화와 온도]: 37℃에서 아밀레이스 활성 최고, 녹말 분해 완료!"
    },
    {
      id: "q-4",
      number: 4,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "다음 그림은 이자에서 분비되는 '이자액'의 작용을 나타낸 것이다. 탄수화물, 단백질, 지방 3대 영양소를 모두 분해하는 이자액 속 소화 효소 3가지가 바르게 짝지어진 것은?",
      diagramCaption: "[천재교과서 도식] 이자액의 3대 영양소 소화 효소",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <rect x="25" y="60" width="80" height="50" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="65" y="88" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">이자액 분비</text>
        <!-- Three arrows -->
        <path d="M 105 85 L 155 45" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round"/>
        <text x="240" y="48" font-size="11" font-weight="bold" fill="#312e81">탄수화물(녹말) 분해: ㉠</text>
        <path d="M 105 85 L 155 85" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
        <text x="240" y="88" font-size="11" font-weight="bold" fill="#991b1b">단백질 분해: ㉡</text>
        <path d="M 105 85 L 155 125" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round"/>
        <text x="240" y="128" font-size="11" font-weight="bold" fill="#166534">지방 분해: ㉢</text>
      </svg>`,
      options: [
        "㉠ 펩신, ㉡ 트립신, ㉢ 쓸개즙",
        "㉠ 아밀레이스, ㉡ 트립신, ㉢ 라이페이스",
        "㉠ 라이페이스, ㉡ 아밀레이스, ㉢ 펩신",
        "㉠ 트립신, ㉡ 펩신, ㉢ 수크레이스",
        "㉠ 아밀레이스, ㉡ 염산, ㉢ 라이페이스"
      ],
      correctAnswerIndex: 1,
      explanation: "이자액은 3대 영양소를 모두 소화시키는 유일한 소화액입니다. 탄수화물(녹말)을 엿당으로 분해하는 ㉠ '아밀레이스', 단백질을 2차 분해하는 ㉡ '트립신', 지방을 지방산과 모노글리세리드로 최종 분해하는 ㉢ '라이페이스'가 포함되어 있습니다.",
      chunjaeConcept: "천재교과서(정대홍) [이자액의 소화 효소]: 아밀레이스(탄수화물), 트립신(단백질), 라이페이스(지방)!"
    },
    {
      id: "q-5",
      number: 5,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "다음 그림은 큰 지방 덩어리가 쓸개즙과 만나 작아지는 현상을 나타낸 것이다. 쓸개즙의 특징에 대한 설명으로 옳은 것만을 <보기>에서 모두 고른 것은?",
      diagramCaption: "[천재교과서 도식] 쓸개즙의 지방 유화 작용",
      diagramImageUrl: "/mock-exam/q-5.jpg",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <circle cx="80" cy="80" r="40" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="80" y="84" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">큰 지방 덩어리</text>
        <path d="M 135 80 L 195 80" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
        <text x="165" y="70" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">+ 쓸개즙</text>
        <circle cx="235" cy="65" r="14" fill="#fef08a" stroke="#ca8a04"/>
        <circle cx="270" cy="75" r="16" fill="#fef08a" stroke="#ca8a04"/>
        <circle cx="245" cy="100" r="15" fill="#fef08a" stroke="#ca8a04"/>
        <circle cx="280" cy="105" r="12" fill="#fef08a" stroke="#ca8a04"/>
        <text x="260" y="140" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">작은 지방 알갱이 (유화)</text>
      </svg>`,
      options: [
        "ㄱ",
        "ㄴ",
        "ㄱ, ㄷ",
        "ㄴ, ㄷ",
        "ㄱ, ㄴ, ㄷ"
      ],
      correctAnswerIndex: 2,
      explanation: "쓸개즙은 간에서 합성되어 쓸개에 저장되었다가 십이지장으로 분비됩니다(ㄱ 참). 쓸개즙에는 소화 효소가 전혀 들어있지 않으며(ㄴ 거짓), 큰 지방 덩어리를 물리적으로 작은 알갱이로 쪼개어 효소(라이페이스)와의 접촉 면적을 넓혀줍니다(ㄷ 참). 따라서 옳은 것은 ㄱ, ㄷ 입니다.",
      chunjaeConcept: "천재교과서(정대홍) [쓸개즙의 소화 작용]: 효소 없음! 간에서 생성되어 쓸개에 저장, 지방 유화 작용!"
    },
    {
      id: "q-6",
      number: 6,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "음식물 속 3대 영양소가 소화계를 거쳐 최종적으로 분해된 '최종 소화 산물'로 바르게 짝지어진 것은?",
      diagramCaption: "[천재교과서 핵심 정리] 3대 영양소의 최종 분해 산물",
      diagramSvg: `<svg viewBox="0 0 360 150" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="150" fill="#f8fafc" rx="12" />
        <rect x="25" y="25" width="90" height="30" rx="6" fill="#e0e7ff"/>
        <text x="70" y="44" font-size="10" font-weight="bold" fill="#3730a3" text-anchor="middle">탄수화물 (녹말)</text>
        <text x="140" y="44" font-size="11" font-weight="bold" fill="#475569">➔ ㉠</text>

        <rect x="25" y="65" width="90" height="30" rx="6" fill="#fee2e2"/>
        <text x="70" y="84" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">단백질</text>
        <text x="140" y="84" font-size="11" font-weight="bold" fill="#475569">➔ ㉡</text>

        <rect x="25" y="105" width="90" height="30" rx="6" fill="#fef9c3"/>
        <text x="70" y="124" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">지방</text>
        <text x="140" y="124" font-size="11" font-weight="bold" fill="#475569">➔ ㉢</text>
      </svg>`,
      options: [
        "㉠ 포도당, ㉡ 아미노산, ㉢ 지방산과 모노글리세리드",
        "㉠ 엿당, ㉡ 펩톤, ㉢ 글리세롤",
        "㉠ 설탕, ㉡ 단백질, ㉢ 지방산",
        "㉠ 녹말, ㉡ 아미노산, ㉢ 바이타민",
        "㉠ 포도당, ㉡ 암모니아, ㉢ 무기염류"
      ],
      correctAnswerIndex: 0,
      explanation: "세포막을 통과하여 혈액으로 흡수되기 위한 최종 분해 산물은 탄수화물→포도당(㉠), 단백질→아미노산(㉡), 지방→지방산과 모노글리세리드(㉢) 입니다.",
      chunjaeConcept: "천재교과서(정대홍) [영양소의 최종 소화 산물]: 탄수화물(포도당), 단백질(아미노산), 지방(지방산+모노글리세리드)!"
    },
    {
      id: "q-7",
      number: 7,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "소장 안쪽 벽에 수많은 주름과 '융털(Villus)'이 발달해 있는 가장 중요한 생물학적 이유는 무엇인가?",
      diagramCaption: "[천재교과서 도식] 소장 안쪽 벽의 주름과 융털",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <!-- Intestinal fold with villi -->
        <path d="M 30 110 Q 60 40 90 110 Q 120 40 150 110 Q 180 40 210 110 Q 240 40 270 110 Q 300 40 330 110" fill="none" stroke="#ea580c" stroke-width="4"/>
        <text x="180" y="30" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">무수히 많은 주름과 융털</text>
        <text x="180" y="130" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">영양소와의 접촉 면적 극대화</text>
      </svg>`,
      options: [
        "음식물이 아래로 너무 빨리 내려가지 않도록 마찰력을 높이기 위해서",
        "소화 효소를 저장할 수 있는 공간을 확보하기 위해서",
        "표면적을 매우 넓혀 영양소를 효율적이고 신속하게 흡수하기 위해서",
        "음식물 속에 들어있는 독성 물질을 걸러내는 거름종이 역할을 하기 위해서",
        "소장의 온도를 일정하게 유지하기 위해서"
      ],
      correctAnswerIndex: 2,
      explanation: "소장 내부의 주름과 융털은 영양소와 맞닿는 표면적을 테니스 코트 크기만큼 극대화하여, 소화된 영양소를 매우 빠르고 효율적으로 흡수할 수 있도록 해줍니다.",
      chunjaeConcept: "천재교과서(정대홍) [소장 융털의 구조적 이점]: 표면적을 극대화하여 영양소 흡수 효율 극대화!"
    },
    {
      id: "q-8",
      number: 8,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "소장의 융털 내부 구조에서 가운데에 위치한 A(암죽관)와 그 주변을 감싸고 있는 B(모세혈관)를 통해 흡수되는 영양소의 종류가 옳게 짝지어진 것은?",
      diagramCaption: "[천재교과서 도식] 소장 융털의 영양소 흡수 경로",
      diagramImageUrl: "/mock-exam/q-8.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <path d="M 140 150 C 140 60, 220 60, 220 150 Z" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
        <rect x="173" y="75" width="14" height="75" rx="6" fill="#fef08a" stroke="#ca8a04"/>
        <text x="195" y="95" font-size="11" font-weight="bold" fill="#854d0e">A (암죽관)</text>
        <path d="M 160 85 Q 150 110 160 140" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
        <text x="85" y="115" font-size="11" font-weight="bold" fill="#dc2626">B (모세혈관) ➔</text>
      </svg>`,
      options: [
        "A(암죽관): 포도당, 아미노산 / B(모세혈관): 지방산, 모노글리세리드",
        "A(암죽관): 수용성 비타민 / B(모세혈관): 지용성 비타민",
        "A(암죽관): 지방산, 모노글리세리드, 지용성 비타민(A, D) / B(모세혈관): 포도당, 아미노산, 수용성 비타민(B, C)",
        "A(암죽관): 물, 무기염류 / B(모세혈관): 녹말, 단백질",
        "A와 B 모두 물질 구분 없이 무작위로 흡수한다."
      ],
      correctAnswerIndex: 2,
      explanation: "A(암죽관)는 기름에 녹는 지용성 영양소(지방산, 모노글리세리드, 지용성 비타민 A, D, E, K)를 흡수하고, B(모세혈관)는 물에 녹는 수용성 영양소(포도당, 아미노산, 무기염류, 수용성 비타민 B, C)를 흡수합니다.",
      chunjaeConcept: "천재교과서(정대홍) [융털 흡수 경로]: 암죽관(지용성 영양소), 모세혈관(수용성 영양소)!"
    },

    /* ---------------- PART 2: 동물과 에너지 (순환) ---------------- */
    {
      id: "q-9",
      number: 9,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "혈액을 시험관에 넣고 원심 분리했을 때 위쪽의 액체 성분 A(혈장)와 아래쪽의 가라앉은 성분 B(혈구)에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 혈액의 구성 성분 원심분리",
      diagramImageUrl: "/mock-exam/q-9.jpg",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <rect x="70" y="20" width="40" height="110" rx="10" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
        <rect x="70" y="20" width="40" height="60" rx="8" fill="#fef08a" opacity="0.8"/>
        <rect x="70" y="80" width="40" height="50" rx="8" fill="#dc2626" opacity="0.9"/>
        <text x="130" y="55" font-size="11" font-weight="bold" fill="#854d0e">A (혈장 - 약 55%, 액체)</text>
        <text x="130" y="105" font-size="11" font-weight="bold" fill="#b91c1c">B (혈구 - 약 45%, 세포)</text>
      </svg>`,
      options: [
        "A(혈장)는 대부분 물로 이루어져 있으며, 영양소, 노폐물, 이산화 탄소를 운반한다.",
        "B(혈구)의 적혈구는 핵이 있어 세균을 잡아먹는 식균 작용을 한다.",
        "혈소판은 적혈구보다 크기가 훨씬 크고 산소를 운반한다.",
        "백혈구에는 붉은색 색소인 헤모글로빈이 들어 있다.",
        "혈액 부피 중 혈구가 차지하는 비율이 혈장보다 훨씬 높다."
      ],
      correctAnswerIndex: 0,
      explanation: "A(혈장)는 혈액의 약 55%를 차지하는 담황색 액체로, 대부분 물이며 영양소, 이산화탄소, 노폐물 등을 녹여서 온몸으로 운반합니다. 적혈구(핵 없음, 헤모글로빈-산소 운반), 백혈구(핵 있음, 식균 작용), 혈소판(혈액 응고)은 B(혈구)에 속합니다.",
      chunjaeConcept: "천재교과서(정대홍) [혈액의 구성]: 혈장(액체, 영양소/노폐물 운반), 혈구(적혈구-산소, 백혈구-식균, 혈소판-응고)!"
    },
    {
      id: "q-10",
      number: 10,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "다음 그림은 사람의 심장 구조를 나타낸 것이다. 심방과 심실 사이, 심실과 동맥 사이에 위치하여 혈액이 거꾸로 흐르는 것(역류)을 막아주는 구조물의 이름은?",
      diagramCaption: "[천재교과서 도식] 심장의 내부 구조와 판막",
      diagramImageUrl: "/mock-exam/q-10.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <path d="M 130 50 C 130 20, 230 20, 230 50 C 230 110, 180 150, 180 155 C 180 150, 130 110, 130 50 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <!-- Valves -->
        <line x1="145" y1="80" x2="165" y2="90" stroke="#0284c7" stroke-width="3"/>
        <line x1="195" y1="90" x2="215" y2="80" stroke="#0284c7" stroke-width="3"/>
        <text x="180" y="85" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">★ 판막</text>
        <text x="180" y="115" font-size="10" fill="#475569" text-anchor="middle">혈액의 역류 방지</text>
      </svg>`,
      options: [
        "모세혈관",
        "판막",
        "심근벽",
        "동맥벽",
        "정맥관"
      ],
      correctAnswerIndex: 1,
      explanation: "심장의 심방과 심실 사이, 심실과 동맥 사이, 그리고 정맥 내부에는 혈액이 거꾸로 흐르지 않고 한쪽 방향으로만 흐르도록 해주는 '판막'이 존재합니다.",
      chunjaeConcept: "천재교과서(정대홍) [심장과 판막]: 심방→심실→동맥 한 방향 흐름 유지, 역류 방지 장치는 판막!"
    },
    {
      id: "q-11",
      number: 11,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "심장의 4개 방실(우심방, 우심실, 좌심방, 좌심실) 중 가장 두껍고 탄력적인 근육벽을 가지고 있어, 온몸의 먼 모세혈관까지 혈액을 강하게 뿜어내는 곳은?",
      diagramCaption: "[천재교과서 도식] 심실 근육벽의 두께 비교",
      diagramImageUrl: "/mock-exam/q-11.jpg",
      diagramSvg: `<svg viewBox="0 0 360 150" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="150" fill="#f8fafc" rx="12" />
        <rect x="40" y="30" width="120" height="90" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="100" y="65" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">우심실</text>
        <text x="100" y="85" font-size="10" fill="#1e3a8a" text-anchor="middle">(폐로만 보냄: 근육 얇음)</text>
        
        <rect x="200" y="25" width="120" height="100" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="4"/>
        <text x="260" y="65" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">좌심실 (★)</text>
        <text x="260" y="85" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">온몸으로 펌프질</text>
        <text x="260" y="105" font-size="10" fill="#dc2626" text-anchor="middle">(근육벽 가장 두꺼움)</text>
      </svg>`,
      options: [
        "우심방",
        "우심실",
        "좌심방",
        "좌심실",
        "폐동맥"
      ],
      correctAnswerIndex: 3,
      explanation: "좌심실은 대동맥을 통해 머리끝부터 발끝까지 온몸 구석구석 혈액을 보내야 하므로 높은 압력을 견디고 생성하기 위해 심장 부위 중 근육벽이 가장 두껍고 탄력성이 뛰어납니다.",
      chunjaeConcept: "천재교과서(정대홍) [심장의 구조]: 좌심실은 온몸 순환의 출발점으로 근육벽이 가장 두껍다!"
    },
    {
      id: "q-12",
      number: 12,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "다음 중 심장에서 출발하여 폐를 거쳐 산소를 받아 심장으로 돌아오는 [폐순환] 경로를 옳게 나타낸 것은?",
      diagramCaption: "[천재교과서 도식] 폐순환의 경로",
      diagramImageUrl: "/mock-exam/q-12.jpg",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <rect x="20" y="45" width="65" height="35" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="52" y="67" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">우심실</text>
        <text x="95" y="67" font-size="10" fill="#64748b">➔</text>
        <rect x="105" y="45" width="65" height="35" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="137" y="67" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">폐동맥</text>
        <text x="180" y="67" font-size="10" fill="#64748b">➔</text>
        <rect x="190" y="45" width="70" height="35" rx="6" fill="#e0f2fe" stroke="#0284c7"/>
        <text x="225" y="67" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">폐 모세혈관</text>
        <text x="270" y="67" font-size="10" fill="#64748b">➔</text>
        <rect x="280" y="45" width="65" height="35" rx="6" fill="#fee2e2" stroke="#dc2626"/>
        <text x="312" y="67" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">폐정맥/좌심방</text>
      </svg>`,
      options: [
        "좌심실 → 대동맥 → 온몸의 모세혈관 → 대정맥 → 우심방",
        "우심실 → 폐동맥 → 폐의 모세혈관 → 폐정맥 → 좌심방",
        "우심실 → 폐정맥 → 폐의 모세혈관 → 폐동맥 → 좌심방",
        "우심방 → 폐동맥 → 폐의 모세혈관 → 폐정맥 → 좌심실",
        "좌심실 → 폐동맥 → 폐의 모세혈관 → 대정맥 → 우심방"
      ],
      correctAnswerIndex: 1,
      explanation: "폐순환 경로는 우심실에서 출발하여 폐동맥을 거쳐 폐의 모세혈관에서 이산화 탄소를 버리고 산소를 공급받은 후, 폐정맥을 통해 좌심방으로 돌아오는 경로입니다.",
      chunjaeConcept: "천재교과서(정대홍) [폐순환 경로 공식]: 우심실 → 폐동맥 → 폐의 모세혈관 → 폐정맥 → 좌심방!"
    },
    {
      id: "q-13",
      number: 13,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "다음 혈관들 중 산소가 가장 풍부하게 들어있는 '동맥혈'이 흐르는 혈관만을 고른 것은?",
      diagramCaption: "[천재교과서 핵심 개념] 혈액의 종류와 혈관",
      diagramImageUrl: "/mock-exam/q-13.jpg",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <rect x="30" y="30" width="130" height="80" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="95" y="55" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">[동맥혈 (산소 풍부)]</text>
        <text x="95" y="75" font-size="10" fill="#b91c1c" text-anchor="middle">폐정맥, 대동맥</text>
        <text x="95" y="95" font-size="10" fill="#b91c1c" text-anchor="middle">좌심방, 좌심실</text>

        <rect x="200" y="30" width="130" height="80" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
        <text x="265" y="55" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">[정맥혈 (산소 부족)]</text>
        <text x="265" y="75" font-size="10" fill="#1d4ed8" text-anchor="middle">대정맥, 폐동맥</text>
        <text x="265" y="95" font-size="10" fill="#1d4ed8" text-anchor="middle">우심방, 우심실</text>
      </svg>`,
      options: [
        "대동맥, 폐정맥",
        "대동맥, 폐동맥",
        "대정맥, 폐동맥",
        "대정맥, 폐정맥",
        "폐동맥만 해당"
      ],
      correctAnswerIndex: 0,
      explanation: "혈관 이름에 '동맥'이 붙는다고 무조건 동맥혈이 흐르는 것이 아닙니다. 폐동맥에는 온몸을 돌고 온 산소가 부족한 '정맥혈'이 흐르고, 폐에서 산소를 막 얻어 심장으로 들어오는 '폐정맥'과 온몸으로 나가는 '대동맥'에 '동맥혈'이 흐릅니다.",
      chunjaeConcept: "천재교과서(정대홍) [주의 오답 함정]: 폐정맥에는 동맥혈이, 폐동맥에는 정맥혈이 흐른다!"
    },
    {
      id: "q-14",
      number: 14,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "다음 그래프는 심장에서 출발한 혈액이 동맥, 모세혈관, 정맥을 거쳐 이동할 때 나타나는 변화이다. 온몸에 그물처럼 퍼져 있어 '총 단면적'이 가장 넓고, 혈류 속도가 가장 느려 물질 교환에 가장 유리한 혈관은?",
      diagramCaption: "[천재교과서 그래프] 혈관에 따른 총단면적과 혈류 속도",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <line x1="50" y1="130" x2="310" y2="130" stroke="#334155" stroke-width="2"/>
        <text x="80" y="145" font-size="10" fill="#334155" text-anchor="middle">동맥</text>
        <text x="180" y="145" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">모세혈관(★)</text>
        <text x="280" y="145" font-size="10" fill="#334155" text-anchor="middle">정맥</text>
        <!-- Peak area curve -->
        <path d="M 60 120 Q 180 20 290 115" stroke="#059669" stroke-width="3" fill="none"/>
        <text x="180" y="45" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">총 단면적 최대</text>
        <!-- Dip velocity curve -->
        <path d="M 60 40 Q 180 140 290 85" stroke="#dc2626" stroke-width="3" fill="none"/>
        <text x="180" y="115" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">혈류 속도 최저</text>
      </svg>`,
      options: [
        "동맥",
        "정맥",
        "모세혈관",
        "대동맥",
        "대정맥"
      ],
      correctAnswerIndex: 2,
      explanation: "모세혈관은 한 층의 세포로 이루어진 매우 얇은 혈관으로, 온몸에 그물처럼 빽빽하게 분포하여 총 단면적이 가장 넓습니다. 이로 인해 혈류 속도가 가장 느려져 조직 세포와의 산소, 영양소, 노폐물 교환이 원활하게 일어납니다.",
      chunjaeConcept: "천재교과서(정대홍) [모세혈관의 특징]: 총 단면적 최대, 혈류 속도 최저, 한 층의 세포로 물질 교환 효율적!"
    },
    {
      id: "q-15",
      number: 15,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "정맥은 혈압이 매우 낮아 혈액이 심장으로 돌아오기 어렵습니다. 혈액이 거꾸로 흐르는 것을 막기 위해 정맥 내부에 특별히 존재하는 구조물과 혈액 순환을 돕는 주된 힘은?",
      diagramCaption: "[천재교과서 도식] 정맥의 판막과 근육 수축",
      diagramImageUrl: "/mock-exam/q-15.jpg",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <rect x="120" y="20" width="120" height="100" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
        <path d="M 150 70 L 180 55" stroke="#dc2626" stroke-width="3"/>
        <path d="M 210 70 L 180 55" stroke="#dc2626" stroke-width="3"/>
        <text x="180" y="45" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">판막 (위로만 열림)</text>
        <path d="M 180 110 L 180 75" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        <text x="70" y="75" font-size="10" font-weight="bold" fill="#1e40af">주변 근육 수축 ➔</text>
      </svg>`,
      options: [
        "두꺼운 탄력층과 심장의 직접적인 수축 압력",
        "판막과 주변 골격근의 수축 운동",
        "헤모글로빈의 화학적 당김 힘",
        "동맥의 높은 혈압에 의한 밀어내기 작용",
        "중력에 의한 자연 낙하 작용"
      ],
      correctAnswerIndex: 1,
      explanation: "정맥은 혈압이 거의 0에 가까울 정도로 낮기 때문에 혈액이 역류하지 않도록 혈관 내부에 '판막'이 발달해 있으며, 주변의 팔다리 근육이 수축하고 이완하면서 혈관을 쥐어짜 주어 심장 쪽으로 혈액을 밀어 올립니다.",
      chunjaeConcept: "천재교과서(정대홍) [정맥의 혈액 이동]: 정맥 내부의 판막과 주변 근육 운동으로 혈액 역류 방지 및 이동!"
    },
    {
      id: "q-16",
      number: 16,
      unit: "4. 동물과 에너지 > 1) 순환",
      question: "모세혈관과 온몸의 조직 세포 사이에서 일어나는 물질 교환에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 조직 세포와 모세혈관의 물질 교환",
      diagramSvg: `<svg viewBox="0 0 360 150" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="150" fill="#f8fafc" rx="12" />
        <rect x="40" y="45" width="120" height="60" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="100" y="80" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">모세혈관</text>
        
        <path d="M 165 60 L 205 60" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
        <text x="185" y="52" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">산소, 영양소 ➔</text>

        <path d="M 205 90 L 165 90" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        <text x="185" y="105" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">⮜ CO2, 노폐물</text>

        <rect x="210" y="45" width="110" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="265" y="80" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">조직 세포</text>
      </svg>`,
      options: [
        "모세혈관은 조직 세포에 이산화 탄소와 노폐물을 공급한다.",
        "조직 세포는 모세혈관으로부터 산소와 영양소를 공급받고, 세포 호흡 결과 생긴 이산화 탄소와 노폐물을 혈액으로 보낸다.",
        "물질 교환 시 적혈구와 혈소판이 혈관 밖으로 직접 빠져나간다.",
        "조직 세포에서 모세혈관으로 산소가 확산된다.",
        "물질 교환은 오직 동맥과 정맥에서만 활발히 일어난다."
      ],
      correctAnswerIndex: 1,
      explanation: "모세혈관의 혈액은 조직 세포에 산소와 영양소를 전달하고, 조직 세포는 세포 호흡 결과 생성된 이산화 탄소와 노폐물을 모세혈관 속 혈액으로 내보냅니다. 혈구는 크기가 커서 혈관을 빠져나가지 못합니다.",
      chunjaeConcept: "천재교과서(정대홍) [물질 교환]: 모세혈관→세포(산소, 영양소), 세포→모세혈관(이산화탄소, 노폐물)!"
    },

    /* ---------------- PART 3: 식물과 에너지 (광합성) ---------------- */
    {
      id: "q-17",
      number: 17,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "다음 그림은 식물 잎의 단면 구조를 나타낸 것이다. 광합성이 가장 활발하게 일어나는 부위(세포가 빽빽하게 배열되고 엽록체가 많은 곳)의 기호와 명칭으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 잎의 내부 단면 구조",
      diagramImageUrl: "/mock-exam/q-17.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <rect x="50" y="20" width="260" height="18" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="180" y="33" font-size="9" fill="#334155" text-anchor="middle">표피 조직 (큐티클층)</text>
        
        <rect x="50" y="42" width="260" height="40" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
        <text x="180" y="66" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">A: 울타리 조직 (세포 빽빽, 엽록체 최다)</text>

        <rect x="50" y="86" width="260" height="35" fill="#dcfce7" stroke="#22c55e"/>
        <text x="180" y="107" font-size="10" fill="#166534" text-anchor="middle">B: 해면 조직 (세포 엉성, 공기 통로)</text>

        <rect x="50" y="125" width="260" height="18" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="180" y="138" font-size="9" fill="#334155" text-anchor="middle">하표피 (기공과 공변세포 위치)</text>
      </svg>`,
      options: [
        "표피 조직",
        "A: 울타리 조직",
        "B: 해면 조직",
        "기공",
        "물관"
      ],
      correctAnswerIndex: 1,
      explanation: "잎의 위쪽 표피 바로 아래에 위치한 '울타리 조직(A)'은 기둥 모양의 세포들이 규칙적이고 빽빽하게 배열되어 있으며 엽록체를 가장 많이 포함하고 있어 잎에서 광합성이 가장 왕성하게 일어나는 곳입니다.",
      chunjaeConcept: "천재교과서(정대홍) [잎의 구조와 광합성]: 울타리 조직(엽록체 최다, 광합성 가장 활발)!"
    },
    {
      id: "q-18",
      number: 18,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "광합성에 필요한 원료와 광합성 결과 생성되는 산물을 나타낸 식이다. 기호 ㉠, ㉡, ㉢에 들어갈 물질로 옳은 것은?",
      diagramCaption: "[천재교과서 반응식] 광합성의 기본 화학 반응",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <text x="80" y="60" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">물 + ㉠</text>
        <path d="M 125 55 L 195 55" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
        <text x="160" y="45" font-size="10" font-weight="bold" fill="#ea580c" text-anchor="middle">빛에너지 (엽록체)</text>
        <text x="260" y="60" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">㉡ + ㉢</text>
        <text x="180" y="110" font-size="10" fill="#64748b" text-anchor="middle">뿌리에서 흡수 + 기공으로 흡수 ➔ 최초 유기양분 + 기체</text>
      </svg>`,
      options: [
        "㉠ 산소, ㉡ 이산화 탄소, ㉢ 포도당",
        "㉠ 이산화 탄소, ㉡ 포도당, ㉢ 산소",
        "㉠ 질소, ㉡ 녹말, ㉢ 물",
        "㉠ 이산화 탄소, ㉡ 물, ㉢ 질소",
        "㉠ 산소, ㉡ 녹말, ㉢ 이산화 탄소"
      ],
      correctAnswerIndex: 1,
      explanation: "광합성은 뿌리에서 흡수한 '물'과 기공으로 흡수한 '이산화 탄소(㉠)'를 원료로, 빛에너지를 이용하여 엽록체에서 최초의 유기 양분인 '포도당(㉡)'과 '산소(㉢)'를 만드는 작용입니다.",
      chunjaeConcept: "천재교과서(정대홍) [광합성 공식]: 물 + 이산화 탄소 + 빛에너지 → 포도당 + 산소!"
    },
    {
      id: "q-19",
      number: 19,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "잎에서 광합성으로 처음 만들어진 '포도당'은 곧바로 물에 녹지 않는 어떤 형태로 엽록체에 임시 저장되는가? 또한 이를 확인하는 지시약과 반응 색깔은?",
      diagramCaption: "[천재교과서 도식] 광합성 산물의 임시 저장과 검출",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <rect x="30" y="45" width="80" height="40" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="70" y="70" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">포도당 (수용성)</text>
        <text x="125" y="70" font-size="11" fill="#64748b">➔</text>
        <rect x="140" y="45" width="90" height="40" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="185" y="70" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">녹말 (임시 저장)</text>
        <text x="245" y="70" font-size="11" fill="#64748b">➔</text>
        <rect x="260" y="45" width="80" height="40" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="300" y="70" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">청람색 변화</text>
      </svg>`,
      options: [
        "단백질 - 뷰렛 반응 (보라색)",
        "녹말 - 아이오딘-아이오딘화 칼륨 용액 (청람색)",
        "지방 - 수단 Ⅲ 용액 (선홍색)",
        "설탕 - 베네딕트 용액 (황적색)",
        "포도당 그대로 유지 - 수산화 나트륨 (청록색)"
      ],
      correctAnswerIndex: 1,
      explanation: "광합성 결과 만들어진 최초의 당인 포도당은 낮 동안 물에 녹지 않는 거대 분자인 '녹말' 형태로 엽록체에 임시 저장됩니다. 이는 '아이오딘-아이오딘화 칼륨 용액'을 떨어뜨렸을 때 청람색으로 변하는 반응으로 확인합니다.",
      chunjaeConcept: "천재교과서(정대홍) [광합성 산물 확인]: 포도당 합성 후 엽록체에 녹말로 임시 저장, 아이오딘 반응 시 청람색!"
    },
    {
      id: "q-20",
      number: 20,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "다음 그림과 같이 검정말을 넣은 시험관에 1% 탄산수소 나트륨 수용액을 넣고 전등과의 거리를 조절하며 발생하는 기포 수를 측정하였다. 이에 대한 설명으로 옳지 않은 것은?",
      diagramCaption: "[천재교과서 탐구] 빛의 세기와 광합성 기포 발생",
      diagramImageUrl: "/mock-exam/q-20.jpg",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <circle cx="60" cy="80" r="25" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="60" y="85" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">전등</text>
        <line x1="95" y1="120" x2="250" y2="120" stroke="#64748b" stroke-width="2"/>
        <text x="170" y="135" font-size="10" fill="#475569" text-anchor="middle">거리 조절</text>
        <rect x="260" y="25" width="40" height="100" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <path d="M 280 115 L 280 50" stroke="#16a34a" stroke-width="4"/>
        <circle cx="280" cy="40" r="3" fill="#ffffff" stroke="#0284c7"/>
        <text x="280" y="15" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">기포 발생</text>
      </svg>`,
      options: [
        "탄산수소 나트륨 수용액은 검정말에 이산화 탄소를 공급하는 역할을 한다.",
        "발생하는 기포의 성분은 산소이다.",
        "전등과 시험관 사이의 거리가 가까울수록 빛의 세기가 강해져 기포 수가 증가한다.",
        "빛의 세기가 일정 수준 이상 강해지면 기포 발생 수가 더 이상 증가하지 않고 일정해진다.",
        "전등을 아주 가까이 대어 온도가 60℃ 이상으로 뜨거워져도 기포 수는 계속해서 기하급수적으로 증가한다."
      ],
      correctAnswerIndex: 4,
      explanation: "광합성에 관여하는 효소는 단백질로 이루어져 있어 45℃ 이상의 고온에서는 열변성을 일으켜 파괴됩니다. 따라서 온도가 60℃ 이상으로 지나치게 올라가면 광합성이 급격히 멈추어 기포 발생이 거의 일어나지 않게 됩니다.",
      chunjaeConcept: "천재교과서(정대홍) [광합성과 환경 요인]: 고온(45℃ 이상)에서는 효소 변성으로 광합성량 급감!"
    },
    {
      id: "q-21",
      number: 21,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "다음 그래프 (가)와 (나)는 광합성에 영향을 미치는 환경 요인에 따른 광합성량의 변화 곡선이다. 곡선 (가)와 (나)에 해당하는 환경 요인이 바르게 짝지어진 것은?",
      diagramCaption: "[천재교과서 그래프] 환경 요인에 따른 광합성량 곡선 비교",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <!-- Curve (가) Saturation -->
        <g transform="translate(30, 20)">
          <line x1="20" y1="110" x2="130" y2="110" stroke="#334155" stroke-width="1.5"/>
          <line x1="20" y1="110" x2="20" y2="20" stroke="#334155" stroke-width="1.5"/>
          <path d="M 20 110 Q 50 40 120 40" stroke="#2563eb" stroke-width="3" fill="none"/>
          <text x="75" y="130" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">(가) 수평 유지</text>
        </g>
        <!-- Curve (나) Bell shape -->
        <g transform="translate(190, 20)">
          <line x1="20" y1="110" x2="130" y2="110" stroke="#334155" stroke-width="1.5"/>
          <line x1="20" y1="110" x2="20" y2="20" stroke="#334155" stroke-width="1.5"/>
          <path d="M 20 110 Q 60 100 75 35 Q 90 100 120 110" stroke="#dc2626" stroke-width="3" fill="none"/>
          <text x="75" y="130" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">(나) 종 모양 (산 모양)</text>
        </g>
      </svg>`,
      options: [
        "(가) 온도, (나) 빛의 세기",
        "(가) 빛의 세기(또는 CO2 농도), (나) 온도",
        "(가) 산소 농도, (나) 수분량",
        "(가) 빛의 파장, (나) 비료 농도",
        "(가) 온도, (나) 이산화 탄소 농도"
      ],
      correctAnswerIndex: 1,
      explanation: "(가)는 빛의 세기 또는 이산화 탄소 농도로, 증가함에 따라 광합성량이 증가하다가 일정 수준(포화점) 이후에는 일정하게 유지됩니다. (나)는 온도로, 약 35~40℃에서 최고점을 찍고 그 이상에서는 효소 변성으로 급격히 떨어지는 '종 모양(산 모양)' 곡선입니다.",
      chunjaeConcept: "천재교과서(정대홍) [그래프 판별법]: 포화 후 수평은 빛/CO2농도, 산 모양(종 모양)은 온도!"
    },

    /* ---------------- PART 4: 식물과 에너지 (식물의 호흡과 광합성산물) ---------------- */
    {
      id: "q-22",
      number: 22,
      unit: "5. 식물과 에너지 > 2) 식물의 호흡과 광합성산물",
      question: "다음 그림은 식물 잎 뒷면의 기공을 둘러싸고 있는 '공변세포'의 구조와 기공이 열리는 원리를 나타낸 것이다. 기공이 열리는 과정에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 기공과 공변세포의 구조 및 개폐 원리",
      diagramImageUrl: "/mock-exam/q-22.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <g transform="translate(60, 20)">
          <!-- Closed stomata -->
          <ellipse cx="60" cy="65" rx="20" ry="45" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
          <ellipse cx="80" cy="65" rx="20" ry="45" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
          <text x="70" y="130" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">[기공 닫힘 (밤)]</text>
        </g>
        <g transform="translate(200, 20)">
          <!-- Open stomata -->
          <path d="M 45 25 C 20 65, 20 65, 45 105 C 55 85, 55 45, 45 25 Z" fill="#86efac" stroke="#15803d" stroke-width="3"/>
          <path d="M 75 25 C 100 65, 100 65, 75 105 C 65 85, 65 45, 75 25 Z" fill="#86efac" stroke="#15803d" stroke-width="3"/>
          <ellipse cx="60" cy="65" rx="8" ry="25" fill="#ffffff"/>
          <text x="60" y="130" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">[기공 열림 (낮)]</text>
          <text x="60" y="145" font-size="9" fill="#047857" text-anchor="middle">안쪽 세포벽이 두꺼움</text>
        </g>
      </svg>`,
      options: [
        "공변세포는 표피세포와 달리 엽록체가 전혀 없어 광합성을 하지 못한다.",
        "공변세포가 물을 흡수하여 팽창할 때, 안쪽 세포벽이 바깥쪽보다 두꺼워 바깥쪽으로 휘어지며 기공이 열린다.",
        "기공은 주로 밤에 활짝 열리고 낮에는 완전히 닫힌다.",
        "공변세포에서 물이 빠져나가 쭈그러들 때 기공이 활짝 열린다.",
        "기공을 통해 산소만 드나들며 이산화 탄소와 수증기는 통과하지 못한다."
      ],
      correctAnswerIndex: 1,
      explanation: "공변세포는 엽록체가 있어 광합성을 합니다. 낮에 광합성으로 농도가 높아지면 주변에서 물이 들어와 팽압이 커집니다. 이때 기공을 마주 보는 '안쪽 세포벽'이 바깥쪽 세포벽보다 두껍고 탄력성이 적기 때문에, 바깥쪽이 더 많이 늘어나 활처럼 바깥쪽으로 휘어지며 가운데 기공이 열립니다.",
      chunjaeConcept: "천재교과서(정대홍) [기공의 개폐 원리]: 공변세포 안쪽 벽이 두꺼워 물을 흡수하면 바깥으로 휘며 열림!"
    },
    {
      id: "q-23",
      number: 23,
      unit: "5. 식물과 에너지 > 2) 식물의 호흡과 광합성산물",
      question: "숨을 불어넣어 노란색으로 만든 BTB 용액이 든 세 시험관을 장치하고 햇빛을 비추었다. 시험관 B(검정말+빛)에서 용액이 '파란색'으로 변한 과학적 까닭은?",
      diagramCaption: "[천재교과서 탐구] BTB 용액 색깔 변화 실험",
      diagramImageUrl: "/mock-exam/q-23.jpg",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <g transform="translate(50, 20)">
          <rect x="0" y="10" width="30" height="95" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
          <text x="15" y="125" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">A (노란색)</text>
        </g>
        <g transform="translate(160, 20)">
          <rect x="0" y="10" width="30" height="95" rx="6" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
          <path d="M 15 85 L 15 30" stroke="#16a34a" stroke-width="3"/>
          <text x="15" y="125" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">B (파란색★)</text>
          <text x="15" y="140" font-size="9" fill="#15803d" text-anchor="middle">검정말+햇빛</text>
        </g>
        <g transform="translate(270, 20)">
          <rect x="0" y="10" width="30" height="95" rx="6" fill="#64748b" stroke="#334155" stroke-width="2"/>
          <text x="15" y="125" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">C (노란색)</text>
          <text x="15" y="140" font-size="9" fill="#475569" text-anchor="middle">알루미늄박</text>
        </g>
      </svg>`,
      options: [
        "검정말이 호흡을 하여 이산화 탄소를 방출했기 때문이다.",
        "빛에 의해 BTB 용액 속의 산소가 모두 증발했기 때문이다.",
        "검정말이 광합성을 활발히 진행하여 용액 속의 이산화 탄소를 대량 흡수(소모)했기 때문이다.",
        "알루미늄박이 빛을 흡수하여 온도를 낮추었기 때문이다.",
        "물 속의 수소 이온 농도가 급격히 높아져 강산성이 되었기 때문이다."
      ],
      correctAnswerIndex: 2,
      explanation: "BTB 용액은 이산화 탄소가 녹아 탄산이 많아지면 산성(노란색)이 되고, 이산화 탄소가 줄어들면 염기성(파란색)이 됩니다. 시험관 B는 검정말이 햇빛을 받아 광합성을 활발히 하여 물속의 이산화 탄소를 대량 소모하였으므로 파란색으로 변합니다.",
      chunjaeConcept: "천재교과서(정대홍) [BTB 용액 색깔 변화]: 광합성으로 CO2 소모 시 염기성(파란색)으로 변환!"
    },
    {
      id: "q-24",
      number: 24,
      unit: "5. 식물과 에너지 > 2) 식물의 호흡과 광합성산물",
      question: "다음 그림은 낮과 밤 동안 식물에서 일어나는 기체 교환을 비교한 것이다. 이에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 식물의 낮과 밤 기체 교환",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <g transform="translate(35, 20)">
          <rect x="0" y="0" width="130" height="120" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="65" y="25" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">[낮 (빛 있을 때)]</text>
          <text x="65" y="55" font-size="10" fill="#1e3a8a" text-anchor="middle">광합성량 &gt; 호흡량</text>
          <text x="65" y="80" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">CO2 흡수, O2 방출</text>
        </g>
        <g transform="translate(195, 20)">
          <rect x="0" y="0" width="130" height="120" rx="10" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5"/>
          <text x="65" y="25" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">[밤 (빛 없을 때)]</text>
          <text x="65" y="55" font-size="10" fill="#581c87" text-anchor="middle">호흡만 진행</text>
          <text x="65" y="80" font-size="10" font-weight="bold" fill="#059669" text-anchor="middle">O2 흡수, CO2 방출</text>
        </g>
      </svg>`,
      options: [
        "식물은 낮에는 광합성만 하고 호흡은 전혀 하지 않는다.",
        "식물의 호흡은 밤에만 일어나고 낮에는 중단된다.",
        "식물의 호흡은 낮과 밤에 관계없이 24시간 내내 항상 일어난다.",
        "밤에는 빛이 없어 광합성과 호흡이 둘 다 모두 완전히 멈춘다.",
        "식물은 동물과 달리 호흡할 때 이산화 탄소를 흡수하고 산소를 방출한다."
      ],
      correctAnswerIndex: 2,
      explanation: "식물의 세포 호흡은 생명을 유지하기 위한 에너지 생산 과정이므로 낮과 밤 상관없이 24시간 내내 끊임없이 일어납니다. 낮에는 광합성량이 호흡량보다 훨씬 많아 겉보기에 이산화 탄소를 흡수하고 산소를 방출하는 것처럼 보일 뿐입니다. 밤에는 빛이 없어 광합성이 멈추고 호흡만 진행됩니다.",
      chunjaeConcept: "천재교과서(정대홍) [식물의 호흡]: 호흡은 24시간 내내 항시 진행! 낮에는 광합성량이 커서 겉보기에 CO2 흡수!"
    },
    {
      id: "q-25",
      number: 25,
      unit: "5. 식물과 에너지 > 2) 식물의 호흡과 광합성산물",
      question: "잎에서 광합성으로 합성된 유기 양분이 밤에 이동하는 과정과 저장 형태에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 광합성 산물의 전환, 이동 및 저장",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <rect x="25" y="30" width="85" height="40" rx="6" fill="#dbeafe"/>
        <text x="67" y="54" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">녹말 (낮에 잎에 저장)</text>
        
        <path d="M 115 50 L 145 50" stroke="#d97706" stroke-width="2"/>
        <rect x="150" y="30" width="85" height="40" rx="6" fill="#fef9c3"/>
        <text x="192" y="54" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">설탕 (밤에 전환)</text>
        
        <path d="M 240 50 L 270 50" stroke="#d97706" stroke-width="2"/>
        <rect x="275" y="30" width="65" height="40" rx="6" fill="#dcfce7"/>
        <text x="307" y="54" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">체관 이동</text>
        
        <text x="180" y="110" font-size="10" fill="#475569" text-anchor="middle">뿌리, 줄기, 열매에 녹말(감자), 단백질(콩), 지방(깨) 등으로 저장</text>
      </svg>`,
      options: [
        "녹말 형태 그대로 물관을 통해 온몸으로 빠르게 이동한다.",
        "물에 잘 녹는 '설탕' 형태로 전환되어 주로 밤에 '체관'을 통해 각 기관으로 이동한다.",
        "포도당 상태 그대로 기공을 통해 몸 밖으로 증발한다.",
        "형성층 세포 분열을 통해서만 양분이 이동할 수 있다.",
        "모든 식물은 반드시 씨앗에만 녹말 형태로만 저장해야 한다."
      ],
      correctAnswerIndex: 1,
      explanation: "낮 동안 엽록체에 녹말로 저장되었던 양분은 밤이 되면 물에 잘 녹는 작은 분자인 '설탕'으로 분해(전환)되어 줄기 바깥쪽의 '체관'을 타고 뿌리, 줄기, 열매 등으로 이동합니다. 이후 식물에 따라 감자는 녹말, 콩은 단백질, 참깨는 지방, 양파는 포도당 등 다양한 형태로 전환되어 저장됩니다.",
      chunjaeConcept: "천재교과서(정대홍) [광합성 산물의 이동과 저장]: 밤에 물에 녹는 설탕으로 전환되어 체관을 통해 이동!"
    }
  ]
};
