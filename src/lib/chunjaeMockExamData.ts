import { MockExam } from "@/types/mockExam";

export const CHUNJAE_FINAL_MOCK_EXAM: MockExam = {
  id: "chunjae-exam-2026-custom-scope",
  title: "중2 과학 기말고사 최종 모의고사 (25제)",
  subtitle: "천재교과서(정대홍) 과학2 시험범위 [4. 동물과 에너지(소화·순환·호흡·배설) / 5. 식물과 에너지(광합성·호흡)] 100% 출제",
  textbook: "천재교과서 중2 과학 (2022 개정, 대표저자 정대홍)",
  totalQuestions: 25,
  timeLimitMinutes: 45,
  createdAt: "2026-09-27T00:00:00.000Z",
  questions: [
    /* ---------------- PART 1: 동물과 에너지 > 1) 소화 ---------------- */
    {
      id: "q-1",
      number: 1,
      unit: "4. 동물과 에너지 > 1) 소화",
      question: "다음 표는 음식물 속에 들어있는 4대 영양소를 검출하기 위한 시약과 반응 결과 나타나는 색깔 변화를 정리한 것이다. 기호 A~D에 들어갈 시약과 색깔의 연결로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구] 4대 영양소의 검출 반응",
      diagramImageUrl: "/mock-exam/q-1.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <rect x="20" y="20" width="320" height="28" fill="#e0e7ff" rx="4"/>
        <text x="70" y="38" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">영양소</text>
        <text x="180" y="38" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">검출 시약</text>
        <text x="280" y="38" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">반응 색깔</text>
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
      question: "다음 그림은 사람의 소화 기관을 나타낸 것이다. 기호 A~E에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 사람의 소화계 구조",
      diagramImageUrl: "/mock-exam/q-2.jpg",
      diagramSvg: `<svg viewBox="0 0 360 210" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="210" fill="#f8fafc" rx="12" />
        <path d="M 90 40 Q 150 35 160 85 Q 90 95 90 40 Z" fill="#b45309" opacity="0.8"/>
        <text x="110" y="65" font-size="11" font-weight="bold" fill="#ffffff">A (간)</text>
        <circle cx="145" cy="80" r="10" fill="#15803d"/>
        <text x="125" y="100" font-size="10" font-weight="bold" fill="#15803d">B (쓸개)</text>
        <path d="M 175 50 Q 240 50 220 100 Q 180 110 175 50 Z" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
        <text x="200" y="80" font-size="11" font-weight="bold" fill="#ffffff">C (위)</text>
        <rect x="155" y="105" width="55" height="16" rx="6" fill="#fde047" stroke="#ca8a04"/>
        <text x="182" y="117" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">D (이자)</text>
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
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">A (37℃ 녹말+침)</text>
        </g>
        <g transform="translate(110, 15)">
          <rect x="0" y="15" width="28" height="85" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">B (100℃ 가열)</text>
        </g>
        <g transform="translate(190, 15)">
          <rect x="0" y="15" width="28" height="85" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">C (37℃ 녹말+물)</text>
        </g>
        <g transform="translate(270, 15)">
          <rect x="0" y="15" width="28" height="85" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
          <text x="14" y="120" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">D (0℃ 얼음)</text>
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
      explanation: "소화 효소(단백질)는 사람의 체온 범위(35~40℃)에서 활성이 가장 높습니다. 시험관 A(37℃)에서는 아밀레이스가 녹말을 엿당으로 모두 분해하여 녹말이 남아있지 않으므로 아이오딘 반응 시 청람색이 되지 않고 황갈색을 띱니다.",
      chunjaeConcept: "천재교과서(정대홍) [탐구: 침에 의한 소화와 온도]: 37℃에서 아밀레이스 활성 최고, 녹말 분해 완료!"
    },
    {
      id: "q-4",
      number: 4,
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

    /* ---------------- PART 2: 동물과 에너지 > 2) 순환 ---------------- */
    {
      id: "q-5",
      number: 5,
      unit: "4. 동물과 에너지 > 2) 순환",
      question: "혈액을 시험관에 넣고 원심 분리했을 때 위쪽의 담황색 액체 성분 A(혈장)와 아래쪽의 붉은 성분 B(혈구)에 대한 설명으로 옳은 것은?",
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
      explanation: "A(혈장)는 혈액의 약 55%를 차지하는 담황색 액체로 대부분 물이며 영양소, 노폐물, 이산화 탄소를 운반합니다. 적혈구(핵 없음, 산소 운반), 백혈구(식균 작용), 혈소판(혈액 응고)은 B(혈구)에 속합니다.",
      chunjaeConcept: "천재교과서(정대홍) [혈액의 구성]: 혈장(액체, 물질운반), 적혈구(산소), 백혈구(식균), 혈소판(응고)!"
    },
    {
      id: "q-6",
      number: 6,
      unit: "4. 동물과 에너지 > 2) 순환",
      question: "사람의 심장 구조에서 심방과 심실 사이, 심실과 동맥 사이에 위치하여 혈액의 역류를 막아주는 구조물과, 온몸으로 피를 뿜어내기 위해 근육벽이 가장 두꺼운 곳의 연결로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 심장의 내부 구조와 판막",
      diagramImageUrl: "/mock-exam/q-10.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <text x="180" y="85" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">★ 판막 (역류 방지) / 좌심실 (두꺼운 근육벽)</text>
      </svg>`,
      options: [
        "모세혈관 - 우심방",
        "판막 - 좌심실",
        "판막 - 우심실",
        "동맥벽 - 좌심방",
        "정맥관 - 우심방"
      ],
      correctAnswerIndex: 1,
      explanation: "혈액이 한쪽 방향으로만 흐르도록 돕고 역류를 막아주는 구조는 '판막'입니다. 또한 머리끝부터 발끝까지 온몸으로 혈액을 높은 압력으로 뿜어내는 '좌심실'이 심장 부위 중 근육벽이 가장 두껍습니다.",
      chunjaeConcept: "천재교과서(정대홍) [심장 구조]: 판막(역류 방지), 좌심실(온몸 순환 출발점, 근육벽 최후)!"
    },
    {
      id: "q-7",
      number: 7,
      unit: "4. 동물과 에너지 > 2) 순환",
      question: "심장에서 출발하여 폐를 거쳐 산소를 받아 심장으로 돌아오는 '폐순환' 경로와, 산소가 풍부한 '동맥혈'이 흐르는 혈관의 바른 연결은?",
      diagramCaption: "[천재교과서 도식] 폐순환과 온몸 순환 모식도",
      diagramImageUrl: "/mock-exam/q-12.jpg",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <text x="180" y="70" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">우심실 ➔ 폐동맥 ➔ 폐 ➔ 폐정맥 ➔ 좌심방</text>
      </svg>`,
      options: [
        "폐순환: 우심실 → 폐동맥 → 폐 → 폐정맥 → 좌심방 / 동맥혈: 폐정맥, 대동맥",
        "폐순환: 좌심실 → 대동맥 → 온몸 → 대정맥 → 우심방 / 동맥혈: 폐동맥, 대정맥",
        "폐순환: 우심실 → 폐정맥 → 폐 → 폐동맥 → 좌심방 / 동맥혈: 폐동맥만 해당",
        "폐순환: 우심방 → 폐동맥 → 폐 → 폐정맥 → 좌심실 / 동맥혈: 대정맥만 해당",
        "폐순환: 좌심실 → 폐동맥 → 폐 → 대정맥 → 우심방 / 동맥혈: 모든 정맥"
      ],
      correctAnswerIndex: 0,
      explanation: "폐순환은 우심실 → 폐동맥 → 폐의 모세혈관 → 폐정맥 → 좌심방 경로입니다. 폐에서 산소를 충전하고 돌아오는 '폐정맥'과 온몸으로 나가는 '대동맥'에는 산소가 풍부한 '동맥혈'이 흐릅니다.",
      chunjaeConcept: "천재교과서(정대홍) [폐순환과 혈액 종류]: 우심실→폐동맥→폐→폐정맥→좌심방, 폐정맥과 대동맥은 동맥혈!"
    },
    {
      id: "q-8",
      number: 8,
      unit: "4. 동물과 에너지 > 2) 순환",
      question: "정맥은 혈압이 매우 낮아 혈액이 심장으로 되돌아오기 어렵습니다. 혈액이 거꾸로 흐르는 것을 막아주는 정맥 내부의 구조물과 혈액 순환을 돕는 주된 힘은?",
      diagramCaption: "[천재교과서 도식] 정맥의 판막과 근육 수축",
      diagramImageUrl: "/mock-exam/q-15.jpg",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <text x="180" y="70" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">정맥 내부의 판막 + 주변 골격근 수축</text>
      </svg>`,
      options: [
        "두꺼운 탄력층과 심장의 직접적인 수축 압력",
        "판막과 주변 골격근의 수축 운동",
        "헤모글로빈의 화학적 당김 힘",
        "동맥의 높은 혈압에 의한 밀어내기 작용",
        "중력에 의한 자연 낙하 작용"
      ],
      correctAnswerIndex: 1,
      explanation: "정맥은 혈압이 거의 0에 가까우므로 혈액이 역류하지 않도록 혈관 내부에 '판막'이 발달해 있으며, 주변의 팔다리 근육이 수축·이완하며 혈관을 쥐어짜 주어 심장으로 혈액을 이동시킵니다.",
      chunjaeConcept: "천재교과서(정대홍) [정맥의 혈액 이동]: 정맥 내부의 판막과 주변 근육 운동으로 혈액 역류 방지 및 이동!"
    },

    /* ---------------- PART 3: 동물과 에너지 > 3) 호흡 ---------------- */
    {
      id: "q-9",
      number: 9,
      unit: "4. 동물과 에너지 > 3) 호흡",
      question: "사람의 폐는 근육이 없어 스스로 수축하거나 이완하지 못하며, 수많은 작은 공기주머니인 '폐포(Alveolus)'로 이루어져 있습니다. 폐포 구조가 기체 교환에 주는 가장 결정적인 이점은 무엇인가?",
      diagramCaption: "[천재교과서 도식] 폐포와 모세혈관망 구조",
      diagramSvg: `<svg viewBox="0 0 540 270" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="alveolusSphere" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fff1f2" />
      <stop offset="50%" stop-color="#fecdd3" />
      <stop offset="85%" stop-color="#fda4af" />
      <stop offset="100%" stop-color="#f43f5e" />
    </radialGradient>
    <linearGradient id="capillaryFlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="50%" stop-color="#9333ea" />
      <stop offset="100%" stop-color="#dc2626" />
    </linearGradient>
    <filter id="shadowQ9R" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.15" />
    </filter>
  </defs>
  <rect width="540" height="270" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5" />

  <!-- Bronchiole tube (세기관지 가지) -->
  <path d="M 30 135 C 80 135, 100 95, 160 95" fill="none" stroke="#fed7aa" stroke-width="32" stroke-linecap="round" />
  <path d="M 30 135 C 80 135, 100 95, 160 95" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" />
  
  <!-- Grape-like Alveoli Cluster (포도송이 폐포 군집) -->
  <g filter="url(#shadowQ9R)">
    <circle cx="210" cy="70" r="34" fill="url(#alveolusSphere)" stroke="#e11d48" stroke-width="1.5" />
    <circle cx="265" cy="60" r="36" fill="url(#alveolusSphere)" stroke="#e11d48" stroke-width="1.5" />
    <circle cx="235" cy="125" r="38" fill="url(#alveolusSphere)" stroke="#e11d48" stroke-width="1.5" />
    <circle cx="295" cy="115" r="35" fill="url(#alveolusSphere)" stroke="#e11d48" stroke-width="1.5" />
    <circle cx="185" cy="140" r="30" fill="url(#alveolusSphere)" stroke="#e11d48" stroke-width="1.5" />
    <circle cx="270" cy="175" r="32" fill="url(#alveolusSphere)" stroke="#e11d48" stroke-width="1.5" />
  </g>

  <!-- Capillary Network Mesh wrapping around Alveoli -->
  <g filter="url(#shadowQ9R)">
    <!-- Blue arteriole coming in -->
    <path d="M 360 40 C 400 40, 390 120, 350 140" fill="none" stroke="#2563eb" stroke-width="9" stroke-linecap="round" />
    <!-- Transition capillary net -->
    <path d="M 300 80 Q 345 80 370 110 Q 340 140 280 140" fill="none" stroke="url(#capillaryFlow)" stroke-width="7" />
    <path d="M 250 110 Q 310 130 330 160 Q 300 180 250 160" fill="none" stroke="url(#capillaryFlow)" stroke-width="6" />
    <!-- Red venule exiting -->
    <path d="M 350 140 C 390 160, 420 200, 360 225" fill="none" stroke="#dc2626" stroke-width="9" stroke-linecap="round" />
  </g>

  <!-- Red Blood Cells inside capillary -->
  <ellipse cx="375" cy="65" rx="5" ry="3" fill="#1d4ed8" />
  <ellipse cx="335" cy="120" rx="5" ry="3" fill="#7e22ce" />
  <ellipse cx="375" cy="190" rx="5" ry="3" fill="#b91c1c" />

  <!-- Clean Textbook Callout Labels (No Spoilers!) -->
  <!-- Label A: 세기관지 -->
  <rect x="25" y="80" width="85" height="26" rx="6" fill="#ffffff" stroke="#c2410c" filter="url(#shadowQ9R)" />
  <text x="67" y="97" font-size="11" font-weight="900" fill="#9a3412" text-anchor="middle">A: 세기관지</text>
  <line x1="110" y1="93" x2="135" y2="105" stroke="#c2410c" stroke-width="1.5" />

  <!-- Label B: 폐포 -->
  <rect x="180" y="15" width="95" height="26" rx="6" fill="#ffffff" stroke="#e11d48" filter="url(#shadowQ9R)" />
  <text x="227" y="32" font-size="11" font-weight="900" fill="#be123c" text-anchor="middle">B: 폐포 (Alveolus)</text>
  <line x1="227" y1="41" x2="227" y2="60" stroke="#e11d48" stroke-width="1.5" />

  <!-- Label C: 모세혈관망 -->
  <rect x="390" y="100" width="115" height="26" rx="6" fill="#ffffff" stroke="#7e22ce" filter="url(#shadowQ9R)" />
  <text x="447" y="117" font-size="11" font-weight="900" fill="#6b21a8" text-anchor="middle">C: 모세혈관망</text>
  <line x1="390" y1="113" x2="350" y2="113" stroke="#7e22ce" stroke-width="1.5" />

  <!-- Chemical Diffusion Arrows (Neutral scientific presentation) -->
  <g transform="translate(400, 150)">
    <rect x="0" y="0" width="115" height="52" rx="8" fill="#ffffff" stroke="#94a3b8" />
    <text x="12" y="22" font-size="10" font-weight="bold" fill="#dc2626">➔ O₂ 이동</text>
    <text x="12" y="42" font-size="10" font-weight="bold" fill="#2563eb">➔ CO₂ 이동</text>
  </g>

  <!-- Clean Bottom Caption -->
  <rect x="25" y="235" width="490" height="26" rx="6" fill="#f1f5f9" />
  <text x="270" y="252" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">
    [도식] 폐포와 모세혈관망의 연결 구조 및 기체 이동 경로
  </text>
</svg>`,
      options: [
        "폐 속으로 들어온 이물질을 녹이는 소화액을 많이 저장하기 위해서",
        "폐가 공기와 닿는 표면적을 매우 넓혀 산소와 이산화 탄소의 기체 교환을 빠르고 효율적으로 하기 위해서",
        "폐 내부의 온도를 일정하게 차갑게 유지하기 위해서",
        "심장에서 나온 높은 혈압을 직접 흡수하여 완충하기 위해서",
        "갈비뼈와 가로막이 부딪히지 않도록 쿠션 역할을 하기 위해서"
      ],
      correctAnswerIndex: 1,
      explanation: "사람의 폐는 약 3억~4억 개의 미세한 폐포로 구성되어 있어 공기와 접촉하는 총 표면적이 테니스장 크기에 달할 정도로 매우 넓습니다. 표면적이 극대화되므로 산소와 이산화 탄소의 기체 교환이 매우 신속하게 일어납니다.",
      chunjaeConcept: "천재교과서(정대홍) [폐포의 구조적 특징]: 수많은 폐포로 표면적을 극대화하여 효율적인 기체 교환 달성!"
    },
    {
      id: "q-10",
      number: 10,
      unit: "4. 동물과 에너지 > 3) 호흡",
      question: "다음 그림은 호흡 운동의 원리를 알아보기 위한 유리종 모형 실험이다. 고무막을 아래로 잡아당길 때(들숨 과정) 모형 내부에서 일어나는 변화로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구] 호흡 운동 모형 실험 (들숨과 날숨)",
      diagramSvg: `<svg viewBox="0 0 540 270" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glassWall" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="25%" stop-color="#e0f2fe" stop-opacity="0.4" />
      <stop offset="75%" stop-color="#bae6fd" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />
    </linearGradient>
    <radialGradient id="balloonPink" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#fecdd3" />
      <stop offset="70%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#be123c" />
    </radialGradient>
    <filter id="shadowQ10R" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="2" stdDeviation="2.5" flood-opacity="0.12" />
    </filter>
  </defs>
  <rect width="540" height="270" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5" />

  <!-- Left: [가] 날숨 (고무막 놓음 / 평상시) -->
  <g transform="translate(30, 20)">
    <rect x="0" y="0" width="225" height="195" rx="12" fill="#ffffff" stroke="#cbd5e1" filter="url(#shadowQ10R)" />
    <rect x="0" y="0" width="225" height="28" rx="12" fill="#f1f5f9" />
    <text x="112" y="19" font-size="12" font-weight="900" fill="#334155" text-anchor="middle">(가) 평상시 (고무막 놓음)</text>

    <!-- Glass Bell Jar -->
    <path d="M 60 55 C 60 40, 165 40, 165 55 L 165 155 L 60 155 Z" fill="url(#glassWall)" stroke="#64748b" stroke-width="2" />
    <!-- Stopper & Glass Tube (Y자관) -->
    <rect x="102" y="36" width="22" height="12" fill="#78350f" rx="2" />
    <line x1="113" y1="25" x2="113" y2="75" stroke="#0284c7" stroke-width="3.5" />
    <path d="M 113 75 L 90 98" stroke="#0284c7" stroke-width="3" />
    <path d="M 113 75 L 136 98" stroke="#0284c7" stroke-width="3" />

    <!-- Deflated Balloons (수축된 고무풍선) -->
    <ellipse cx="88" cy="112" rx="11" ry="16" fill="url(#balloonPink)" />
    <ellipse cx="138" cy="112" rx="11" ry="16" fill="url(#balloonPink)" />

    <!-- Curved Rubber Diaphragm (위로 볼록한 고무막) -->
    <path d="M 60 155 Q 113 135 165 155" fill="none" stroke="#16a34a" stroke-width="6" stroke-linecap="round" />

    <!-- Air Arrow -->
    <path d="M 113 25 L 113 12" stroke="#dc2626" stroke-width="3" />
    <polygon points="113,8 109,16 117,16" fill="#dc2626" />
    <text x="112" y="180" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">공기 유출 (날숨)</text>
  </g>

  <!-- Right: [나] 들숨 (고무막 아래로 당김) -->
  <g transform="translate(285, 20)">
    <rect x="0" y="0" width="225" height="195" rx="12" fill="#ffffff" stroke="#cbd5e1" filter="url(#shadowQ10R)" />
    <rect x="0" y="0" width="225" height="28" rx="12" fill="#eff6ff" />
    <text x="112" y="19" font-size="12" font-weight="900" fill="#1d4ed8" text-anchor="middle">(나) 고무막 당김</text>

    <!-- Glass Bell Jar -->
    <path d="M 60 55 C 60 40, 165 40, 165 55 L 165 155 L 60 155 Z" fill="url(#glassWall)" stroke="#2563eb" stroke-width="2" />
    <!-- Stopper & Glass Tube -->
    <rect x="102" y="36" width="22" height="12" fill="#78350f" rx="2" />
    <line x1="113" y1="25" x2="113" y2="75" stroke="#0284c7" stroke-width="3.5" />
    <path d="M 113 75 L 88 100" stroke="#0284c7" stroke-width="3" />
    <path d="M 113 75 L 138 100" stroke="#0284c7" stroke-width="3" />

    <!-- Greatly Inflated Balloons (팽창된 고무풍선) -->
    <ellipse cx="85" cy="116" rx="20" ry="26" fill="url(#balloonPink)" filter="url(#shadowQ10R)" />
    <ellipse cx="141" cy="116" rx="20" ry="26" fill="url(#balloonPink)" filter="url(#shadowQ10R)" />

    <!-- Stretched Rubber Diaphragm (아래로 당겨진 고무막) -->
    <path d="M 60 155 Q 113 175 165 155" fill="none" stroke="#16a34a" stroke-width="6" stroke-linecap="round" />
    <path d="M 113 168 L 113 182" stroke="#15803d" stroke-width="3" />
    <polygon points="113,186 109,178 117,178" fill="#15803d" />

    <!-- Air Arrow -->
    <path d="M 113 10 L 113 22" stroke="#2563eb" stroke-width="3" />
    <polygon points="113,26 109,18 117,18" fill="#2563eb" />
    <text x="112" y="180" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">공기 유입 (들숨, 폐 팽창)</text>
  </g>

  <!-- Clean Bottom Matching Table -->
  <rect x="30" y="225" width="480" height="35" rx="8" fill="#ffffff" stroke="#94a3b8" />
  <text x="270" y="247" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">
    A(Y자관): 기관·기관지  |  B(유리종): 흉강  |  C(고무풍선): 폐  |  D(고무막): 가로막
  </text>
</svg>`,
      options: [
        "유리종 내부 부피 감소, 내부 압력 증가, 고무풍선 수축",
        "유리종 내부 부피 증가, 내부 압력 감소, 고무풍선 팽창 (공기 유입)",
        "유리종 내부 부피 증가, 내부 압력 증가, 공기 유출",
        "가로막 상승, 갈비뼈 하강, 흉강 부피 감소",
        "외부 대기압이 유리종 내부보다 낮아져 공기가 밖으로 빠져나감"
      ],
      correctAnswerIndex: 1,
      explanation: "고무막을 아래로 당기면(가로막 하강) 유리종(흉강) 내부 부피가 증가하고, 그에 따라 내부 압력이 대기압보다 낮아집니다. 그 결과 외부 공기가 밀려들어와 고무풍선(폐)이 부풀어 오르는 '들숨'이 일어납니다.",
      chunjaeConcept: "천재교과서(정대홍) [호흡 운동의 원리]: 고무막 당김 → 흉강 부피 증가 → 흉강 압력 감소 → 폐 팽창(들숨)!"
    },
    {
      id: "q-11",
      number: 11,
      unit: "4. 동물과 에너지 > 3) 호흡",
      question: "폐포와 모세혈관 사이, 그리고 모세혈관과 온몸의 조직 세포 사이에서 산소와 이산화 탄소가 교환되는 기본 원리와 이동 방향으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 기체 A와 기체 B의 교환 (외호흡과 내호흡)",
      diagramSvg: `<svg viewBox="0 0 540 260" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="alveolusWall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef2f2" />
      <stop offset="100%" stop-color="#fee2e2" />
    </linearGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef9c3" />
      <stop offset="100%" stop-color="#fef08a" />
    </linearGradient>
    <filter id="shadow11" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2.5" flood-opacity="0.12" />
    </filter>
  </defs>
  <rect width="540" height="260" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Left: (가) 외호흡 -->
  <g transform="translate(25, 20)">
    <rect x="0" y="0" width="230" height="210" rx="12" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" filter="url(#shadow11)" />
    <rect x="0" y="0" width="230" height="30" rx="12" fill="#eff6ff" />
    <text x="115" y="20" font-size="12" font-weight="900" fill="#1d4ed8" text-anchor="middle">(가) 폐포와 모세혈관 사이</text>

    <!-- Alveolus Section -->
    <path d="M 20 60 C 20 45, 90 45, 95 65 C 100 85, 90 125, 90 155 C 80 180, 20 180, 20 155 Z" fill="url(#alveolusWall)" stroke="#f87171" stroke-width="2" />
    <text x="55" y="105" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">폐포</text>

    <!-- Capillary Vessel -->
    <path d="M 175 45 L 175 185" stroke="#94a3b8" stroke-width="32" stroke-linecap="round" />
    <path d="M 175 45 L 175 110" stroke="#3b82f6" stroke-width="28" stroke-linecap="round" />
    <path d="M 175 110 L 175 185" stroke="#ef4444" stroke-width="28" stroke-linecap="round" />
    <text x="175" y="40" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">정맥혈 (유입)</text>
    <text x="175" y="198" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">동맥혈 (유출)</text>

    <!-- Gas Exchange Arrows -->
    <!-- Oxygen Arrow: Alveolus -> Capillary -->
    <path d="M 95 90 L 150 90" stroke="#dc2626" stroke-width="3" stroke-linecap="round" />
    <polygon points="154,90 146,86 146,94" fill="#dc2626" />
    <text x="122" y="82" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">기체 A</text>

    <!-- Carbon Dioxide Arrow: Capillary -> Alveolus -->
    <path d="M 150 135 L 95 135" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
    <polygon points="91,135 99,131 99,139" fill="#2563eb" />
    <text x="122" y="150" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">기체 B</text>
  </g>

  <!-- Right: (나) 내호흡 -->
  <g transform="translate(285, 20)">
    <rect x="0" y="0" width="230" height="210" rx="12" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5" filter="url(#shadow11)" />
    <rect x="0" y="0" width="230" height="30" rx="12" fill="#fef2f2" />
    <text x="115" y="20" font-size="12" font-weight="900" fill="#b91c1c" text-anchor="middle">(나) 모세혈관과 조직 세포 사이</text>

    <!-- Capillary Vessel -->
    <path d="M 55 45 L 55 185" stroke="#94a3b8" stroke-width="32" stroke-linecap="round" />
    <path d="M 55 45 L 55 110" stroke="#ef4444" stroke-width="28" stroke-linecap="round" />
    <path d="M 55 110 L 55 185" stroke="#3b82f6" stroke-width="28" stroke-linecap="round" />
    <text x="55" y="40" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">동맥혈 (유입)</text>
    <text x="55" y="198" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">정맥혈 (유출)</text>

    <!-- Tissue Cells -->
    <rect x="135" y="55" width="80" height="120" rx="14" fill="url(#cellGrad)" stroke="#eab308" stroke-width="2" />
    <circle cx="175" cy="90" r="12" fill="#ca8a04" opacity="0.3" />
    <circle cx="175" cy="140" r="12" fill="#ca8a04" opacity="0.3" />
    <text x="175" y="118" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">조직 세포</text>

    <!-- Gas Exchange Arrows -->
    <!-- Oxygen Arrow: Capillary -> Tissue -->
    <path d="M 75 90 L 125 90" stroke="#dc2626" stroke-width="3" stroke-linecap="round" />
    <polygon points="129,90 121,86 121,94" fill="#dc2626" />
    <text x="100" y="82" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">기체 A</text>

    <!-- Carbon Dioxide Arrow: Tissue -> Capillary -->
    <path d="M 125 135 L 75 135" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
    <polygon points="71,135 79,131 79,139" fill="#2563eb" />
    <text x="100" y="150" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">기체 B</text>
  </g>

  <!-- Clean Footer Caption without spoilers -->
  <text x="270" y="246" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">
    [그림] 폐포와 온몸의 모세혈관에서 일어나는 기체 A와 기체 B의 이동
  </text>
</svg>`,
      options: [
        "기체 농도(분압) 차이에 따른 '확산' 현상으로, 에너지를 소모하지 않고 고농도에서 저농도로 이동한다.",
        "ATP 에너지를 대량 소모하는 능동 수송으로, 저농도에서 고농도로 강제 이동한다.",
        "모세혈관의 혈압 차이로 인해 모든 기체가 혈관 안으로만 빨려 들어간다.",
        "폐포에서는 이산화 탄소만 이동하고 산소는 교환되지 않는다.",
        "온몸의 조직 세포는 산소를 혈관으로 버리고 이산화 탄소를 흡수한다."
      ],
      correctAnswerIndex: 0,
      explanation: "호흡계에서의 기체 교환은 기체의 분압(농도) 차이에 의한 '확산' 현상입니다. 에너지를 소모하지 않고 농도가 높은 곳에서 낮은 곳으로 자연스럽게 퍼져 나갑니다. 폐포에서는 산소가 모세혈관으로, 이산화탄소는 폐포로 이동합니다.",
      chunjaeConcept: "천재교과서(정대홍) [기체 교환의 원리]: 에너지 소모 없는 분압 차이에 따른 확산(고농도→저농도)!"
    },
    {
      id: "q-12",
      number: 12,
      unit: "4. 동물과 에너지 > 3) 호흡",
      question: "우리 몸의 모든 세포에서 영양소(포도당)와 산소를 반응시켜 생명 활동에 필요한 에너지를 얻는 과정을 무엇이라 하며, 이때 함께 생성되는 물질은 무엇인가?",
      diagramCaption: "[천재교과서 도식] 세포 소기관에서의 물질 대사 과정",
      diagramSvg: `<svg viewBox="0 0 540 250" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cellBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <linearGradient id="mitoRealistic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffedd5" />
      <stop offset="60%" stop-color="#fed7aa" />
      <stop offset="100%" stop-color="#fdba74" />
    </linearGradient>
    <filter id="shadow12" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="3" flood-opacity="0.15" />
    </filter>
  </defs>
  <rect width="540" height="250" fill="url(#cellBg)" rx="16" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Cell Membrane Outline -->
  <rect x="20" y="20" width="500" height="205" rx="16" fill="#ffffff" stroke="#94a3b8" stroke-dasharray="6,3" />
  <text x="45" y="42" font-size="11" font-weight="bold" fill="#64748b">세포 내부</text>

  <!-- Left: Reactants -->
  <g transform="translate(45, 60)">
    <rect x="0" y="0" width="125" height="42" rx="8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5" filter="url(#shadow12)" />
    <text x="62" y="26" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">영양소(포도당)</text>

    <text x="62" y="62" font-size="16" font-weight="bold" fill="#64748b" text-anchor="middle">+</text>

    <rect x="0" y="75" width="125" height="42" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5" filter="url(#shadow12)" />
    <text x="62" y="101" font-size="12" font-weight="900" fill="#dc2626" text-anchor="middle">물질 (A)</text>
  </g>

  <!-- Reactant Arrows into Mitochondria -->
  <path d="M 180 81 L 215 95" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" />
  <polygon points="219,97 210,92 214,101" fill="#0284c7" />

  <path d="M 180 135 L 215 125" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" />
  <polygon points="219,123 214,119 210,128" fill="#dc2626" />

  <!-- Center: Realistic Mitochondria with Cristae -->
  <g transform="translate(225, 60)">
    <!-- Outer bean shape -->
    <ellipse cx="65" cy="55" rx="60" ry="48" fill="url(#mitoRealistic)" stroke="#ea580c" stroke-width="2.5" filter="url(#shadow12)" />
    <!-- Inner convoluted cristae -->
    <path d="M 25 55 C 35 40, 50 40, 55 55 C 60 70, 75 70, 80 55 C 85 40, 100 40, 105 55" fill="none" stroke="#c2410c" stroke-width="3" stroke-linecap="round" />
    <path d="M 35 70 C 45 60, 55 60, 65 72 C 75 80, 85 80, 95 68" fill="none" stroke="#c2410c" stroke-width="2.5" stroke-linecap="round" />
    <rect x="25" y="42" width="80" height="24" rx="6" fill="#ffffff" opacity="0.85" />
    <text x="65" y="59" font-size="11" font-weight="900" fill="#9a3412" text-anchor="middle">세포소기관</text>
  </g>

  <!-- Product Arrows exiting Mitochondria -->
  <path d="M 360 95 L 390 75" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" />
  <polygon points="394,73 385,73 390,81" fill="#64748b" />

  <path d="M 360 115 L 390 115" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" />
  <polygon points="395,115 387,111 387,119" fill="#64748b" />

  <path d="M 360 135 L 390 155" stroke="#eab308" stroke-width="2.5" stroke-linecap="round" />
  <polygon points="394,158 390,150 385,158" fill="#eab308" />

  <!-- Right: Products -->
  <g transform="translate(400, 50)">
    <rect x="0" y="0" width="105" height="34" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
    <text x="52" y="22" font-size="11" font-weight="900" fill="#334155" text-anchor="middle">물질 (B)</text>

    <rect x="0" y="48" width="105" height="34" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
    <text x="52" y="70" font-size="11" font-weight="900" fill="#334155" text-anchor="middle">물질 (C)</text>

    <rect x="0" y="96" width="105" height="38" rx="6" fill="#fef9c3" stroke="#eab308" stroke-width="1.5" filter="url(#shadow12)" />
    <text x="52" y="115" font-size="11" font-weight="900" fill="#854d0e" text-anchor="middle">⚡ 에너지</text>
    <text x="52" y="128" font-size="9" fill="#a16207" text-anchor="middle">(생명 활동 이용)</text>
  </g>

  <!-- Clean Bottom Caption -->
  <text x="270" y="240" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">
    [그림] 세포 소기관에서 일어나는 물질 반응과 에너지 생성 과정
  </text>
</svg>`,
      options: [
        "광합성 - 녹말과 산소",
        "소화 작용 - 쓸개즙과 포도당",
        "세포 호흡 - 물, 이산화 탄소, 에너지",
        "배설 작용 - 암모니아와 단백질",
        "순환 작용 - 헤모글로빈과 적혈구"
      ],
      correctAnswerIndex: 2,
      explanation: "세포 호흡은 세포 내 미토콘드리아에서 영양소(포도당)를 산소로 분해하여 생명 활동에 필요한 에너지(체온 유지, 근육 운동, 생장 등)를 생산하는 과정입니다. 이때 부산물로 물과 이산화 탄소가 발생합니다.",
      chunjaeConcept: "천재교과서(정대홍) [세포 호흡 공식]: 포도당 + 산소 → 물 + 이산화 탄소 + 에너지!"
    },

    /* ---------------- PART 4: 동물과 에너지 > 4) 배설 ---------------- */
    {
      id: "q-13",
      number: 13,
      unit: "4. 동물과 에너지 > 4) 배설",
      question: "세포 호흡 결과 탄수화물, 지방, 단백질이 분해될 때 공통 노폐물 외에 '단백질'에서만 특별히 생성되는 독성 물질과, 이를 해독하여 독성이 약한 물질로 전환하는 인체 기관은?",
      diagramCaption: "[천재교과서 도식] 영양소 분해에 따른 노폐물 생성과 전환 경로",
      diagramSvg: `<svg viewBox="0 0 540 250" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow13" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.1" />
    </filter>
  </defs>
  <rect width="540" height="250" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Comparison Table -->
  <rect x="30" y="20" width="480" height="90" rx="10" fill="#ffffff" stroke="#cbd5e1" />
  <rect x="30" y="20" width="480" height="26" rx="10" fill="#f1f5f9" />
  <text x="110" y="38" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">영양소(구성 원소)</text>
  <text x="340" y="38" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">세포 호흡 후 생성되는 노폐물</text>
  <line x1="30" y1="46" x2="510" y2="46" stroke="#e2e8f0" />

  <text x="110" y="66" font-size="11" fill="#334155" text-anchor="middle">탄수화물, 지방 (C, H, O)</text>
  <text x="340" y="66" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">물, 이산화 탄소</text>
  <line x1="30" y1="78" x2="510" y2="78" stroke="#e2e8f0" />

  <rect x="31" y="79" width="478" height="30" fill="#fef2f2" opacity="0.6" />
  <text x="110" y="99" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">단백질 (C, H, O, N)</text>
  <text x="340" y="99" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">물, 이산화 탄소 + 물질 (A)</text>

  <!-- Conversion Flow -->
  <g transform="translate(40, 130)">
    <!-- Substance A -->
    <rect x="0" y="10" width="115" height="48" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2" filter="url(#shadow13)" />
    <text x="57" y="32" font-size="12" font-weight="900" fill="#b91c1c" text-anchor="middle">물질 (A)</text>
    <text x="57" y="48" font-size="9" fill="#dc2626" text-anchor="middle">(독성 강함)</text>

    <!-- Arrow -->
    <path d="M 125 34 L 165 34" stroke="#ea580c" stroke-width="3" stroke-linecap="round" />
    <polygon points="170,34 162,30 162,38" fill="#ea580c" />

    <!-- Organ B -->
    <rect x="175" y="5" width="125" height="58" rx="10" fill="#ffedd5" stroke="#f97316" stroke-width="2" filter="url(#shadow13)" />
    <text x="237" y="30" font-size="12" font-weight="900" fill="#c2410c" text-anchor="middle">기관 (B)</text>
    <text x="237" y="48" font-size="10" font-weight="bold" fill="#ea580c" text-anchor="middle">해독 작용</text>

    <!-- Arrow -->
    <path d="M 310 34 L 350 34" stroke="#16a34a" stroke-width="3" stroke-linecap="round" />
    <polygon points="355,34 347,30 347,38" fill="#16a34a" />

    <!-- Substance C & Kidney -->
    <rect x="360" y="10" width="115" height="48" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2" filter="url(#shadow13)" />
    <text x="417" y="32" font-size="12" font-weight="900" fill="#15803d" text-anchor="middle">물질 (C)</text>
    <text x="417" y="48" font-size="9" fill="#16a34a" text-anchor="middle">(독성 약함 ➔ 콩팥 배설)</text>
  </g>

  <!-- Clean Bottom Caption -->
  <text x="270" y="235" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">
    [그림] 단백질 분해 산물 (A)가 기관 (B)를 거쳐 (C)로 전환되는 과정
  </text>
</svg>`,
      options: [
        "암모니아 - 간에서 요소로 전환",
        "요소 - 콩팥에서 암모니아로 전환",
        "이산화 탄소 - 폐에서 산소로 전환",
        "포도당 - 이자에서 인슐린으로 전환",
        "지방산 - 쓸개에서 쓸개즙으로 전환"
      ],
      correctAnswerIndex: 0,
      explanation: "단백질에는 질소(N) 성분이 있어 세포 호흡 시 독성이 매우 강한 '암모니아'가 생성됩니다. 우리 몸은 암모니아를 혈액을 통해 '간'으로 운반하여 독성이 훨씬 약한 '요소'로 합성한 후, 혈액을 타고 콩팥으로 이동시켜 오줌으로 배설합니다.",
      chunjaeConcept: "천재교과서(정대홍) [배설과 노폐물]: 단백질 분해 → 독성 암모니아 → '간'에서 독성 약한 요소로 합성!"
    },
    {
      id: "q-14",
      number: 14,
      unit: "4. 동물과 에너지 > 4) 배설",
      question: "사람의 배설계 구조에 대한 설명으로 옳지 않은 것은?",
      diagramCaption: "[천재교과서 도식] 사람의 배설계 구조 (A ~ E)",
      diagramSvg: `<svg viewBox="0 0 540 270" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="kidneyShade" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991b1b" />
      <stop offset="50%" stop-color="#7f1d1d" />
      <stop offset="100%" stop-color="#450a0a" />
    </linearGradient>
    <linearGradient id="bladderShade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#facc15" />
    </linearGradient>
    <filter id="shadow14" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="3" flood-opacity="0.15" />
    </filter>
  </defs>
  <rect width="540" height="270" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Aorta (Red) & Vena Cava (Blue) -->
  <path d="M 255 20 L 255 195" stroke="#dc2626" stroke-width="12" stroke-linecap="round" />
  <path d="M 285 20 L 285 195" stroke="#2563eb" stroke-width="12" stroke-linecap="round" />

  <!-- Renal Artery & Vein Branches -->
  <path d="M 255 75 L 180 85" stroke="#dc2626" stroke-width="6" stroke-linecap="round" />
  <path d="M 285 85 L 360 85" stroke="#dc2626" stroke-width="6" stroke-linecap="round" />
  <path d="M 285 95 L 180 95" stroke="#2563eb" stroke-width="6" stroke-linecap="round" />
  <path d="M 285 95 L 360 95" stroke="#2563eb" stroke-width="6" stroke-linecap="round" />

  <!-- Left & Right Kidneys (Realistic Bean Shapes) -->
  <!-- Right Kidney (그림상 왼쪽) -->
  <path d="M 180 60 C 135 60, 120 90, 125 125 C 130 155, 165 160, 180 130 C 192 108, 192 80, 180 60 Z" fill="url(#kidneyShade)" stroke="#450a0a" stroke-width="1.5" filter="url(#shadow14)" />
  <!-- Left Kidney (그림상 오른쪽) -->
  <path d="M 360 50 C 405 50, 420 80, 415 115 C 410 145, 375 150, 360 120 C 348 98, 348 70, 360 50 Z" fill="url(#kidneyShade)" stroke="#450a0a" stroke-width="1.5" filter="url(#shadow14)" />

  <!-- Ureters (오줌관) -->
  <path d="M 165 130 Q 210 180 255 200" fill="none" stroke="#ca8a04" stroke-width="4.5" stroke-linecap="round" />
  <path d="M 375 120 Q 330 180 285 200" fill="none" stroke="#ca8a04" stroke-width="4.5" stroke-linecap="round" />

  <!-- Bladder (방광) -->
  <ellipse cx="270" cy="210" rx="32" ry="22" fill="url(#bladderShade)" stroke="#ca8a04" stroke-width="2" filter="url(#shadow14)" />
  
  <!-- Urethra (요도) -->
  <line x1="270" y1="232" x2="270" y2="252" stroke="#854d0e" stroke-width="5" stroke-linecap="round" />

  <!-- Neutral Labels A ~ E (No Spoilers!) -->
  <!-- Label A: 콩팥 -->
  <rect x="25" y="80" width="70" height="28" rx="6" fill="#ffffff" stroke="#991b1b" filter="url(#shadow14)" />
  <text x="60" y="98" font-size="12" font-weight="900" fill="#991b1b" text-anchor="middle">A</text>
  <line x1="95" y1="94" x2="135" y2="94" stroke="#991b1b" stroke-width="1.5" />

  <!-- Label B: 콩팥 동맥 -->
  <rect x="25" y="25" width="70" height="28" rx="6" fill="#ffffff" stroke="#dc2626" filter="url(#shadow14)" />
  <text x="60" y="43" font-size="12" font-weight="900" fill="#dc2626" text-anchor="middle">B</text>
  <line x1="95" y1="39" x2="210" y2="80" stroke="#dc2626" stroke-width="1.5" />

  <!-- Label C: 콩팥 정맥 -->
  <rect x="445" y="25" width="70" height="28" rx="6" fill="#ffffff" stroke="#2563eb" filter="url(#shadow14)" />
  <text x="480" y="43" font-size="12" font-weight="900" fill="#2563eb" text-anchor="middle">C</text>
  <line x1="445" y1="39" x2="330" y2="95" stroke="#2563eb" stroke-width="1.5" />

  <!-- Label D: 오줌관 -->
  <rect x="445" y="140" width="70" height="28" rx="6" fill="#ffffff" stroke="#ca8a04" filter="url(#shadow14)" />
  <text x="480" y="158" font-size="12" font-weight="900" fill="#854d0e" text-anchor="middle">D</text>
  <line x1="445" y1="154" x2="355" y2="154" stroke="#ca8a04" stroke-width="1.5" />

  <!-- Label E: 방광 -->
  <rect x="335" y="210" width="70" height="28" rx="6" fill="#ffffff" stroke="#ca8a04" filter="url(#shadow14)" />
  <text x="370" y="228" font-size="12" font-weight="900" fill="#854d0e" text-anchor="middle">E</text>
  <line x1="335" y1="224" x2="305" y2="215" stroke="#ca8a04" stroke-width="1.5" />

  <!-- Clean Bottom Caption -->
  <text x="270" y="263" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">
    [그림] 사람의 배설계 구조와 각 부위의 명칭 (A ~ E)
  </text>
</svg>`,
      options: [
        "콩팥은 등 쪽에 좌우 1개씩 강낭콩 모양으로 위치한다.",
        "콩팥으로 들어가는 콩팥 동맥의 혈액은 콩팥 정맥보다 요소 등 노폐물 농도가 높다.",
        "콩팥에서 생성된 오줌은 오줌관(수뇨관)을 통해 방광으로 이동하여 모인다.",
        "방광에 모인 오줌은 요도를 통해 몸 밖으로 배출된다.",
        "콩팥 정맥에 흐르는 혈액에는 요소가 콩팥 동맥보다 훨씬 많이 들어 있다."
      ],
      correctAnswerIndex: 4,
      explanation: "콩팥은 혈액 속의 노폐물을 걸러내는 정수기 역할을 합니다. 따라서 콩팥으로 들어가는 '콩팥 동맥'에는 요소 등 노폐물이 많고, 콩팥에서 여과되어 나오는 '콩팥 정맥'은 노폐물이 걸러져 우리 몸의 혈액 중 요소 농도가 가장 낮고 깨끗합니다.",
      chunjaeConcept: "천재교과서(정대홍) [콩팥과 혈액]: 콩팥 동맥(노폐물 많음) → 콩팥(여과) → 콩팥 정맥(노폐물 가장 적고 깨끗함)!"
    },
    {
      id: "q-15",
      number: 15,
      unit: "4. 동물과 에너지 > 4) 배설",
      question: "콩팥에서 오줌을 만드는 기능적 기본 단위를 '네프론(Nephron)'이라고 합니다. 네프론을 구성하는 3가지 구조물이 바르게 짝지어진 것은?",
      diagramCaption: "[천재교과서 도식] 콩팥의 기본 단위인 네프론의 구조 (A, B, C)",
      diagramSvg: `<svg viewBox="0 0 540 270" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow15" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2.5" flood-opacity="0.12" />
    </filter>
  </defs>
  <rect width="540" height="270" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Glomerulus & Bowman's Capsule Area -->
  <g transform="translate(60, 45)">
    <!-- Arterioles -->
    <path d="M 0 50 L 50 70" stroke="#dc2626" stroke-width="6" stroke-linecap="round" />
    <path d="M 50 85 L 0 105" stroke="#dc2626" stroke-width="5" stroke-linecap="round" />
    <text x="5" y="42" font-size="10" fill="#dc2626" font-weight="bold">혈관 유입</text>

    <!-- Capillary Tangle (A: 사구체) -->
    <circle cx="75" cy="80" r="28" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
    <path d="M 60 70 Q 75 95 90 70 Q 75 60 65 85 Q 85 85 85 70" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round" />

    <!-- Bowman's Capsule (B: 보먼주머니) -->
    <path d="M 55 45 C 115 45, 125 115, 55 115" fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
    <path d="M 55 52 C 105 52, 115 108, 55 108" fill="none" stroke="#7dd3fc" stroke-width="2" />

    <!-- Labels A & B -->
    <rect x="25" y="0" width="80" height="26" rx="6" fill="#ffffff" stroke="#dc2626" filter="url(#shadow15)" />
    <text x="65" y="18" font-size="12" font-weight="900" fill="#b91c1c" text-anchor="middle">A</text>
    <line x1="65" y1="26" x2="65" y2="52" stroke="#dc2626" stroke-width="1.5" />

    <rect x="125" y="115" width="80" height="26" rx="6" fill="#ffffff" stroke="#0284c7" filter="url(#shadow15)" />
    <text x="165" y="133" font-size="12" font-weight="900" fill="#0369a1" text-anchor="middle">B</text>
    <line x1="135" y1="115" x2="105" y2="95" stroke="#0284c7" stroke-width="1.5" />
  </g>

  <!-- Convoluted Tubule (C: 세뇨관) -->
  <path d="M 165 120 Q 210 150 250 105 Q 290 60 330 115 Q 360 165 400 125 L 435 125" fill="none" stroke="#eab308" stroke-width="11" stroke-linecap="round" />
  <!-- Capillary Net over Tubule -->
  <path d="M 175 120 Q 220 160 260 115 Q 300 70 340 125 Q 370 175 410 135" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="5,2" />

  <!-- Label C -->
  <rect x="255" y="180" width="80" height="26" rx="6" fill="#ffffff" stroke="#ca8a04" filter="url(#shadow15)" />
  <text x="295" y="198" font-size="12" font-weight="900" fill="#854d0e" text-anchor="middle">C</text>
  <line x1="295" y1="180" x2="295" y2="130" stroke="#ca8a04" stroke-width="1.5" />

  <!-- Collecting Duct (집합관) -->
  <path d="M 435 30 L 435 210" stroke="#ca8a04" stroke-width="14" stroke-linecap="round" />
  <text x="435" y="120" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle" transform="rotate(90, 435, 120)">집합관</text>
  <text x="435" y="235" font-size="10" font-weight="bold" fill="#713f12" text-anchor="middle">➔ 콩팥 깔때기</text>

  <!-- Clean Bottom Caption without equation answers -->
  <text x="240" y="245" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">
    [그림] 콩팥에서 오줌을 만드는 기본 단위의 구조 (A, B, C)
  </text>
</svg>`,
      options: [
        "사구체, 보먼주머니, 세뇨관",
        "콩팥 깔때기, 수뇨관, 방광",
        "사구체, 콩팥 겉질, 요도",
        "보먼주머니, 모세혈관, 방광",
        "세뇨관, 콩팥 동맥, 수뇨관"
      ],
      correctAnswerIndex: 0,
      explanation: "콩팥 1개에는 약 100만 개의 네프론이 존재합니다. 네프론은 모세혈관이 털 뭉치처럼 꼬인 '사구체', 사구체를 감싸는 '보먼주머니', 그리고 보먼주머니와 연결된 가늘고 긴 관인 '세뇨관'의 3가지로 구성됩니다.",
      chunjaeConcept: "천재교과서(정대홍) [네프론의 정의]: 콩팥 1개당 약 100만 개, 네프론 = 사구체 + 보먼주머니 + 세뇨관!"
    },
    {
      id: "q-16",
      number: 16,
      unit: "4. 동물과 에너지 > 4) 배설",
      question: "네프론에서 일어나는 오줌 생성의 3단계 과정(여과, 재흡수, 분비)에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 오줌의 생성 3단계 과정 (가, 나, 다)",
      diagramSvg: `<svg viewBox="0 0 540 260" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow16" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2.5" flood-opacity="0.12" />
    </filter>
  </defs>
  <rect width="540" height="260" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Process 1: 여과 (사구체 -> 보먼주머니) -->
  <g transform="translate(25, 20)">
    <rect x="0" y="0" width="155" height="185" rx="12" fill="#ffffff" stroke="#93c5fd" stroke-width="2" filter="url(#shadow16)" />
    <rect x="0" y="0" width="155" height="28" rx="12" fill="#eff6ff" />
    <text x="77" y="19" font-size="12" font-weight="900" fill="#1d4ed8" text-anchor="middle">(가) 여과 (Filtration)</text>

    <text x="77" y="50" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">사구체 ➔ 보먼주머니</text>
    <text x="77" y="66" font-size="9" fill="#64748b" text-anchor="middle">(혈압 차이에 의한 이동)</text>

    <rect x="10" y="80" width="135" height="42" rx="6" fill="#f0fdf4" stroke="#86efac" />
    <text x="18" y="96" font-size="10" font-weight="bold" fill="#15803d">여과되는 물질:</text>
    <text x="18" y="112" font-size="9" fill="#166534">물, 포도당, 아미노산, 요소</text>

    <rect x="10" y="130" width="135" height="42" rx="6" fill="#fef2f2" stroke="#fca5a5" />
    <text x="18" y="146" font-size="10" font-weight="bold" fill="#b91c1c">여과되지 않는 물질:</text>
    <text x="18" y="162" font-size="9" font-weight="bold" fill="#dc2626">단백질, 혈구 등 거대 분자</text>
  </g>

  <!-- Process 2: 재흡수 (세뇨관 -> 모세혈관) -->
  <g transform="translate(192, 20)">
    <rect x="0" y="0" width="165" height="185" rx="12" fill="#ffffff" stroke="#86efac" stroke-width="2" filter="url(#shadow16)" />
    <rect x="0" y="0" width="165" height="28" rx="12" fill="#f0fdf4" />
    <text x="82" y="19" font-size="12" font-weight="900" fill="#15803d" text-anchor="middle">(나) 재흡수 (Reabsorption)</text>

    <text x="82" y="50" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">세뇨관 ➔ 모세혈관</text>
    <text x="82" y="66" font-size="9" fill="#64748b" text-anchor="middle">(몸에 필요한 물질 회수)</text>

    <rect x="10" y="80" width="145" height="42" rx="6" fill="#fefce8" stroke="#fde047" stroke-width="1.5" />
    <text x="18" y="96" font-size="10" font-weight="bold" fill="#a16207">주요 회수 물질:</text>
    <text x="18" y="112" font-size="9" font-weight="bold" fill="#b45309">포도당, 아미노산 등</text>

    <rect x="10" y="130" width="145" height="42" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
    <text x="18" y="146" font-size="10" font-weight="bold" fill="#334155">필요량 조절 흡수:</text>
    <text x="18" y="162" font-size="9" fill="#475569">물, 무기염류 등</text>
  </g>

  <!-- Process 3: 분비 (모세혈관 -> 세뇨관) -->
  <g transform="translate(370, 20)">
    <rect x="0" y="0" width="145" height="185" rx="12" fill="#ffffff" stroke="#fde047" stroke-width="2" filter="url(#shadow16)" />
    <rect x="0" y="0" width="145" height="28" rx="12" fill="#fefce8" />
    <text x="72" y="19" font-size="12" font-weight="900" fill="#a16207" text-anchor="middle">(다) 분비 (Secretion)</text>

    <text x="72" y="50" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">모세혈관 ➔ 세뇨관</text>
    <text x="72" y="66" font-size="9" fill="#64748b" text-anchor="middle">(미처 여과 안 된 노폐물)</text>

    <rect x="10" y="80" width="125" height="92" rx="6" fill="#fef2f2" stroke="#fecdd3" />
    <text x="18" y="105" font-size="10" font-weight="bold" fill="#b91c1c">분비 작용:</text>
    <text x="18" y="125" font-size="9" fill="#7f1d1d">혈액에 남아 있는</text>
    <text x="18" y="142" font-size="9" fill="#7f1d1d">노폐물(요소 등)을</text>
    <text x="18" y="159" font-size="9" fill="#7f1d1d">세뇨관으로 내보냄</text>
  </g>

  <!-- Clean Bottom Caption -->
  <text x="270" y="242" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">
    [그림] 네프론에서 일어나는 오줌 생성 3단계 과정 (가: 여과, 나: 재흡수, 다: 분비)
  </text>
</svg>`,
      options: [
        "사구체에서 보먼주머니로 단백질과 적혈구가 대량 여과된다.",
        "건강한 사람의 세뇨관에서는 포도당과 아미노산이 모세혈관으로 100% 재흡수된다.",
        "오줌 속에 포도당이 다량 검출되는 것은 지극히 정상적인 상태이다.",
        "분비는 세뇨관의 영양소가 모세혈관으로 돌아가는 과정이다.",
        "여과는 에너지를 소모하여 큰 물질을 억지로 밀어 넣는 작용이다."
      ],
      correctAnswerIndex: 1,
      explanation: "크기가 큰 단백질과 혈구는 사구체에서 여과되지 않습니다. 여과된 여과액 속의 포도당과 아미노산은 몸에 꼭 필요한 영양소이므로 세뇨관을 지나는 동안 모세혈관으로 100% 재흡수되어 정상인의 오줌에는 검출되지 않습니다.",
      chunjaeConcept: "천재교과서(정대홍) [오줌 생성 3과정]: 여과(크기 차이, 단백질/혈구 제외) → 재흡수(포도당/아미노산 100%) → 분비!"
    },
    {
      id: "q-17",
      number: 17,
      unit: "4. 동물과 에너지 > 4) 배설",
      question: "우리 몸에서 생명 활동에 필요한 에너지를 얻기 위해 소화계, 순환계, 호흡계, 배설계가 상호작용하는 원리에 대한 설명으로 옳지 않은 것은?",
      diagramCaption: "[천재교과서 도식] 기관계의 통합적 상호작용",
      diagramSvg: `<svg viewBox="0 0 540 260" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow17" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="3" flood-opacity="0.12" />
    </filter>
  </defs>
  <rect width="540" height="260" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Center: Circulatory System (순환계) -->
  <g transform="translate(195, 65)" filter="url(#shadow17)">
    <circle cx="75" cy="65" r="50" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" />
    <text x="75" y="60" font-size="13" font-weight="900" fill="#991b1b" text-anchor="middle">순환계</text>
    <text x="75" y="78" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">물질 운반</text>
  </g>

  <!-- Top: Respiratory System (호흡계) -->
  <g transform="translate(195, 10)">
    <rect x="0" y="0" width="150" height="42" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
    <text x="75" y="18" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">호흡계</text>
    <text x="75" y="32" font-size="9" fill="#0284c7" text-anchor="middle">O₂ 흡수 / CO₂ 배출</text>
  </g>
  <line x1="270" y1="52" x2="270" y2="65" stroke="#0284c7" stroke-width="3" stroke-linecap="round" />

  <!-- Left: Digestive System (소화계) -->
  <g transform="translate(20, 85)">
    <rect x="0" y="0" width="140" height="50" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
    <text x="70" y="20" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">소화계</text>
    <text x="70" y="36" font-size="9" fill="#a16207" text-anchor="middle">음식물 소화 ➔ 영양소 흡수</text>
  </g>
  <line x1="160" y1="110" x2="195" y2="110" stroke="#ca8a04" stroke-width="3" stroke-linecap="round" />

  <!-- Right: Excretory System (배설계) -->
  <g transform="translate(380, 85)">
    <rect x="0" y="0" width="140" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
    <text x="70" y="20" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">배설계</text>
    <text x="70" y="36" font-size="9" fill="#166534" text-anchor="middle">노폐물(요소 등) 배출</text>
  </g>
  <line x1="345" y1="110" x2="380" y2="110" stroke="#16a34a" stroke-width="3" stroke-linecap="round" />

  <!-- Bottom: Body Tissue Cells (온몸의 조직 세포) -->
  <g transform="translate(170, 195)">
    <rect x="0" y="0" width="200" height="42" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2" filter="url(#shadow17)" />
    <text x="100" y="18" font-size="12" font-weight="900" fill="#92400e" text-anchor="middle">온몸의 조직 세포</text>
    <text x="100" y="34" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">에너지 생성 (세포 호흡)</text>
  </g>
  <line x1="270" y1="165" x2="270" y2="195" stroke="#d97706" stroke-width="3" stroke-linecap="round" />

  <text x="270" y="252" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">
    [그림] 생명 유지를 위한 기관계 간의 통합적 상호작용
  </text>
</svg>`,
      options: [
        "소화계는 음식물 속 영양소를 세포가 흡수할 수 있는 크기로 소화하여 흡수한다.",
        "호흡계는 산소를 흡수하고 세포 호흡 결과 발생한 이산화 탄소를 몸 밖으로 내보낸다.",
        "순환계는 소화계에서 흡수한 영양소와 호흡계에서 얻은 산소를 온몸의 조직 세포로 운반한다.",
        "배설계는 세포 호흡 결과 생긴 요소 등의 노폐물을 걸러 몸 밖으로 배출한다.",
        "각 기관계는 서로 독립적으로만 작동하며 물질을 주고받는 상호작용은 전혀 하지 않는다."
      ],
      correctAnswerIndex: 4,
      explanation: "소화계, 호흡계, 순환계, 배설계는 독립적인 것이 아니라, '순환계'를 중심으로 긴밀하게 연결되어 세포에 필요한 영양소와 산소를 공급하고 노폐물을 배출하는 통합적 작용을 수행합니다.",
      chunjaeConcept: "천재교과서(정대홍) [기관계의 통합 작용]: 소화계(영양소) + 호흡계(산소) + 순환계(운반) + 배설계(노폐물 배출)!"
    },

    /* ---------------- PART 5: 식물과 에너지 > 1) 광합성 ---------------- */
    {
      id: "q-18",
      number: 18,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "다음 그림은 식물 잎의 단면 구조를 나타낸 것이다. 기둥 모양 세포들이 빽빽하게 배열되어 있고 엽록체가 가장 많아 광합성이 가장 왕성하게 일어나는 곳(A)의 이름은?",
      diagramCaption: "[천재교과서 도식] 잎의 내부 단면 구조",
      diagramImageUrl: "/mock-exam/q-17.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <rect x="50" y="42" width="260" height="40" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
        <text x="180" y="66" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">A: 울타리 조직 (세포 빽빽, 엽록체 최다)</text>
      </svg>`,
      options: [
        "표피 조직",
        "울타리 조직",
        "해면 조직",
        "기공",
        "물관"
      ],
      correctAnswerIndex: 1,
      explanation: "잎의 상표피 바로 아래에 위치한 '울타리 조직'은 원통형 세포들이 빽빽하게 울타리처럼 배열되어 있으며, 엽록체를 가장 많이 함유하고 있어 광합성이 가장 활발하게 일어납니다.",
      chunjaeConcept: "천재교과서(정대홍) [잎의 구조와 광합성]: 울타리 조직(엽록체 최다, 광합성 가장 활발)!"
    },
    {
      id: "q-19",
      number: 19,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "광합성에 필요한 원료와 광합성 결과 생성되는 산물을 나타낸 식이다. 기호 ㉠, ㉡, ㉢에 들어갈 물질로 옳은 것은?",
      diagramCaption: "[천재교과서 반응식] 광합성의 기본 화학 반응",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <text x="80" y="60" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">물 + ㉠</text>
        <path d="M 125 55 L 195 55" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
        <text x="160" y="45" font-size="10" font-weight="bold" fill="#ea580c" text-anchor="middle">빛에너지 (엽록체)</text>
        <text x="260" y="60" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">㉡ + ㉢</text>
      </svg>`,
      options: [
        "㉠ 산소, ㉡ 이산화 탄소, ㉢ 포도당",
        "㉠ 이산화 탄소, ㉡ 포도당, ㉢ 산소",
        "㉠ 질소, ㉡ 녹말, ㉢ 물",
        "㉠ 이산화 탄소, ㉡ 물, ㉢ 질소",
        "㉠ 산소, ㉡ 녹말, ㉢ 이산화 탄소"
      ],
      correctAnswerIndex: 1,
      explanation: "광합성은 뿌리에서 흡수한 '물'과 기공으로 들어온 '이산화 탄소(㉠)'를 원료로, 빛에너지를 이용하여 엽록체에서 최초 유기 양분인 '포도당(㉡)'과 '산소(㉢)'를 만듭니다.",
      chunjaeConcept: "천재교과서(정대홍) [광합성 공식]: 물 + 이산화 탄소 + 빛에너지 → 포도당 + 산소!"
    },
    {
      id: "q-20",
      number: 20,
      unit: "5. 식물과 에너지 > 1) 광합성",
      question: "검정말을 넣은 시험관에 1% 탄산수소 나트륨 수용액을 넣고 전등과의 거리를 조절하며 발생하는 기포 수를 측정하였다. 이에 대한 설명으로 옳지 않은 것은?",
      diagramCaption: "[천재교과서 탐구] 빛의 세기와 광합성 기포 발생",
      diagramImageUrl: "/mock-exam/q-20.jpg",
      diagramSvg: `<svg viewBox="0 0 360 160" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="160" fill="#f8fafc" rx="12" />
        <circle cx="60" cy="80" r="25" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="60" y="85" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">전등</text>
        <line x1="95" y1="120" x2="250" y2="120" stroke="#64748b" stroke-width="2"/>
        <text x="170" y="135" font-size="10" fill="#475569" text-anchor="middle">거리 조절</text>
        <rect x="260" y="25" width="40" height="100" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
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
      explanation: "광합성에 관여하는 효소는 단백질로 이루어져 있어 45℃ 이상의 고온에서는 열변성을 일으켜 파괴됩니다. 온도가 60℃ 이상으로 올라가면 광합성이 급격히 멈추어 기포 발생이 거의 일어나지 않게 됩니다.",
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
        <g transform="translate(30, 20)">
          <line x1="20" y1="110" x2="130" y2="110" stroke="#334155" stroke-width="1.5"/>
          <line x1="20" y1="110" x2="20" y2="20" stroke="#334155" stroke-width="1.5"/>
          <path d="M 20 110 Q 50 40 120 40" stroke="#2563eb" stroke-width="3" fill="none"/>
          <text x="75" y="130" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">(가) 수평 유지</text>
        </g>
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
      explanation: "(가)는 빛의 세기 또는 이산화 탄소 농도로, 증가함에 따라 광합성량이 증가하다가 일정 수준(포화점) 이후에는 일정하게 유지됩니다. (나)는 온도로, 약 35~40℃에서 최고점을 찍고 그 이상에서는 급격히 떨어지는 '종 모양' 곡선입니다.",
      chunjaeConcept: "천재교과서(정대홍) [그래프 판별법]: 포화 후 수평은 빛/CO2농도, 산 모양(종 모양)은 온도!"
    },

    /* ---------------- PART 6: 식물과 에너지 > 2) 식물의 호흡과 광합성산물 ---------------- */
    {
      id: "q-22",
      number: 22,
      unit: "5. 식물과 에너지 > 2) 식물의 호흡과 광합성산물",
      question: "다음 그림은 식물 잎 뒷면의 기공을 둘러싸고 있는 '공변세포'의 구조와 기공이 열리는 원리를 나타낸 것이다. 기공이 열리는 과정에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 기공과 공변세포의 구조 및 개폐 원리",
      diagramImageUrl: "/mock-exam/q-22.jpg",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <ellipse cx="130" cy="75" rx="18" ry="40" fill="#bbf7d0" stroke="#16a34a"/>
        <text x="130" y="130" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">[기공 닫힘 (밤)]</text>
        <ellipse cx="230" cy="75" rx="18" ry="40" fill="#86efac" stroke="#15803d"/>
        <text x="230" y="130" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">[기공 열림 (낮)]</text>
      </svg>`,
      options: [
        "공변세포는 표피세포와 달리 엽록체가 전혀 없어 광합성을 하지 못한다.",
        "공변세포가 물을 흡수하여 팽창할 때, 안쪽 세포벽이 바깥쪽보다 두꺼워 바깥쪽으로 휘어지며 기공이 열린다.",
        "기공은 주로 밤에 활짝 열리고 낮에는 완전히 닫힌다.",
        "공변세포에서 물이 빠져나가 쭈그러들 때 기공이 활짝 열린다.",
        "기공을 통해 산소만 드나들며 이산화 탄소와 수증기는 통과하지 못한다."
      ],
      correctAnswerIndex: 1,
      explanation: "공변세포는 엽록체가 있어 광합성을 합니다. 낮에 수분을 흡수하여 팽창할 때, 기공을 마주 보는 '안쪽 세포벽'이 바깥쪽보다 두껍기 때문에 바깥쪽이 더 많이 늘어나 활처럼 휘어지며 기공이 열립니다.",
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
        <rect x="50" y="30" width="30" height="90" rx="6" fill="#fef9c3"/>
        <text x="65" y="135" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">A (황색)</text>
        <rect x="160" y="30" width="30" height="90" rx="6" fill="#bae6fd"/>
        <text x="175" y="135" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">B (청색★)</text>
        <rect x="270" y="30" width="30" height="90" rx="6" fill="#64748b"/>
        <text x="285" y="135" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">C (황색)</text>
      </svg>`,
      options: [
        "검정말이 호흡을 하여 이산화 탄소를 방출했기 때문이다.",
        "빛에 의해 BTB 용액 속의 산소가 모두 증발했기 때문이다.",
        "검정말이 광합성을 활발히 진행하여 용액 속의 이산화 탄소를 대량 흡수(소모)했기 때문이다.",
        "알루미늄박이 빛을 흡수하여 온도를 낮추었기 때문이다.",
        "물 속의 수소 이온 농도가 급격히 높아져 강산성이 되었기 때문이다."
      ],
      correctAnswerIndex: 2,
      explanation: "BTB 용액은 이산화 탄소가 녹으면 산성(노란색), 이산화 탄소가 줄어들면 염기성(파란색)을 띱니다. 시험관 B는 검정말이 빛을 받아 광합성을 활발히 하여 용액 속 이산화 탄소를 대량 소모했으므로 파란색으로 변합니다.",
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
      explanation: "식물의 세포 호흡은 생명을 유지하기 위한 에너지 생산 과정이므로 낮과 밤 상관없이 24시간 내내 끊임없이 일어납니다. 낮에는 광합성량이 호흡량보다 훨씬 많아 겉보기에 이산화 탄소를 흡수하고 산소를 방출하는 것처럼 보일 뿐입니다.",
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
      explanation: "낮 동안 엽록체에 녹말로 저장되었던 양분은 밤이 되면 물에 잘 녹는 작은 분자인 '설탕'으로 분해(전환)되어 줄기 바깥쪽의 '체관'을 타고 뿌리, 줄기, 열매 등으로 이동합니다.",
      chunjaeConcept: "천재교과서(정대홍) [광합성 산물의 이동과 저장]: 밤에 물에 녹는 설탕으로 전환되어 체관을 통해 이동!"
    }
  ]
};
