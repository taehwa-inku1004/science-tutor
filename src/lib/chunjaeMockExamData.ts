import { MockExam } from "@/types/mockExam";

export const CHUNJAE_FINAL_MOCK_EXAM: MockExam = {
  id: "chunjae-exam-2026-final",
  title: "중2 과학 기말고사 최종 모의고사 (25제)",
  subtitle: "오답노트 등록 핵심 개념 100% 반영 • 천재교육 교과서 표준 문항",
  textbook: "천재교육 중학교 2학년 과학",
  totalQuestions: 25,
  timeLimitMinutes: 45,
  createdAt: "2026-09-27T00:00:00.000Z",
  questions: [
    {
      id: "q-1",
      number: 1,
      unit: "동물과 에너지 > 순환",
      question: "다음 그림은 사람의 심장 구조와 연결된 혈관을 나타낸 모식도이다. 산소가 가장 풍부한 '동맥혈'이 흐르는 구간만을 옳게 짝지은 것은?",
      diagramCaption: "[천재교과서 도식] 심장의 구조 및 연결 혈관",
      diagramSvg: `<svg viewBox="0 0 360 220" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="220" fill="#f8fafc" rx="12" />
        <!-- Heart background outline -->
        <path d="M 120 70 C 120 40, 180 40, 180 80 C 180 40, 240 40, 240 70 C 240 130, 180 180, 180 190 C 180 180, 120 130, 120 70 Z" fill="#fee2e2" stroke="#e11d48" stroke-width="2"/>
        <line x1="180" y1="60" x2="180" y2="185" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
        <line x1="135" y1="120" x2="225" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
        <!-- Chambers -->
        <text x="150" y="95" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">우심방 (A)</text>
        <text x="210" y="95" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">좌심방 (B)</text>
        <text x="150" y="150" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">우심실 (C)</text>
        <text x="210" y="150" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">좌심실 (D)</text>
        <!-- Blood vessels -->
        <path d="M 210 80 L 210 25" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/>
        <text x="255" y="28" font-size="11" font-weight="bold" fill="#b91c1c">폐정맥 (가)</text>
        <path d="M 220 135 L 290 80" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
        <text x="300" y="75" font-size="11" font-weight="bold" fill="#991b1b">대동맥 (나)</text>
        <path d="M 140 80 L 80 40" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
        <text x="40" y="38" font-size="11" font-weight="bold" fill="#1d4ed8">대정맥 (다)</text>
        <path d="M 140 135 L 75 110" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
        <text x="35" y="115" font-size="11" font-weight="bold" fill="#1e40af">폐동맥 (라)</text>
      </svg>`,
      options: [
        "A(우심방), C(우심실), (라)폐동맥",
        "(다)대정맥, A(우심방), (라)폐동맥",
        "(가)폐정맥, B(좌심방), D(좌심실), (나)대동맥",
        "(가)폐정맥, C(우심실), (나)대동맥",
        "(다)대정맥, B(좌심방), (라)폐동맥"
      ],
      correctAnswerIndex: 2,
      explanation: "폐에서 산소를 공급받은 혈액은 (가)폐정맥을 거쳐 좌심방(B)으로 들어온 뒤 좌심실(D)의 강한 수축으로 (나)대동맥을 통해 온몸으로 나갑니다. 따라서 동맥혈이 흐르는 곳은 (가), B, D, (나)입니다.",
      chunjaeConcept: "천재교과서 154~156쪽 [심장의 구조와 혈액 순환]: 폐정맥, 좌심방, 좌심실, 대동맥 라인은 산소가 풍부한 동맥혈!"
    },
    {
      id: "q-2",
      number: 2,
      unit: "동물과 에너지 > 소화",
      question: "다음은 침 속의 소화 효소(아밀레이스)에 의한 녹말의 소화 실험을 나타낸 것이다. 시험관 A~D 중 아이오딘-아이오딘화 칼륨 용액을 떨어뜨렸을 때 청람색으로 변하지 않고 황갈색을 유지하는(녹말이 완전히 분해된) 시험관은?",
      diagramCaption: "[천재교과서 실험] 온도와 소화 효소의 작용",
      diagramSvg: `<svg viewBox="0 0 360 190" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="190" fill="#f8fafc" rx="12" />
        <!-- Test tubes A, B, C, D -->
        <g transform="translate(30, 20)">
          <rect x="10" y="20" width="30" height="90" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
          <rect x="10" y="65" width="30" height="45" rx="10" fill="#bae6fd" opacity="0.8"/>
          <text x="25" y="130" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
          <text x="25" y="145" font-size="10" fill="#475569" text-anchor="middle">녹말+침</text>
          <text x="25" y="160" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">37℃</text>
        </g>
        <g transform="translate(110, 20)">
          <rect x="10" y="20" width="30" height="90" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
          <rect x="10" y="65" width="30" height="45" rx="10" fill="#bae6fd" opacity="0.8"/>
          <text x="25" y="130" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
          <text x="25" y="145" font-size="10" fill="#475569" text-anchor="middle">녹말+침</text>
          <text x="25" y="160" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">100℃ 가열</text>
        </g>
        <g transform="translate(190, 20)">
          <rect x="10" y="20" width="30" height="90" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
          <rect x="10" y="65" width="30" height="45" rx="10" fill="#bae6fd" opacity="0.8"/>
          <text x="25" y="130" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
          <text x="25" y="145" font-size="10" fill="#475569" text-anchor="middle">녹말+물</text>
          <text x="25" y="160" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">37℃</text>
        </g>
        <g transform="translate(270, 20)">
          <rect x="10" y="20" width="30" height="90" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
          <rect x="10" y="65" width="30" height="45" rx="10" fill="#bae6fd" opacity="0.8"/>
          <text x="25" y="130" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">D</text>
          <text x="25" y="145" font-size="10" fill="#475569" text-anchor="middle">녹말+침</text>
          <text x="25" y="160" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">0℃ (얼음)</text>
        </g>
      </svg>`,
      options: [
        "시험관 A",
        "시험관 B",
        "시험관 C",
        "시험관 D",
        "시험관 B와 C"
      ],
      correctAnswerIndex: 0,
      explanation: "소화 효소는 체온 범위(35~40℃)에서 가장 활발히 작용합니다. 시험관 A(37℃)에서 아밀레이스가 녹말을 엿당으로 모두 분해하므로 녹말이 사라져 아이오딘 반응 시 청람색이 나타나지 않고 황갈색을 띱니다. B는 고온으로 효소가 파괴되었고, C는 효소가 없으며, D는 저온으로 활성이 억제되어 녹말이 그대로 남아 청람색을 띱니다.",
      chunjaeConcept: "천재교과서 142~143쪽 [탐구: 침에 의한 녹말의 소화]: 체온 범위(37℃)에서 활성화, 100℃에서는 변성되어 파괴!"
    },
    {
      id: "q-3",
      number: 3,
      unit: "동물과 에너지 > 소화",
      question: "다음 그림은 간에서 생성된 쓸개즙이 십이지장으로 분비되어 지방에 작용하는 모습을 나타낸 것이다. 쓸개즙의 작용에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 쓸개즙에 의한 지방의 소화 보조 작용",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Big lipid drop -->
        <circle cx="90" cy="85" r="45" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="90" y="85" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">큰 지방 덩어리</text>
        <!-- Arrow with bile acid -->
        <path d="M 155 85 L 205 85" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
        <polygon points="210,85 200,80 200,90" fill="#16a34a"/>
        <text x="180" y="70" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">쓸개즙 작용</text>
        <!-- Small droplets -->
        <circle cx="250" cy="65" r="16" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="285" cy="75" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="260" cy="105" r="18" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="300" cy="110" r="13" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="275" y="150" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">작은 지방 알갱이들</text>
      </svg>`,
      options: [
        "쓸개즙에는 지방 분해 효소인 라이페이스가 다량 포함되어 있다.",
        "쓸개즙은 지방을 지방산과 모노글리세리드로 화학적으로 최종 분해한다.",
        "쓸개즙은 소화 효소는 없으나, 지방을 잘게 쪼개어 효소와의 접촉 면적을 넓힌다.",
        "쓸개즙은 쓸개에서 합성되어 간에 저장된 후 위장으로 분비된다.",
        "쓸개즙은 위에서 분비되는 강한 염산을 중화시키지 못한다."
      ],
      correctAnswerIndex: 2,
      explanation: "쓸개즙은 간에서 생성되어 쓸개에 저장되었다가 십이지장으로 분비됩니다. 쓸개즙 자체에는 소화 효소가 전혀 없지만, 큰 지방 덩어리를 작은 알갱이로 유화(물리적 소화)시켜 이자액 속 라이페이스의 소화 작용을 크게 돕습니다.",
      chunjaeConcept: "천재교과서 146쪽 [쓸개즙의 특징]: 효소 없음! 간 생성→쓸개 저장→십이지장 분비, 지방의 유화 작용!"
    },
    {
      id: "q-4",
      number: 4,
      unit: "식물과 에너지 > 식물의 줄기",
      question: "다음 그림과 같이 살아있는 나무줄기의 껍질 부분을 고리 모양으로 둥글게 벗겨내는 '환상 박피' 실험을 진행하였다. 일정 시간이 흐른 후 나타나는 변화와 그 까닭을 바르게 설명한 것은?",
      diagramCaption: "[천재교과서 탐구] 줄기의 껍질을 벗겼을 때의 변화",
      diagramSvg: `<svg viewBox="0 0 360 200" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="200" fill="#f8fafc" rx="12" />
        <!-- Trunk -->
        <rect x="140" y="15" width="80" height="60" fill="#d97706" rx="4"/>
        <rect x="155" y="75" width="50" height="40" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
        <text x="230" y="98" font-size="11" font-weight="bold" fill="#b45309">껍질 벗겨낸 부위</text>
        <rect x="140" y="115" width="80" height="65" fill="#d97706" rx="4"/>
        <!-- Swelling upper trunk -->
        <path d="M 130 65 Q 120 75 140 75 L 220 75 Q 240 75 230 65 Z" fill="#b45309"/>
        <text x="75" y="65" font-size="12" font-weight="bold" fill="#dc2626">윗부분이 부풀어 오름 (A) ➔</text>
        <text x="180" y="45" font-size="11" fill="#ffffff" font-weight="bold" text-anchor="middle">잎에서 만든 양분 이동 ↓</text>
      </svg>`,
      options: [
        "줄기 바깥쪽의 물관이 잘려 물이 이동하지 못해 윗부분이 마른다.",
        "줄기 바깥쪽의 체관이 제거되어 잎에서 합성된 유기 양분이 아래로 내려가지 못하고 위쪽에 축적되어 부풀어 오른다.",
        "줄기 안쪽의 체관이 잘려 뿌리에서 흡수한 무기 양분이 아래쪽에 고인다.",
        "형성층이 제거되어 줄기의 부피 생장이 위아래 동일하게 즉시 멈춘다.",
        "뿌리 쪽으로 물 공급이 증가하여 아랫부분이 부풀어 오른다."
      ],
      correctAnswerIndex: 1,
      explanation: "나무줄기의 바깥쪽에는 잎에서 광합성으로 만든 유기 양분(포도당→설탕)이 이동하는 '체관'이 있습니다. 껍질을 벗기면 체관이 끊어지므로, 잎에서 뿌리로 내려가던 양분이 잘린 윗부분에 쌓여 불룩하게 부풀어 오릅니다. 안쪽의 물관은 손상되지 않아 물은 정상적으로 올라갑니다.",
      chunjaeConcept: "천재교과서 128~129쪽 [줄기의 관다발]: 안쪽은 물관(물 이동), 바깥쪽은 체관(유기 양분 이동)!"
    },
    {
      id: "q-5",
      number: 5,
      unit: "식물과 에너지 > 광합성",
      question: "다음 그래프는 식물이 충분한 빛과 이산화 탄소를 공급받으며 광합성을 왕성하게 진행하다가, 특정 환경 요인의 변화로 인해 나타난 광합성량의 변화 곡선이다. 이 그래프에 해당하는 환경 요인의 변화는?",
      diagramCaption: "[천재교과서 핵심 도표] 환경 요인과 광합성량",
      diagramSvg: `<svg viewBox="0 0 360 190" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="190" fill="#f8fafc" rx="12" />
        <!-- Axes -->
        <line x1="60" y1="150" x2="310" y2="150" stroke="#334155" stroke-width="2"/>
        <line x1="60" y1="150" x2="60" y2="25" stroke="#334155" stroke-width="2"/>
        <text x="315" y="155" font-size="11" fill="#334155">시간</text>
        <text x="50" y="20" font-size="11" fill="#334155" text-anchor="middle">광합성량</text>
        <!-- Curve: Horizontal at top then drops down -->
        <path d="M 60 45 L 180 45 Q 230 45 260 145" fill="none" stroke="#2563eb" stroke-width="4"/>
        <line x1="180" y1="45" x2="180" y2="150" stroke="#94a3b8" stroke-dasharray="3"/>
        <text x="180" y="165" font-size="10" fill="#64748b" text-anchor="middle">변화 시작점</text>
        <text x="120" y="35" font-size="11" font-weight="bold" fill="#1e40af">일정하게 유지되다가</text>
        <text x="260" y="85" font-size="11" font-weight="bold" fill="#dc2626">급격히 하강 ➔</text>
      </svg>`,
      options: [
        "빛의 세기가 점차 약해진다.",
        "빛의 세기가 0에서부터 점차 강해진다.",
        "이산화 탄소의 농도가 0에서부터 점차 증가한다.",
        "온도가 0℃에서부터 35℃까지 점차 상승한다.",
        "온도가 35℃에서 40℃로 소폭 상승한다."
      ],
      correctAnswerIndex: 0,
      explanation: "광합성량이 초기에 최고치로 일정하게 유지되다가 특정 시점 이후 급격히 떨어지는 그래프는, 이미 포화 상태(광포화점 또는 이산화 탄소 포화 농도)를 유지하던 상태에서 '빛의 세기가 약해지거나' '이산화 탄소 농도가 감소'할 때 나타납니다. 온도의 경우 0℃ 부근에서는 광합성이 거의 일어나지 않으므로 절대로 처음부터 최고치를 유지할 수 없습니다.",
      chunjaeConcept: "천재교과서 132~133쪽 [광합성에 영향을 미치는 요인]: 빛/CO2는 포화 후 일정, 감소 시 수평 후 급감!"
    },
    {
      id: "q-6",
      number: 6,
      unit: "동물과 에너지 > 호흡과 배설",
      question: "다음 그림은 우리 몸의 조직 세포에서 일어나는 세포 호흡 과정과 물질 대사 산물을 나타낸 것이다. 기호 ㉠과 ㉡에 들어갈 물질로 알맞게 짝지은 것은?",
      diagramCaption: "[천재교과서 도식] 세포 호흡과 노폐물의 생성",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Reactants -->
        <rect x="25" y="40" width="105" height="50" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
        <text x="77" y="60" font-size="11" font-weight="bold" fill="#312e81" text-anchor="middle">영양소(탄/단/지)</text>
        <text x="77" y="77" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">+ ㉠</text>
        <!-- Arrow Cell Respiration -->
        <path d="M 135 65 L 185 65" stroke="#4f46e5" stroke-width="3" stroke-linecap="round"/>
        <text x="160" y="55" font-size="10" font-weight="bold" fill="#4f46e5" text-anchor="middle">세포 호흡</text>
        <!-- Products -->
        <rect x="195" y="25" width="140" height="90" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="265" y="45" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">에너지 (생명활동/체온)</text>
        <text x="265" y="68" font-size="11" fill="#047857" text-anchor="middle">+ 물(H2O), 이산화탄소(CO2)</text>
        <text x="265" y="95" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">+ ㉡ (단백질 분해 산물)</text>
      </svg>`,
      options: [
        "㉠: 이산화 탄소, ㉡: 요소",
        "㉠: 산소, ㉡: 암모니아",
        "㉠: 산소, ㉡: 포도당",
        "㉠: 질소, ㉡: 암모니아",
        "㉠: 수증기, ㉡: 요산"
      ],
      correctAnswerIndex: 1,
      explanation: "세포 호흡은 영양소와 '산소(㉠)'가 반응하여 생명 활동에 필요한 에너지를 방출하고 물과 이산화 탄소, 그리고 단백질 분해 노폐물인 독성이 강한 '암모니아(㉡)'를 생성하는 과정입니다. 암모니아는 간으로 이동하여 독성이 적은 요소로 전환됩니다.",
      chunjaeConcept: "천재교과서 168~169쪽 [세포 호흡과 노폐물]: 반응물은 영양소+산소(㉠), 단백질 분해 노폐물은 암모니아(㉡)!"
    },
    {
      id: "q-7",
      number: 7,
      unit: "동물과 에너지 > 기관계의 통합적 작용",
      question: "다음 그림은 사람 몸의 여러 기관계가 상호 협력하여 생명을 유지하는 통합적 작용을 나타낸 것이다. 이에 대한 설명으로 옳지 않은 것은?",
      diagramCaption: "[천재교과서 핵심 모식도] 소화계, 순환계, 호흡계, 배설계의 통합적 작용",
      diagramSvg: `<svg viewBox="0 0 360 210" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="210" fill="#f8fafc" rx="12" />
        <!-- Center: Circulatory -->
        <circle cx="180" cy="105" r="38" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
        <text x="180" y="102" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">순환계</text>
        <text x="180" y="117" font-size="9" fill="#b91c1c" text-anchor="middle">(물질 운반 중심)</text>
        <!-- Top: Respiratory -->
        <rect x="135" y="15" width="90" height="35" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="180" y="37" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">호흡계 (폐)</text>
        <!-- Left: Digestive -->
        <rect x="25" y="85" width="85" height="40" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="67" y="110" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">소화계 (위/장)</text>
        <!-- Right: Excretory -->
        <rect x="250" y="85" width="85" height="40" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="292" y="110" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">배설계 (콩팥)</text>
        <!-- Bottom: Body cells -->
        <rect x="135" y="165" width="90" height="35" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="180" y="187" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">온몸의 세포</text>
        <!-- Connecting arrows -->
        <line x1="180" y1="50" x2="180" y2="67" stroke="#0284c7" stroke-width="2"/>
        <line x1="110" y1="105" x2="142" y2="105" stroke="#d97706" stroke-width="2"/>
        <line x1="218" y1="105" x2="250" y2="105" stroke="#9333ea" stroke-width="2"/>
        <line x1="180" y1="143" x2="180" y2="165" stroke="#16a34a" stroke-width="2"/>
      </svg>`,
      options: [
        "소화계는 음식물 속 영양소를 분해하여 순환계의 혈액으로 흡수시킨다.",
        "호흡계는 산소를 받아들여 순환계로 전달하고, 세포 호흡 결과 생성된 이산화 탄소를 몸 밖으로 배출한다.",
        "배설계는 혈액 속의 노폐물(요소 등)을 걸러내어 오줌의 형태로 체외로 내보낸다.",
        "순환계는 각 기관계를 연결하여 영양소, 산소, 노폐물을 운반하는 중추적 역할을 한다.",
        "소화되지 않고 대장을 거쳐 배출되는 대변(배변)은 배설계의 배설 작용에 해당한다."
      ],
      correctAnswerIndex: 4,
      explanation: "소화되지 않은 음식물 찌꺼기가 대장을 거쳐 항문으로 나가는 '배변(대변)'은 '소화계'의 작용입니다. 과학에서 말하는 '배설'은 세포 호흡 결과 생성된 노폐물(요소, 요산 등)을 콩팥을 통해 오줌으로 내보내는 과정만을 뜻합니다.",
      chunjaeConcept: "천재교과서 172~173쪽 [기관계의 통합적 작용 & 함정]: 대변 배출은 소화 작용! 오줌 배출만이 배설계의 배설!"
    },
    {
      id: "q-8",
      number: 8,
      unit: "식물과 에너지 > 식물의 호흡",
      question: "다음 그림은 낮과 밤 동안 식물 잎에서 일어나는 기체 교환을 나타낸 것이다. 이에 대한 설명으로 옳은 것만을 <보기>에서 모두 고른 것은?",
      diagramCaption: "[천재교과서 도식] 빛의 유무에 따른 식물의 기체 교환",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Day -->
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="135" height="130" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="67" y="25" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">[낮 (빛 있을 때)]</text>
          <text x="67" y="55" font-size="11" fill="#1e3a8a" text-anchor="middle">광합성량 &gt; 호흡량</text>
          <text x="67" y="80" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">CO2 흡수 ➔</text>
          <text x="67" y="105" font-size="10" font-weight="bold" fill="#059669" text-anchor="middle">O2 방출 ➔</text>
        </g>
        <!-- Night -->
        <g transform="translate(195, 20)">
          <rect x="0" y="0" width="135" height="130" rx="10" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5"/>
          <text x="67" y="25" font-size="12" font-weight="bold" fill="#6b21a8" text-anchor="middle">[밤 (빛 없을 때)]</text>
          <text x="67" y="55" font-size="11" fill="#581c87" text-anchor="middle">호흡만 진행</text>
          <text x="67" y="80" font-size="10" font-weight="bold" fill="#059669" text-anchor="middle">O2 흡수 ➔</text>
          <text x="67" y="105" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">CO2 방출 ➔</text>
        </g>
      </svg>`,
      options: [
        "ㄱ",
        "ㄴ",
        "ㄱ, ㄴ",
        "ㄱ, ㄷ",
        "ㄱ, ㄴ, ㄷ"
      ],
      correctAnswerIndex: 4,
      explanation: "식물의 호흡은 밤낮 상관없이 24시간 내내 모든 살아있는 세포에서 끊임없이 일어납니다. 낮에는 광합성량이 호흡량보다 훨씬 많아 겉보기에는 이산화 탄소를 흡수하고 산소를 방출하는 것처럼 보이며, 밤에는 광합성이 중단되어 호흡만 일어나므로 산소를 흡수하고 이산화 탄소를 방출합니다. ㄱ, ㄴ, ㄷ 모두 옳습니다.",
      chunjaeConcept: "천재교과서 136~137쪽 [식물의 호흡과 기체 교환]: 호흡은 24시간 항시 진행! 낮에는 광합성량이 커서 겉보기에 CO2 흡수/O2 방출!"
    },
    {
      id: "q-9",
      number: 9,
      unit: "식물과 에너지 > 광합성 산물",
      question: "다음은 잎에서 광합성으로 만들어진 최종 산물을 확인하는 실험 과정이다. 각 단계에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구 실험] 잎의 광합성 산물 확인",
      diagramSvg: `<svg viewBox="0 0 360 180" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="180" fill="#f8fafc" rx="12" />
        <!-- Step 1: Boiling water -->
        <g transform="translate(35, 20)">
          <rect x="0" y="20" width="70" height="70" rx="6" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
          <text x="35" y="60" font-size="10" fill="#334155" text-anchor="middle">끓는 물</text>
          <text x="35" y="110" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">1. 세포 죽이기</text>
        </g>
        <!-- Step 2: Ethanol water bath -->
        <g transform="translate(145, 20)">
          <rect x="0" y="10" width="70" height="80" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
          <rect x="15" y="25" width="40" height="50" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
          <text x="35" y="55" font-size="9" fill="#15803d" text-anchor="middle">에탄올</text>
          <text x="35" y="110" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">2. 물중탕 탈색</text>
        </g>
        <!-- Step 3: Iodine test -->
        <g transform="translate(255, 20)">
          <ellipse cx="35" cy="55" rx="30" ry="18" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="35" y="58" font-size="9" font-weight="bold" fill="#1e3a8a" text-anchor="middle">아이오딘액</text>
          <text x="35" y="110" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">3. 청람색 확인</text>
        </g>
        <text x="180" y="155" font-size="11" fill="#475569" text-anchor="middle">에탄올에 잎을 넣고 물중탕하는 주된 이유는 무엇인가?</text>
      </svg>`,
      options: [
        "잎 속의 녹말을 완전히 분해하기 위해서이다.",
        "초록색 엽록소를 녹여내어 아이오딘 반응의 색깔 변화(청람색)를 뚜렷하게 관찰하기 위해서이다.",
        "에탄올이 불에 타지 않으므로 직접 가열하여 온도를 100℃ 이상 올리기 위함이다.",
        "잎 속의 포도당을 녹말 형태로 전환시키기 위해서이다.",
        "잎의 표피에 존재하는 기공을 강제로 열기 위해서이다."
      ],
      correctAnswerIndex: 1,
      explanation: "에탄올은 잎 속의 초록색 색소인 '엽록소'를 녹여내는 성질이 있습니다. 엽록소를 탈색시켜 하얗게 만들어야 아이오딘-아이오딘화 칼륨 용액을 떨어뜨렸을 때 녹말에 의한 청람색 변화를 선명하게 관찰할 수 있습니다. 또한 에탄올은 인화성이 강해 직접 가열하면 불이 붙으므로 반드시 '물중탕'해야 합니다.",
      chunjaeConcept: "천재교과서 124~125쪽 [탐구: 광합성 산물 확인]: 에탄올 물중탕 탈색으로 엽록소 제거 후 아이오딘 반응!"
    },
    {
      id: "q-10",
      number: 10,
      unit: "동물과 에너지 > 순환",
      question: "다음 그림은 채취한 혈액을 원심 분리기에 넣고 돌렸을 때 분리된 두 층과, 현미경으로 관찰한 세포 성분들을 나타낸 것이다. 기호 A~D에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 혈액의 구성 성분",
      diagramSvg: `<svg viewBox="0 0 360 190" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="190" fill="#f8fafc" rx="12" />
        <!-- Centrifuge tube -->
        <g transform="translate(60, 20)">
          <rect x="0" y="10" width="45" height="130" rx="12" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
          <rect x="0" y="10" width="45" height="70" rx="10" fill="#fef08a" opacity="0.8"/>
          <rect x="0" y="80" width="45" height="60" rx="10" fill="#ef4444" opacity="0.9"/>
          <text x="22" y="50" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">A(혈장)</text>
          <text x="22" y="115" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">혈구</text>
        </g>
        <!-- Blood cells -->
        <g transform="translate(170, 25)">
          <circle cx="50" cy="30" r="16" fill="#dc2626"/>
          <circle cx="50" cy="30" r="7" fill="#b91c1c"/>
          <text x="110" y="34" font-size="11" font-weight="bold" fill="#991b1b">B: 적혈구 (헤모글로빈, 핵 없음)</text>
          
          <circle cx="50" cy="75" r="20" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
          <circle cx="50" cy="75" r="8" fill="#4338ca"/>
          <text x="110" y="79" font-size="11" font-weight="bold" fill="#3730a3">C: 백혈구 (핵 있음, 식균 작용)</text>
          
          <polygon points="45,115 55,118 50,126 42,122" fill="#ca8a04"/>
          <text x="110" y="123" font-size="11" font-weight="bold" fill="#854d0e">D: 혈소판 (혈액 응고)</text>
        </g>
      </svg>`,
      options: [
        "A는 혈구이며, 전체 혈액 부피의 약 45%를 차지한다.",
        "B(적혈구)는 핵이 존재하며 체내에 침입한 세균을 잡아먹는 식균 작용을 담당한다.",
        "C(백혈구)는 붉은색 색소인 헤모글로빈이 들어 있어 산소 운반을 전담한다.",
        "B(적혈구)는 가운데가 오목한 원반 모양으로 핵이 없으며, 헤모글로빈을 통해 산소를 운반한다.",
        "D(혈소판)는 모양이 일정하고 크기가 가장 크며 항체를 생산한다."
      ],
      correctAnswerIndex: 3,
      explanation: "B(적혈구)는 가운데가 오목한 원반 모양으로 성숙 시 핵이 없으며, 헤모글로빈 단백질이 있어 산소를 운반합니다. 백혈구(C)는 크기가 가장 크고 핵이 있으며 식균 작용을 합니다. 혈소판(D)은 세포 조각으로 핵이 없고 혈액 응고를 담당하며, 혈장(A)은 액체 성분으로 영양소와 노폐물, 이산화탄소를 운반합니다.",
      chunjaeConcept: "천재교과서 150~151쪽 [혈액의 구성과 기능]: 적혈구(핵X, 산소 운반), 백혈구(핵O, 식균 작용), 혈소판(혈액 응고)!"
    },
    {
      id: "q-11",
      number: 11,
      unit: "동물과 에너지 > 배설",
      question: "다음 그림은 콩팥의 기능적 기본 단위인 네프론에서 일어나는 오줌 형성 과정을 나타낸 것이다. 기호 A, B, C 과정에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 네프론에서의 오줌 형성 과정 (여과, 재흡수, 분비)",
      diagramSvg: `<svg viewBox="0 0 360 190" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="190" fill="#f8fafc" rx="12" />
        <!-- Glomerulus & Bowman's capsule -->
        <circle cx="90" cy="65" r="26" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <path d="M 60 40 C 50 85, 130 85, 120 40 L 120 110 L 60 110 Z" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5" opacity="0.7"/>
        <text x="90" y="68" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">사구체</text>
        <text x="90" y="98" font-size="10" font-weight="bold" fill="#a16207" text-anchor="middle">보먼주머니</text>
        <!-- Arrow A (Filtration) -->
        <path d="M 90 75 L 90 125" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
        <text x="125" y="130" font-size="11" font-weight="bold" fill="#dc2626">A (여과)</text>
        <!-- Tubule & Capillary -->
        <path d="M 120 140 L 260 140" stroke="#ca8a04" stroke-width="10" stroke-linecap="round"/>
        <text x="190" y="160" font-size="10" fill="#854d0e" text-anchor="middle">세뇨관</text>
        <path d="M 120 120 L 260 120" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>
        <text x="190" y="110" font-size="10" fill="#b91c1c" text-anchor="middle">모세혈관</text>
        <!-- B Reabsorption -->
        <path d="M 160 135 L 160 123" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
        <text x="160" y="175" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">B (재흡수)</text>
        <!-- C Secretion -->
        <path d="M 220 123 L 220 135" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        <text x="220" y="175" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">C (분비)</text>
      </svg>`,
      options: [
        "A(여과) 과정에서는 단백질과 적혈구 같은 고분자 물질도 모두 보먼주머니로 빠져나간다.",
        "B(재흡수) 과정에서 우리 몸에 필요한 포도당과 아미노산은 100% 모세혈관으로 다시 흡수된다.",
        "여과액(원뇨)에는 포도당이 전혀 들어있지 않다.",
        "C(분비) 과정은 세뇨관 속 유익한 물질을 모세혈관으로 다시 회수하는 과정이다.",
        "건강한 사람의 최종 오줌에는 포도당과 단백질이 다량 검출된다."
      ],
      correctAnswerIndex: 1,
      explanation: "사구체에서 보먼주머니로 일어나는 A(여과)는 압력 차이에 의해 크기가 작은 물질(물, 포도당, 아미노산, 무기염류, 요소)만 통과하고 혈구와 단백질은 여과되지 않습니다. 세뇨관을 지나는 B(재흡수) 과정에서 포도당과 아미노산은 100% 모세혈관으로 재흡수되므로 정상인의 오줌에서는 포도당이 검출되지 않습니다.",
      chunjaeConcept: "천재교과서 164~165쪽 [오줌의 형성 과정]: 여과(단백질/혈구 제외), 재흡수(포도당/아미노산 100%), 분비!"
    },
    {
      id: "q-12",
      number: 12,
      unit: "동물과 에너지 > 호흡",
      question: "다음 그림은 폐포와 모세혈관 사이에서 일어나는 기체 교환의 원리를 나타낸 것이다. 기체 (가)와 (나)의 이름 및 이동 원리로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 폐포와 모세혈관의 기체 교환",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Alveolus -->
        <circle cx="110" cy="85" r="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <text x="110" y="88" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">폐포 (공기 주머니)</text>
        <!-- Capillary -->
        <path d="M 220 25 C 200 85, 200 85, 220 145" stroke="#ef4444" stroke-width="24" fill="none" stroke-linecap="round"/>
        <text x="275" y="88" font-size="12" font-weight="bold" fill="#b91c1c">모세혈관</text>
        <!-- Gas arrows -->
        <path d="M 140 70 L 195 70" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
        <text x="168" y="60" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">(가) ➔</text>
        <path d="M 195 100 L 140 100" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        <text x="168" y="118" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">⮜ (나)</text>
      </svg>`,
      options: [
        "(가) 산소, (나) 이산화 탄소 - 기체의 농도 차이에 따른 확산",
        "(가) 이산화 탄소, (나) 산소 - 기체의 농도 차이에 따른 확산",
        "(가) 질소, (나) 수증기 - 혈압 차이에 의한 능동 수송",
        "(가) 산소, (나) 일산화 탄소 - 온도 차이에 의한 대류",
        "(가) 영양소, (나) 노폐물 - 삼투 현상에 의한 이동"
      ],
      correctAnswerIndex: 0,
      explanation: "폐포 속 공기는 들이마신 공기이므로 산소 농도가 높고, 온몸을 돌고 온 모세혈관은 이산화 탄소 농도가 높습니다. 따라서 농도가 높은 곳에서 낮은 곳으로 분자가 스스로 퍼져나가는 '확산(농도차)'에 의해 (가)산소는 폐포에서 모세혈관으로, (나)이산화 탄소는 모세혈관에서 폐포로 이동합니다.",
      chunjaeConcept: "천재교과서 160~161쪽 [기체 교환의 원리]: 에너지를 쓰지 않는 기체의 농도차에 따른 '확산 현상'!"
    },
    {
      id: "q-13",
      number: 13,
      unit: "동물과 에너지 > 순환",
      question: "다음 중 사람의 혈액 순환 경로에서 [온몸 순환]에 해당하는 경로를 바르게 나타낸 것은?",
      diagramCaption: "[천재교과서 도식] 혈액 순환의 두 경로 (온몸순환 vs 폐순환)",
      diagramSvg: `<svg viewBox="0 0 360 140" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="140" fill="#f8fafc" rx="12" />
        <rect x="25" y="45" width="80" height="40" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="65" y="70" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">좌심실</text>
        <path d="M 105 65 L 135 65" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
        <rect x="140" y="45" width="80" height="40" rx="8" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5"/>
        <text x="180" y="70" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">대동맥</text>
        <path d="M 220 65 L 250 65" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
        <rect x="255" y="45" width="80" height="40" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
        <text x="295" y="70" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">온몸의 모세혈관</text>
      </svg>`,
      options: [
        "우심실 → 폐동맥 → 폐의 모세혈관 → 폐정맥 → 좌심방",
        "좌심실 → 대동맥 → 온몸의 모세혈관 → 대정맥 → 우심방",
        "좌심방 → 대동맥 → 온몸의 모세혈관 → 폐정맥 → 우심실",
        "우심실 → 대정맥 → 온몸의 모세혈관 → 대동맥 → 좌심방",
        "좌심실 → 폐동맥 → 폐의 모세혈관 → 대정맥 → 우심실"
      ],
      correctAnswerIndex: 1,
      explanation: "온몸 순환은 좌심실에서 출발하여 대동맥을 거쳐 온몸의 모세혈관에 산소와 영양소를 공급한 후, 이산화탄소와 노폐물을 받아 대정맥을 통해 우심방으로 돌아오는 경로입니다. (1번은 폐순환 경로)",
      chunjaeConcept: "천재교과서 156~157쪽 [혈액 순환 경로 공식]: 온몸 순환(좌심실→대동맥→온몸→대정맥→우심방)!"
    },
    {
      id: "q-14",
      number: 14,
      unit: "식물과 에너지 > 줄기의 구조",
      question: "다음 그림은 해바라기와 같은 쌍떡잎식물 줄기의 가로 단면을 나타낸 것이다. 기호 A, B, C에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 쌍떡잎식물 줄기의 관다발 구조",
      diagramSvg: `<svg viewBox="0 0 360 180" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="180" fill="#f8fafc" rx="12" />
        <circle cx="180" cy="90" r="70" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <circle cx="180" cy="90" r="45" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="4"/>
        <!-- Ring vascular bundles -->
        <circle cx="180" cy="45" r="10" fill="#bbf7d0" stroke="#16a34a"/>
        <circle cx="225" cy="90" r="10" fill="#bbf7d0" stroke="#16a34a"/>
        <circle cx="180" cy="135" r="10" fill="#bbf7d0" stroke="#16a34a"/>
        <circle cx="135" cy="90" r="10" fill="#bbf7d0" stroke="#16a34a"/>
        <!-- Labels -->
        <text x="250" y="45" font-size="11" font-weight="bold" fill="#15803d">A (바깥쪽: 체관)</text>
        <text x="250" y="90" font-size="11" font-weight="bold" fill="#b45309">B (가운데: 형성층)</text>
        <text x="250" y="135" font-size="11" font-weight="bold" fill="#0284c7">C (안쪽: 물관)</text>
      </svg>`,
      options: [
        "A(체관)는 뿌리에서 흡수한 물과 무기 양분이 이동하는 통로이다.",
        "B(형성층)는 세포 분열을 통해 줄기를 굵어지게 하는 부피 생장을 담당한다.",
        "C(물관)는 잎에서 광합성으로 합성된 유기 양분이 이동하는 통로이다.",
        "쌍떡잎식물은 관다발이 줄기 전체에 불규칙하게 흩어져 있다.",
        "B(형성층)는 외떡잎식물(옥수수, 벼)에만 존재한다."
      ],
      correctAnswerIndex: 1,
      explanation: "쌍떡잎식물의 줄기 관다발은 바깥쪽부터 체관(A) - 형성층(B) - 물관(C) 순으로 고리 모양으로 규칙적으로 배열되어 있습니다. 형성층(B)은 왕성한 세포 분열로 줄기를 굵게 자라게 하는 '부피 생장'을 담당하며, 외떡잎식물에는 형성층이 없습니다.",
      chunjaeConcept: "천재교과서 128쪽 [쌍떡잎식물 줄기]: 바깥 체관(A), 중간 형성층(B, 부피생장), 안쪽 물관(C)!"
    },
    {
      id: "q-15",
      number: 15,
      unit: "식물과 에너지 > 광합성 실험",
      question: "다음 그림과 같이 1% 탄산수소 나트륨 수용액이 든 시험관에 검정말을 넣고, 전등과의 거리를 조절하며 발생하는 기포 수를 측정하였다. 이에 대한 설명으로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구] 빛의 세기와 광합성 기포 발생 실험",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Lamp -->
        <circle cx="50" cy="85" r="24" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
        <text x="50" y="90" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">전등</text>
        <!-- Ruler -->
        <line x1="80" y1="130" x2="260" y2="130" stroke="#64748b" stroke-width="2"/>
        <text x="170" y="145" font-size="10" fill="#475569" text-anchor="middle">거리 조절 (빛의 세기 조절)</text>
        <!-- Test tube with Elodea -->
        <rect x="270" y="30" width="35" height="95" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <path d="M 285 110 Q 280 80 290 50" stroke="#16a34a" stroke-width="4"/>
        <circle cx="285" cy="45" r="3" fill="#ffffff" stroke="#0284c7"/>
        <circle cx="288" cy="55" r="2.5" fill="#ffffff" stroke="#0284c7"/>
        <text x="287" y="20" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">기포(산소)</text>
      </svg>`,
      options: [
        "탄산수소 나트륨 수용액은 검정말에 산소를 공급하기 위해 넣는다.",
        "발생하는 기포의 주성분은 이산화 탄소 기체이다.",
        "전등을 검정말에 가깝게 할수록 기포 발생 수가 한없이 끝없이 증가한다.",
        "발생하는 기포는 광합성 결과 생성된 산소 기체이다.",
        "전등과 시험관 사이에 물을 담은 비커를 두는 것은 빛을 굴절시켜 모으기 위함이다."
      ],
      correctAnswerIndex: 3,
      explanation: "탄산수소 나트륨 수용액은 광합성의 원료인 '이산화 탄소'를 지속적으로 공급해 주는 역할을 합니다. 광합성 결과 발생하는 기포는 '산소' 기체이며, 전등이 가까워질수록 빛의 세기가 세져 기포 수가 증가하다가 광포화점에 도달하면 더 이상 증가하지 않고 일정해집니다. 물 비커는 전등의 열을 차단해 온도를 일정하게 유지하는 역할을 합니다.",
      chunjaeConcept: "천재교과서 130~131쪽 [탐구: 빛의 세기와 기포 발생]: 탄산수소나트륨=CO2공급, 기포=산소!"
    },
    {
      id: "q-16",
      number: 16,
      unit: "식물과 에너지 > 광합성과 호흡",
      question: "숨을 불어넣어 노란색으로 변한 BTB 용액을 시험관 A, B, C에 넣고, 그림과 같이 장치한 후 햇빛이 잘 비치는 곳에 몇 시간 두었다. 시험관 A, B, C의 색깔 변화로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구] BTB 용액의 색깔 변화 실험",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- A: Nothing -->
        <g transform="translate(45, 20)">
          <rect x="0" y="10" width="30" height="100" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
          <text x="15" y="125" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>
          <text x="15" y="140" font-size="9" fill="#64748b" text-anchor="middle">BTB만 둠</text>
        </g>
        <!-- B: Elodea in Light -->
        <g transform="translate(145, 20)">
          <rect x="0" y="10" width="30" height="100" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
          <path d="M 15 90 L 15 35" stroke="#16a34a" stroke-width="3"/>
          <text x="15" y="125" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">B</text>
          <text x="15" y="140" font-size="9" fill="#15803d" text-anchor="middle">검정말+빛</text>
        </g>
        <!-- C: Elodea wrapped in foil -->
        <g transform="translate(245, 20)">
          <rect x="0" y="10" width="30" height="100" rx="6" fill="#64748b" stroke="#334155" stroke-width="2"/>
          <text x="15" y="125" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
          <text x="15" y="140" font-size="9" fill="#475569" text-anchor="middle">알루미늄박</text>
        </g>
      </svg>`,
      options: [
        "A: 노란색, B: 파란색, C: 노란색",
        "A: 파란색, B: 노란색, C: 파란색",
        "A: 노란색, B: 노란색, C: 파란색",
        "A: 초록색, B: 파란색, C: 초록색",
        "A: 파란색, B: 파란색, C: 노란색"
      ],
      correctAnswerIndex: 0,
      explanation: "BTB 용액은 산성(CO2 많음)에서 노란색, 중성에서 초록색, 염기성(CO2 적음)에서 파란색을 띱니다. 시험관 A는 변화가 없어 노란색을 유지합니다. B는 검정말이 빛을 받아 광합성을 활발히 하여 CO2를 소모하므로 용액 속 CO2가 감소하여 염기성인 '파란색'으로 변합니다. C는 은박지에 싸여 빛이 차단되므로 호흡만 일어나 CO2를 방출하여 '노란색'을 유지합니다.",
      chunjaeConcept: "천재교과서 134~135쪽 [탐구: BTB 용액과 광합성]: CO2 소모(광합성)→파란색, CO2 축적(호흡)→노란색!"
    },
    {
      id: "q-17",
      number: 17,
      unit: "동물과 에너지 > 소화",
      question: "다음 그림은 소장 안쪽 벽에 무수히 많이 돋아 있는 융털의 내부 구조를 나타낸 것이다. 기호 A(암죽관)와 B(모세혈관)를 통해 흡수되는 영양소의 연결이 옳은 것은?",
      diagramCaption: "[천재교과서 도식] 소장 융털의 구조와 영양소 흡수 경로",
      diagramSvg: `<svg viewBox="0 0 360 180" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="180" fill="#f8fafc" rx="12" />
        <!-- Villus outline -->
        <path d="M 130 160 C 130 60, 230 60, 230 160 Z" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
        <!-- Central lacteal (A) -->
        <rect x="170" y="75" width="20" height="85" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="210" y="100" font-size="11" font-weight="bold" fill="#854d0e">A (암죽관)</text>
        <!-- Capillary network (B) -->
        <path d="M 155 85 Q 145 110 155 145" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
        <text x="85" y="115" font-size="11" font-weight="bold" fill="#dc2626">B (모세혈관) ➔</text>
      </svg>`,
      options: [
        "A(암죽관): 포도당, 아미노산 / B(모세혈관): 지방산, 모노글리세리드",
        "A(암죽관): 수용성 비타민(B, C) / B(모세혈관): 지용성 비타민(A, D)",
        "A(암죽관): 지방산, 모노글리세리드, 지용성 비타민 / B(모세혈관): 포도당, 아미노산, 수용성 비타민",
        "A(암죽관): 무기염류, 물 / B(모세혈관): 녹말, 단백질",
        "A와 B 모두 구별 없이 모든 영양소를 동일한 비율로 흡수한다."
      ],
      correctAnswerIndex: 2,
      explanation: "소장 융털의 중심에 있는 A(암죽관)는 지용성 영양소(지방산, 모노글리세리드, 지용성 비타민 A, D, E, K)를 흡수하여 가슴관을 거쳐 순환계로 보냅니다. 주변을 둘러싼 B(모세혈관)는 수용성 영양소(포도당, 아미노산, 무기염류, 수용성 비타민 B, C)를 흡수하여 간문맥을 거쳐 간으로 보냅니다.",
      chunjaeConcept: "천재교과서 148쪽 [소장 융털의 흡수 경로]: 암죽관(지용성-지방산, 비타민ADEK), 모세혈관(수용성-포도당, 아미노산)!"
    },
    {
      id: "q-18",
      number: 18,
      unit: "동물과 에너지 > 순환",
      question: "다음 그래프는 심장에서 출발한 혈액이 동맥, 모세혈관, 정맥을 거쳐 흐를 때의 혈압, 혈류 속도, 총 단면적의 변화를 나타낸 것이다. 기호 (가), (나), (다) 곡선의 연결이 옳은 것은?",
      diagramCaption: "[천재교과서 그래프] 혈관에 따른 혈압, 혈류 속도, 총 단면적 비교",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Axis -->
        <line x1="50" y1="140" x2="310" y2="140" stroke="#334155" stroke-width="2"/>
        <text x="80" y="155" font-size="10" fill="#334155" text-anchor="middle">동맥</text>
        <text x="180" y="155" font-size="10" fill="#334155" text-anchor="middle">모세혈관</text>
        <text x="280" y="155" font-size="10" fill="#334155" text-anchor="middle">정맥</text>
        <!-- Curve (가) Blood pressure: Drops continuously -->
        <path d="M 60 40 L 120 70 Q 180 110 290 135" fill="none" stroke="#ef4444" stroke-width="3"/>
        <text x="100" y="45" font-size="10" font-weight="bold" fill="#dc2626">(가)</text>
        <!-- Curve (나) Total cross area: Peaks at capillary -->
        <path d="M 60 130 Q 180 20 290 120" fill="none" stroke="#059669" stroke-width="3"/>
        <text x="180" y="40" font-size="10" font-weight="bold" fill="#059669">(나)</text>
        <!-- Curve (다) Velocity: Drops at capillary then rises at vein -->
        <path d="M 60 50 Q 180 160 290 90" fill="none" stroke="#2563eb" stroke-width="3"/>
        <text x="270" y="85" font-size="10" font-weight="bold" fill="#2563eb">(다)</text>
      </svg>`,
      options: [
        "(가) 혈압, (나) 총 단면적, (다) 혈류 속도",
        "(가) 혈류 속도, (나) 혈압, (다) 총 단면적",
        "(가) 총 단면적, (나) 혈압, (다) 혈류 속도",
        "(가) 혈압, (나) 혈류 속도, (다) 총 단면적",
        "(가) 혈류 속도, (나) 총 단면적, (다) 혈압"
      ],
      correctAnswerIndex: 0,
      explanation: "(가) 혈압은 심실 수축력에 의해 동맥에서 가장 높고, 모세혈관을 거쳐 정맥으로 갈수록 지속적으로 낮아집니다. (나) 총 단면적은 온몸에 그물처럼 퍼져 있는 모세혈관에서 가장 넓습니다. (다) 혈류 속도는 총 단면적이 가장 넓은 모세혈관에서 가장 느려져 물질 교환이 효율적으로 일어나게 됩니다.",
      chunjaeConcept: "천재교과서 152~153쪽 [혈관의 특징 비교]: 혈압(동맥>모세혈관>정맥), 단면적(모세혈관 최대), 속도(모세혈관 최저)!"
    },
    {
      id: "q-19",
      number: 19,
      unit: "식물과 에너지 > 증산 작용",
      question: "다음 그림과 같이 크기와 잎의 수가 비슷한 가지를 준비하여 눈금 실린더 A, B, C에 넣고 햇빛이 잘 드는 곳에 두었다. 일정 시간 후 줄어든 물의 양을 비교한 결과로 옳은 것은?",
      diagramCaption: "[천재교과서 탐구] 잎의 유무에 따른 증산 작용 측정",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Cylinder A: Leaves intact, oil layer -->
        <g transform="translate(40, 20)">
          <rect x="0" y="30" width="30" height="90" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <rect x="0" y="30" width="30" height="8" fill="#fef08a"/>
          <path d="M 15 30 L 15 0" stroke="#16a34a" stroke-width="3"/>
          <circle cx="5" cy="5" r="8" fill="#22c55e"/>
          <circle cx="25" cy="5" r="8" fill="#22c55e"/>
          <text x="15" y="135" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">A (잎 있음+기름)</text>
        </g>
        <!-- Cylinder B: Leaves removed, oil layer -->
        <g transform="translate(150, 20)">
          <rect x="0" y="30" width="30" height="90" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <rect x="0" y="30" width="30" height="8" fill="#fef08a"/>
          <path d="M 15 30 L 15 0" stroke="#16a34a" stroke-width="3"/>
          <text x="15" y="135" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">B (잎 뗌+기름)</text>
        </g>
        <!-- Cylinder C: No plant, oil layer -->
        <g transform="translate(260, 20)">
          <rect x="0" y="30" width="30" height="90" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <rect x="0" y="30" width="30" height="8" fill="#fef08a"/>
          <text x="15" y="135" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">C (물만 있음+기름)</text>
        </g>
      </svg>`,
      options: [
        "A > B > C",
        "B > A > C",
        "C > B > A",
        "A = B > C",
        "A = B = C"
      ],
      correctAnswerIndex: 0,
      explanation: "수면 위의 식용유 한 방울은 자연 증발을 막아줍니다. 식물 잎의 기공을 통해 물이 수증기 형태로 배출되는 '증산 작용'이 잎이 온전히 붙어있는 A에서 가장 활발히 일어나 물이 가장 많이 줄어듭니다. 잎을 뗀 B는 줄기를 통한 미세 증산만 일어나며, 식물이 없는 C는 물의 양이 거의 줄어들지 않습니다. 따라서 줄어든 물의 양은 A > B > C 입니다.",
      chunjaeConcept: "천재교과서 126~127쪽 [탐구: 증산 작용 측정]: 잎의 기공을 통해 증산 작용 활발(A > B > C)!"
    },
    {
      id: "q-20",
      number: 20,
      unit: "동물과 에너지 > 호흡",
      question: "다음 그림은 사람의 호흡 운동 원리를 설명하기 위한 유리종 모형이다. 아래쪽 고무막(가)을 손으로 잡아당겼을 때 일어나는 인체 호흡 기관의 상태 변화로 옳은 것은?",
      diagramCaption: "[천재교과서 모형] 호흡 운동 모형 (들숨의 원리)",
      diagramSvg: `<svg viewBox="0 0 360 180" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="180" fill="#f8fafc" rx="12" />
        <!-- Bell jar -->
        <path d="M 120 130 L 120 50 Q 120 20 180 20 Q 240 20 240 50 L 240 130 Z" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        <!-- Balloons (Lungs) expanding -->
        <circle cx="160" cy="85" r="18" fill="#fda4af" stroke="#e11d48"/>
        <circle cx="200" cy="85" r="18" fill="#fda4af" stroke="#e11d48"/>
        <text x="180" y="88" font-size="9" font-weight="bold" fill="#be123c" text-anchor="middle">폐(풍선)</text>
        <!-- Rubber sheet pulled down -->
        <path d="M 120 130 Q 180 160 240 130" stroke="#f97316" stroke-width="4" fill="none"/>
        <path d="M 180 148 L 180 165" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
        <text x="180" y="175" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">고무막(가) 아래로 당김 ↓</text>
      </svg>`,
      options: [
        "가로막(횡격막) 상승, 흉강 부피 감소, 들숨",
        "가로막(횡격막) 하강, 흉강 부피 증가, 흉강 내압 감소, 폐 확장, 들숨",
        "가로막(횡격막) 하강, 흉강 부피 감소, 흉강 내압 증가, 날숨",
        "갈비뼈 하강, 흉강 부피 증가, 폐 수축, 날숨",
        "가로막과 갈비뼈의 위치 변화 없이 폐가 스스로 근육 운동하여 확장"
      ],
      correctAnswerIndex: 1,
      explanation: "고무막을 아래로 당기는 것은 인체에서 '가로막(횡격막)이 아래로 내려가는 것'과 같습니다. 이로 인해 흉강(가슴 공간)의 부피가 커지고, 흉강 내부 압력이 대기압보다 낮아져 폐가 부풀어 오르면서 외부 공기가 폐로 밀려 들어오는 '들숨'이 일어납니다. (폐는 근육이 없어 스스로 움직이지 못함)",
      chunjaeConcept: "천재교과서 158~159쪽 [호흡 운동의 원리]: 고무막 당김=가로막 하강→부피 증가→압력 감소→폐 팽창(들숨)!"
    },
    {
      id: "q-21",
      number: 21,
      unit: "물질의 특성 > 용해도와 재결정",
      question: "다음 그래프는 물 100g에 대한 질산 칼륨의 용해도 곡선이다. 60℃의 물 100g에 질산 칼륨 110g을 완전히 녹인 포화 수용액을 20℃로 냉각시킬 때, 바닥에 석출되는 질산 칼륨의 질량은? (단, 20℃에서 질산 칼륨의 용해도는 32이다.)",
      diagramCaption: "[천재교과서 그래프] 온도에 따른 질산 칼륨의 용해도 곡선",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Axes -->
        <line x1="60" y1="135" x2="310" y2="135" stroke="#334155" stroke-width="2"/>
        <line x1="60" y1="135" x2="60" y2="25" stroke="#334155" stroke-width="2"/>
        <text x="315" y="140" font-size="10" fill="#334155">온도(℃)</text>
        <text x="50" y="20" font-size="10" fill="#334155" text-anchor="middle">용해도(g/물100g)</text>
        <!-- Points & Curve -->
        <path d="M 60 125 Q 150 110 250 35" fill="none" stroke="#2563eb" stroke-width="3"/>
        <circle cx="250" cy="35" r="4" fill="#ef4444"/>
        <text x="250" y="28" font-size="10" font-weight="bold" fill="#dc2626">60℃ (110g)</text>
        <circle cx="120" cy="105" r="4" fill="#ef4444"/>
        <text x="120" y="98" font-size="10" font-weight="bold" fill="#dc2626">20℃ (32g)</text>
        <line x1="250" y1="35" x2="250" y2="135" stroke="#94a3b8" stroke-dasharray="3"/>
        <line x1="120" y1="105" x2="120" y2="135" stroke="#94a3b8" stroke-dasharray="3"/>
      </svg>`,
      options: [
        "32g",
        "68g",
        "78g",
        "110g",
        "142g"
      ],
      correctAnswerIndex: 2,
      explanation: "석출량 공식 = (처음 녹아있던 용질의 양) - (냉각된 온도에서 최대로 녹을 수 있는 용질의 양) 입니다. 60℃에서 녹아 있던 질산 칼륨 110g 중, 20℃에서는 물 100g에 최대 32g까지만 녹아있을 수 있으므로 석출량 = 110g - 32g = 78g 입니다.",
      chunjaeConcept: "천재교과서 210~211쪽 [용해도 곡선과 재결정 공식]: 석출량 = 기존 용질량 - 냉각 온도 최대 용해도!"
    },
    {
      id: "q-22",
      number: 22,
      unit: "물질의 특성 > 끓는점과 혼합물의 분리",
      question: "다음 그래프는 물(끓는점 100℃)과 에탄올(끓는점 78℃) 혼합물을 가열했을 때의 온도 변화 곡선이다. 이에 대한 설명으로 옳지 않은 것은?",
      diagramCaption: "[천재교과서 실험] 물과 에탄올 혼합물의 분별 증류 곡선",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Axes -->
        <line x1="50" y1="140" x2="310" y2="140" stroke="#334155" stroke-width="2"/>
        <line x1="50" y1="140" x2="50" y2="25" stroke="#334155" stroke-width="2"/>
        <!-- Plateau 1 & 2 -->
        <path d="M 50 135 L 100 85 L 160 85 L 220 40 L 290 40" fill="none" stroke="#4f46e5" stroke-width="3"/>
        <text x="130" y="75" font-size="10" font-weight="bold" fill="#4338ca">A 구간 (약 78℃)</text>
        <text x="255" y="30" font-size="10" font-weight="bold" fill="#4338ca">B 구간 (약 100℃)</text>
      </svg>`,
      options: [
        "끓는점 차이를 이용하여 서로 섞이는 액체 혼합물을 분리하는 방법을 '분별 증류'라고 한다.",
        "A 구간에서 주로 끓어 나오는 물질은 에탄올이다.",
        "B 구간에서 주로 끓어 나오는 물질은 물이다.",
        "끓는점이 더 낮은 에탄올이 물보다 먼저 기화되어 나온다.",
        "A 구간에서 에탄올이 100% 완벽하게 분리되어 나오므로 순수한 물만 남게 된다."
      ],
      correctAnswerIndex: 4,
      explanation: "분별 증류는 끓는점 차이를 이용하는 분리법입니다. 끓는점이 낮은 에탄올(78℃)이 A 구간에서 먼저 기화되어 나오지만, 이 온도에서도 물의 증발이 소량 함께 일어나므로 A 구간에서 나오는 액체에는 소량의 수분이 섞여 있습니다. 따라서 한 번의 증류로 100% 완전 분리는 불가능하며 여러 번 반복해야 순도가 높아집니다.",
      chunjaeConcept: "천재교과서 222~223쪽 [분별 증류]: 끓는점 차이 이용! 끓는점 낮은 물질(에탄올)이 먼저 증류!"
    },
    {
      id: "q-23",
      number: 23,
      unit: "물질의 특성 > 밀도 차이를 이용한 분리",
      question: "물과 식용유, 또는 물과 사염화 탄소처럼 '서로 섞이지 않는 액체 혼합물'을 분리할 때 사용하는 기구의 이름과 분리 원리를 바르게 짝지은 것은?",
      diagramCaption: "[천재교과서 기구] 분별 깔때기를 이용한 액체 혼합물의 분리",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Separatory funnel shape -->
        <path d="M 150 20 L 210 20 L 220 70 L 185 120 L 185 150 L 175 150 L 175 120 L 140 70 Z" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
        <rect x="146" y="45" width="68" height="25" fill="#fef08a" opacity="0.8"/>
        <text x="180" y="62" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">밀도 작은 액체 (위층)</text>
        <rect x="156" y="70" width="48" height="35" fill="#bae6fd" opacity="0.8"/>
        <text x="180" y="92" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">밀도 큰 액체 (아래층)</text>
        <circle cx="180" cy="130" r="5" fill="#ef4444"/>
        <text x="180" y="142" font-size="8" fill="#b91c1c" text-anchor="middle">꼭지</text>
      </svg>`,
      options: [
        "분별 깔때기 - 밀도 차이",
        "가지 달린 삼각 플라스크 - 끓는점 차이",
        "뷰렛 - 용해도 차이",
        "리비히 냉각기 - 크기 차이",
        "피펫 - 녹는점 차이"
      ],
      correctAnswerIndex: 0,
      explanation: "서로 섞이지 않는 두 액체는 밀도 차이에 의해 층이 분리됩니다. 이때 '분별 깔때기'를 사용하여 아래쪽 꼭지를 열어 밀도가 큰 아래층 액체를 먼저 받아내고, 경계면의 액체는 버린 후, 밀도가 작은 위층 액체는 위쪽 주둥이로 따라내어 분리합니다.",
      chunjaeConcept: "천재교과서 226쪽 [밀도 차이를 이용한 분리]: 분별 깔때기(밀도 큰 액체가 아래층)!"
    },
    {
      id: "q-24",
      number: 24,
      unit: "열과 우리 생활 > 비열과 열용량",
      question: "질량이 각각 100g으로 같은 물과 식용유를 같은 열원으로 동시에 가열했을 때의 온도 변화 그래프이다. 이에 대한 설명으로 옳은 것은? (단, 물의 비열은 1 cal/g·℃ 이다.)",
      diagramCaption: "[천재교과서 그래프] 같은 질량의 물과 식용유 가열 곡선",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Axis -->
        <line x1="50" y1="140" x2="310" y2="140" stroke="#334155" stroke-width="2"/>
        <line x1="50" y1="140" x2="50" y2="25" stroke="#334155" stroke-width="2"/>
        <text x="315" y="145" font-size="10" fill="#334155">가열 시간(분)</text>
        <text x="45" y="20" font-size="10" fill="#334155" text-anchor="middle">온도(℃)</text>
        <!-- Oil Line (Steeper) -->
        <path d="M 50 120 L 220 30" stroke="#d97706" stroke-width="3"/>
        <text x="230" y="35" font-size="10" font-weight="bold" fill="#b45309">식용유 (기울기 급함)</text>
        <!-- Water Line (Gentle) -->
        <path d="M 50 120 L 280 65" stroke="#0284c7" stroke-width="3"/>
        <text x="290" y="70" font-size="10" font-weight="bold" fill="#0369a1">물 (기울기 완만)</text>
      </svg>`,
      options: [
        "식용유가 물보다 비열이 더 크다.",
        "물의 비열이 식용유보다 크기 때문에 온도 변화가 더 서서히 일어난다.",
        "같은 시간 동안 가열했을 때 물이 흡수한 열량이 식용유보다 훨씬 많다.",
        "비열이 클수록 같은 열을 가했을 때 온도가 더 빨리 올라간다.",
        "식용유와 물의 온도 변화율은 질량에만 비례하고 물질의 종류와는 무관하다."
      ],
      correctAnswerIndex: 1,
      explanation: "비열은 어떤 물질 1g의 온도를 1℃ 올리는 데 필요한 열량입니다. 비열이 클수록 온도를 1℃ 올리기 어려우므로 온도 변화(그래프의 기울기)가 완만합니다. 물은 비열이 매우 큰 물질이어서 식용유보다 온도가 천천히 올라가고 천천히 식습니다. (해안 지방이 내륙보다 기온 변화가 적은 까닭)",
      chunjaeConcept: "천재교과서 256~257쪽 [비열과 온도 변화 공식]: Q = c·m·Δt, 비열이 클수록 온도 변화는 작다!"
    },
    {
      id: "q-25",
      number: 25,
      unit: "열과 우리 생활 > 열의 이동",
      question: "다음 그림과 같이 주전자에 물을 넣고 아랫부분을 가열할 때, 주전자 전체의 물이 골고루 따뜻해지는 주된 열의 이동 방법은?",
      diagramCaption: "[천재교과서 도식] 액체 내부에서의 대류 현상",
      diagramSvg: `<svg viewBox="0 0 360 170" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="170" fill="#f8fafc" rx="12" />
        <!-- Kettle / Beaker -->
        <rect x="120" y="30" width="120" height="90" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <!-- Convection arrows -->
        <path d="M 160 105 L 160 55 Q 160 45 150 45 L 140 55 L 140 105" stroke="#ef4444" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M 200 105 L 200 55 Q 200 45 210 45 L 220 55 L 220 105" stroke="#ef4444" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <text x="180" y="75" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">순환 회전 ⟳</text>
        <!-- Flame below -->
        <path d="M 160 135 Q 170 120 180 135 Q 190 120 200 135 Z" fill="#f97316"/>
        <text x="180" y="155" font-size="10" font-weight="bold" fill="#ea580c" text-anchor="middle">가열 불꽃</text>
      </svg>`,
      options: [
        "전도",
        "대류",
        "복사",
        "승화",
        "단열"
      ],
      correctAnswerIndex: 1,
      explanation: "액체나 기체 상태의 물질에서 가열된 부분의 분자들은 부피가 팽창하여 밀도가 작아지므로 위로 올라가고, 위의 차가운 물질은 아래로 내려오며 물질이 직접 순환하여 열을 전달하는 방식을 '대류'라고 합니다. (고체는 전도, 진공을 통과하는 햇빛 등은 복사)",
      chunjaeConcept: "천재교과서 248~249쪽 [열의 이동 방법 세 가지]: 고체는 전도, 액체/기체는 대류, 전자기파는 복사!"
    }
  ]
};
