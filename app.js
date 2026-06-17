// 한국의 찬란한 문화유산 아카이브 - 데이터 및 애플리케이션 로직
const heritageData = [
  {
    id: "cheomseongdae",
    name: "경주 첨성대 (瞻星臺)",
    period: "삼국시대",
    periodEng: "three-kingdoms",
    location: "경상북도 경주시 인왕동 839-1",
    image: "images/cheomseongdae.png",
    title: "동양에서 가장 오래된 하늘의 눈",
    desc: "신라 선덕여왕(재위 632~647) 때 건립된 동양에서 가장 오래된 천문대입니다. 둥근 하늘을 상징하는 원형 몸체와 네모난 땅을 상징하는 방형 기단으로 음양의 조화를 이루었습니다. 사용된 돌의 개수(약 365개)는 1년의 날수를 상징하며, 27단의 석단은 선덕여왕이 신라 제27대 여왕임을 상징하는 등 천문학적 상징성으로 가득 차 있습니다. 밤마다 별의 움직임을 관측하여 농업 절기를 정하고 국가의 길흉을 점치는 중요한 역할을 수행했습니다.",
    spec: "국보 제31호 | 높이 9.17m, 밑지름 4.93m, 윗지름 2.85m | 화강암 365개 안팎 사용 (27단 구성)",
    highlights: [
      "27단의 석축: 신라 제27대 선덕여왕을 상징",
      "중앙의 창구: 사다리를 걸어 내부에 출입하며 천문을 관측하던 입구",
      "상하 대칭의 균형미: 아래는 넓고 위는 좁아지는 우아한 곡선미와 높은 안정성"
    ],
    routes: {
      ktx: {
        startName: "경주역 (KTX)",
        duration: "약 40분",
        summary: "경주역 리무진 버스(700번) 이용 후 도보 이동",
        steps: [
          { type: "bus", line: "700", dur: "30분", desc: "경주역 버스승강장에서 700번 버스 탑승" },
          { type: "transfer", desc: "월성동주민센터 정류장 하차" },
          { type: "walk", dur: "10분", desc: "경주역사유적지구 방향 대릉원 돌담길을 따라 도보 이동 (약 600m)" }
        ],
        mapNodes: [
          { x: 50, y: 350, name: "경주역(KTX)" },
          { x: 180, y: 280, name: "중간 경유지" },
          { x: 320, y: 200, name: "월성동주민센터" },
          { x: 450, y: 150, name: "대릉원 삼거리" },
          { x: 550, y: 150, name: "첨성대" }
        ]
      },
      terminal: {
        startName: "경주시외버스터미널",
        duration: "약 20분",
        summary: "일반 시내버스 이용 후 한옥마을 도보 진입",
        steps: [
          { type: "bus", line: "60 / 61", dur: "10분", desc: "터미널 맞은편 정류장에서 60번 또는 61번 버스 탑승" },
          { type: "transfer", desc: "천마총 후문 정류장 하차" },
          { type: "walk", dur: "8분", desc: "천마총 돌담길을 지나 숲길 코스로 도보 이동 (약 450m)" }
        ],
        mapNodes: [
          { x: 50, y: 80, name: "시외버스터미널" },
          { x: 220, y: 120, name: "서라벌네거리" },
          { x: 380, y: 130, name: "천마총 후문" },
          { x: 480, y: 150, name: "대릉원 삼거리" },
          { x: 550, y: 150, name: "첨성대" }
        ]
      }
    }
  },
  {
    id: "muryeong",
    name: "공주 무령왕릉 (武寧王陵)",
    period: "삼국시대",
    periodEng: "three-kingdoms",
    location: "충청남도 공주시 금성동 산5-1",
    image: "images/muryeong.png",
    title: "천년 동안 잠들었던 백제의 평화와 번영",
    desc: "백제 제25대 무령왕과 왕비의 합장릉으로, 삼국 시대 고분 중 피장자의 신원이 확실하게 밝혀진 유일한 무덤입니다. 1971년 배수로 공사 중 우연히 발견되었으며, 도굴되지 않은 온전한 상태로 4,600여 점의 찬란한 유물이 발굴되었습니다. 중국 양나라의 영향을 받은 벽돌무덤 형식으로 축조되었으나, 무덤 내부를 수놓은 연꽃무늬 벽돌과 유려한 곡선은 백제 장인들의 독창적이고 섬세한 미적 감각을 생생히 보여줍니다.",
    spec: "사적 제13호 | 터널형 벽돌무덤 (연도와 현실로 구성) | 금제 관장식, 국보 12건 포함 108종 유물 출토",
    highlights: [
      "무덤 수호신 진묘수(석수): 무덤 입구를 지키며 1400년 동안 왕릉을 수호한 돌짐승",
      "금제 관식: 비단 모자에 꽂았던 화려한 불꽃 모양의 왕과 왕비 관장식",
      "묘지석: 무령왕의 승하 연도와 땅을 사서 무덤을 썼다는 '매지권'이 기록된 석판"
    ],
    routes: {
      ktx: {
        startName: "공주역 (KTX)",
        duration: "약 50분",
        summary: "공주역 급행 버스(200번) 이용 후 송산리 고분군 도보 이동",
        steps: [
          { type: "bus", line: "200", dur: "40분", desc: "공주역 승강장에서 200번 버스 탑승" },
          { type: "transfer", desc: "무령왕릉/송산리고분군 정류장 하차" },
          { type: "walk", dur: "5분", desc: "고분군 매표소를 지나 왕릉원 산책로 도보 이동 (약 300m)" }
        ],
        mapNodes: [
          { x: 50, y: 350, name: "공주역(KTX)" },
          { x: 150, y: 250, name: "이인면사무소" },
          { x: 300, y: 180, name: "금강교 네거리" },
          { x: 420, y: 120, name: "무령왕릉 정류장" },
          { x: 550, y: 120, name: "무령왕릉" }
        ]
      },
      terminal: {
        startName: "공주종합버스터미널",
        duration: "약 15분",
        summary: "시내버스 또는 택시 이용",
        steps: [
          { type: "bus", line: "101 / 125", dur: "10분", desc: "터미널 앞 정류장에서 101번 버스 탑승" },
          { type: "transfer", desc: "웅진백제역사관 정류장 하차" },
          { type: "walk", dur: "5분", desc: "웅진백제역사관을 거쳐 무령왕릉 매표소로 도보 이동 (약 350m)" }
        ],
        mapNodes: [
          { x: 50, y: 80, name: "공주종합터미널" },
          { x: 200, y: 90, name: "신관사거리" },
          { x: 350, y: 110, name: "웅진백제역사관" },
          { x: 470, y: 120, name: "고분군 진입로" },
          { x: 550, y: 120, name: "무령왕릉" }
        ]
      }
    }
  },
  {
    id: "janggyeongpanjeon",
    name: "해인사 장경판전 (藏經板殿)",
    period: "고려시대",
    periodEng: "goryeo",
    location: "경상남도 합천군 가야면 해인사길 122",
    image: "images/janggyeongpanjeon.png",
    title: "외침을 이겨낸 호국 정신과 과학적 보존의 결정체",
    desc: "고려 시대 몽골의 침입을 부처님의 힘으로 물리치고자 판각한 고려대장경판(팔만대장경)을 영구히 보존하기 위해 지어진 조선 초기의 건축물입니다. 목판이 오랜 세월 동안 썩거나 뒤틀리지 않도록 자연 환경을 완벽하게 통제한 세계 유일의 친환경 보존 과학의 정수입니다. 건물의 방향, 창문의 크기(상하/남북 창의 크기가 다름), 숯과 횟가루, 소금을 섞어 다진 흙바닥 등 모든 요소가 자연 환기와 습도 조절을 극대화하도록 정교하게 설계되었습니다.",
    spec: "국보 제52호 / 세계유산 | 목조 판전 4동 (수다라장, 법보전 등) | 81,258장의 대장경판 영구 보존",
    highlights: [
      "대칭적 격자창: 아래창과 위창의 크기를 달리하여 건물 내부의 공기 대류 현상을 유도",
      "보존식 흙바닥: 소금, 숯, 횟가루를 다져 여름철엔 수분을 흡수하고 겨울철엔 수분을 방출",
      "팔만대장경판: 760년이 넘는 세월 동안 단 한 장의 손상도 없이 글자가 온전히 살아있는 기적"
    ],
    routes: {
      ktx: {
        startName: "동대구역 (KTX)",
        duration: "약 1시간 40분",
        summary: "지하철로 대구서부정류장 이동 후 시외버스 승차",
        steps: [
          { type: "subway", line: "대구 1호선", dur: "25분", desc: "동대구역에서 지하철 1호선 승차 후 성당못(서부정류장)역 하차" },
          { type: "bus", line: "해인사행 시외버스", dur: "1시간", desc: "서부정류장에서 해인사행 직행 시외버스 탑승" },
          { type: "walk", dur: "15분", desc: "해인사 시외버스정류장 하차 후 일주문을 지나 장경판전까지 도보 이동 (약 1km)" }
        ],
        mapNodes: [
          { x: 50, y: 350, name: "동대구역(KTX)" },
          { x: 180, y: 300, name: "서부정류장" },
          { x: 320, y: 220, name: "가야산 입구" },
          { x: 450, y: 150, name: "해인사주차장" },
          { x: 550, y: 150, name: "장경판전" }
        ]
      },
      terminal: {
        startName: "합천종합버스터미널",
        duration: "약 1시간 10분",
        summary: "합천 군내버스 탑승 및 가야산 이동",
        steps: [
          { type: "bus", line: "합천-해인사", dur: "50분", desc: "터미널에서 해인사 방면 농어촌 버스 탑승" },
          { type: "transfer", desc: "해인사 종점 정류장 하차" },
          { type: "walk", dur: "20분", desc: "맑은 계곡길을 따라 해인사 대웅전을 거쳐 뒤편 장경판전으로 도보 이동" }
        ],
        mapNodes: [
          { x: 50, y: 80, name: "합천종합터미널" },
          { x: 200, y: 100, name: "야로면삼거리" },
          { x: 350, y: 120, name: "해인사 종점" },
          { x: 470, y: 140, name: "해인사 대웅전" },
          { x: 550, y: 150, name: "장경판전" }
        ]
      }
    }
  },
  {
    id: "gyeongbokgung",
    name: "경복궁 (景福宮)",
    period: "조선시대",
    periodEng: "joseon",
    location: "서울 종로구 사직로 161",
    image: "images/gyeongbokgung.png",
    title: "새로운 조선 왕조의 개국과 큰 복을 비는 궁궐",
    desc: "1395년 태조 이성계에 의해 창건된 조선 왕조의 법궁(첫 번째 정궁)입니다. '새 왕조가 큰 복을 누려 번창할 것'이라는 뜻을 담고 있습니다. 임진왜란 때 전소되는 비극을 겪었으나 흥선대원군의 주도로 중건되어 왕실의 권위를 회복했습니다. 광화문-근정전-사정전-강녕전으로 이어지는 일직선상의 중심 축은 대칭과 비대칭의 절묘한 배치 속에서 왕권의 위엄과 유교적 덕목을 웅장하게 표현합니다.",
    spec: "사적 제117호 | 대지면적 432,703㎡ | 정문(광화문), 정전(근정전), 누각(경회루) 등 배치",
    highlights: [
      "근정전: 왕의 즉위식이나 외국 사신 접견 등 국가 공식 행사를 치르던 장엄한 중심 법전",
      "경회루: 연못 위에 우뚝 솟은 대형 누각으로 왕과 신하들이 연회를 베풀던 곳",
      "향원정: 연못 가운뎃섬에 세워진 아기자기하고 육각형 평면의 아름다운 2층 정자"
    ],
    routes: {
      ktx: {
        startName: "서울역 (KTX)",
        duration: "약 20분",
        summary: "지하철 1호선 승차 후 종로3가역에서 3호선 환승",
        steps: [
          { type: "subway", line: "서울 1호선", dur: "5분", desc: "서울역에서 의정부/소요산 방면 1호선 지하철 탑승" },
          { type: "transfer", desc: "종로3가역에서 3호선(대화 방면)으로 환승" },
          { type: "subway", line: "서울 3호선", dur: "5분", desc: "3호선 안국/경복궁 방면 열차 탑승 후 경복궁역 하차" },
          { type: "walk", dur: "3분", desc: "경복궁역 5번 출구 지하 연결통로를 통해 바로 진입" }
        ],
        mapNodes: [
          { x: 50, y: 350, name: "서울역" },
          { x: 180, y: 350, name: "시청역" },
          { x: 280, y: 250, name: "종로3가역" },
          { x: 380, y: 150, name: "경복궁역" },
          { x: 550, y: 150, name: "경복궁" }
        ]
      },
      terminal: {
        startName: "고속버스터미널 (강남)",
        duration: "약 30분",
        summary: "지하철 3호선으로 환승 없이 한 번에 이동",
        steps: [
          { type: "subway", line: "서울 3호선", dur: "25분", desc: "고속터미널역에서 대화/구파발 방면 3호선 지하철 탑승" },
          { type: "transfer", desc: "경복궁역 하차" },
          { type: "walk", dur: "3분", desc: "5번 출구 출입구를 지나 홍례문 매표소 방면 도보 이동" }
        ],
        mapNodes: [
          { x: 50, y: 80, name: "고속터미널" },
          { x: 220, y: 120, name: "압구정역" },
          { x: 350, y: 140, name: "옥수역" },
          { x: 450, y: 150, name: "경복궁역" },
          { x: 550, y: 150, name: "경복궁" }
        ]
      }
    }
  },
  {
    id: "changdeokgung",
    name: "창덕궁 후원 (昌德宮 後苑)",
    period: "조선시대",
    periodEng: "joseon",
    location: "서울 종로구 율곡로 99",
    image: "images/changdeokgung.png",
    title: "인간의 손길과 자연이 동화된 동양 조원 예술의 극치",
    desc: "태종 5년(1405) 경복궁의 이궁(보조 궁궐)으로 창건된 창덕궁은 가장 오랜 기간 임금들이 거처하며 정치를 펼쳤던 애정 깊은 공간입니다. 특히 창덕궁 북쪽에 펼쳐진 후원(비원)은 한국의 궁궐 정원 중 자연 지형의 굴곡을 그대로 살리며 나무 한 그루, 연못 하나를 계곡 사이에 조화롭게 배치한 것으로 유명합니다. 인위적인 대칭을 배제하고 자연에 스며들도록 지어진 정자와 연못들은 도심 속 신비로운 동양적 낙원을 선사합니다.",
    spec: "사적 제122호 / 세계유산 | 부용지, 애련지, 관람지, 옥류천 구역으로 구성",
    highlights: [
      "부용정과 부용지: 하늘은 둥글고 땅은 네모나다는 천원지방 사상이 깃든 아름다운 연못과 십자형 정자",
      "주합루와 규장각: 정조가 왕실 도서관이자 학문 연구소로 세운 2층 누각",
      "불로문: 거대한 화강암 하나를 통째로 깎아 만든 아치형 문으로 지나가면 늙지 않는다는 전설"
    ],
    routes: {
      ktx: {
        startName: "서울역 (KTX)",
        duration: "약 25분",
        summary: "지하철 1호선 승차 후 종로3가역에서 3호선 환승",
        steps: [
          { type: "subway", line: "서울 1호선", dur: "5분", desc: "서울역에서 1호선 승차 후 종로3가역 하차" },
          { type: "transfer", desc: "3호선 대화 방면 환승 후 안국역 이동" },
          { type: "subway", line: "서울 3호선", dur: "3분", desc: "안국역 하차" },
          { type: "walk", dur: "5분", desc: "안국역 3번 출구로 나와 돈화문(정문)까지 직선 도로 도보 이동 (약 350m)" }
        ],
        mapNodes: [
          { x: 50, y: 350, name: "서울역" },
          { x: 180, y: 350, name: "시청역" },
          { x: 280, y: 250, name: "종로3가역" },
          { x: 380, y: 150, name: "안국역" },
          { x: 550, y: 150, name: "창덕궁 후원" }
        ]
      },
      terminal: {
        startName: "고속버스터미널 (강남)",
        duration: "약 28분",
        summary: "지하철 3호선 탑승 후 안국역 하차",
        steps: [
          { type: "subway", line: "서울 3호선", dur: "23분", desc: "고속터미널역에서 일산/대화방면 3호선 승차" },
          { type: "transfer", desc: "안국역 하차" },
          { type: "walk", dur: "5분", desc: "안국역 3번 출구 도보 이동 및 창덕궁 매표소 진입" }
        ],
        mapNodes: [
          { x: 50, y: 80, name: "고속터미널" },
          { x: 220, y: 120, name: "압구정역" },
          { x: 350, y: 140, name: "약수역" },
          { x: 450, y: 150, name: "안국역" },
          { x: 550, y: 150, name: "창덕궁 후원" }
        ]
      }
    }
  },
  {
    id: "hwaseong",
    name: "수원 화성 (水原 華城)",
    period: "조선시대",
    periodEng: "joseon",
    location: "경기도 수원시 팔달구 정조로 825",
    image: "images/hwaseong.png",
    title: "효심과 실용 정신이 빚어낸 조선 성곽 건축의 꽃",
    desc: "조선 제22대 정조대왕이 부친 사도세자의 묘를 이장하며 건설한 신도시 성곽입니다. 실학자 정약용이 발명한 거중기, 유형거 등의 첨단 도구를 사용하여 공사 기간과 비용을 획기적으로 줄였습니다. 동양 성곽의 견고함과 서양의 최신 군사 기술(석재와 벽돌의 혼용, 옹성, 적대 등)을 최초로 결합하여 군사적 방어 기능과 도시 기능, 그리고 예술적인 조형미를 모두 충족하는 성곽 건축의 백미입니다.",
    spec: "사적 제3호 / 세계유산 | 성곽 길이 5.74km | 4대문(장안문, 팔달문 등) 및 포루, 방화수류정 등",
    highlights: [
      "방화수류정(동북각루): 용두 바위 위에 우뚝 솟아 연못 용연과 어우러진 빼어난 경관의 정자",
      "서장대: 팔달산 꼭대기에 위치하여 성 안팎을 한눈에 살피며 군사를 지휘하던 누각",
      "화홍문: 수원천 위에 세워진 일겁 무지개 모양의 수문과 그 위에 얹힌 아름다운 누각"
    ],
    routes: {
      ktx: {
        startName: "수원역 (KTX/1호선)",
        duration: "약 25분",
        summary: "시내버스 환승 후 화성행궁 정류장 하차",
        steps: [
          { type: "bus", line: "11 / 13 / 35", dur: "15분", desc: "수원역 북측 승강장에서 팔달문/화성행궁 방면 버스 탑승" },
          { type: "transfer", desc: "화성행궁 정류장 하차" },
          { type: "walk", dur: "5분", desc: "화성행궁 광장을 지나 화성 성곽 진입 및 도보 투어 시작" }
        ],
        mapNodes: [
          { x: 50, y: 350, name: "수원역" },
          { x: 180, y: 250, name: "매산사거리" },
          { x: 320, y: 180, name: "팔달문" },
          { x: 450, y: 150, name: "화성행궁" },
          { x: 550, y: 150, name: "수원화성" }
        ]
      },
      terminal: {
        startName: "수원버스터미널",
        duration: "약 30분",
        summary: "시내버스 이용 직행 노선",
        steps: [
          { type: "bus", line: "82-1 / 112", dur: "20분", desc: "터미널 앞 승강장에서 팔달문 방면 버스 승차" },
          { type: "transfer", desc: "팔달문/영동시장 정류장 하차" },
          { type: "walk", dur: "8분", desc: "팔달문 옹성을 둘러보고 성곽 오르막길을 따라 서장대 방면 도보 이동 (약 500m)" }
        ],
        mapNodes: [
          { x: 50, y: 80, name: "수원터미널" },
          { x: 200, y: 110, name: "세류사거리" },
          { x: 350, y: 130, name: "매교역" },
          { x: 450, y: 150, name: "팔달문" },
          { x: 550, y: 150, name: "수원화성" }
        ]
      }
    }
  }
];

// 공지사항 상세 데이터
const noticesData = {
  1: {
    tag: "공지",
    title: "2026학년도 창의적 체험활동 보고서 작성 및 제출 안내",
    author: "역사교육부",
    date: "2026-06-12",
    body: `안녕하세요, 역사교육부입니다.<br><br>
           2026학년도 창의적 체험활동 활성화를 위한 역사 문화재 탐방 보고서 작성 요령을 공지합니다.<br><br>
           학생 여러분은 본 배움터의 <strong>'온라인 학습방'</strong> 메뉴에 있는 <strong>'창의적 체험활동 보고서 작성기'</strong>를 통해 본인이 가상으로 혹은 현장 견학을 통해 탐방한 문화유산을 선택하고, 학번 및 감상문을 기재하여 즉시 출력(인쇄)할 수 있습니다.<br><br>
           작성된 보고서는 서명란을 확인한 후 매달 마지막 주 금요일까지 각 반 역사 과목 담당 교사에게 물리 인쇄본으로 제출해 주시기 바랍니다.<br>
           보고서는 생활기록부의 창의적 체험활동 및 교과 세특 기록 증빙 자료로 활용되오니 성실히 작성바랍니다.`
  },
  2: {
    tag: "모집",
    title: "여름방학 '찬란한 역사 탐방 동아리' 신입 부원 선발",
    author: "역사동아리",
    date: "2026-06-10",
    body: `대한역사문화고등학교 자율동아리 <strong>'찬란한 역사 탐방반'</strong>에서 함께 공부할 신입 부원을 선발합니다.<br><br>
           저희 동아리는 우리 땅의 찬란한 문화유산과 조상들의 지혜를 탐구하고 현장 답사 활동을 벌이는 학술 동아리입니다.<br><br>
           • 모집 대상: 1, 2학년 재학생 중 한국사 및 고건축, 고고학에 관심이 많은 학생<br>
           • 주요 활동: 여름방학 중 경주 및 공주 유적지 직접 답사, 보고서 공유회, 아카이브 개선 활동<br>
           • 신청 기한: 2026년 6월 25일(목) 17:00까지<br>
           • 신청 방법: 본동 3층 역사 교과실 동아리 회장에게 지원서 제출`
  },
  3: {
    tag: "안내",
    title: "경주 신라 역사 유적지 야간 개장 견학 및 학생 안전 지도",
    author: "학생안전부",
    date: "2026-06-08",
    body: `경주 대릉원 및 첨성대 일대 야간 개장 실시에 따른 자율적 야간 답사 시 안전 수칙을 공지합니다.<br><br>
           최근 야간 견학 시 안전사고 예방을 위해 아래 수칙을 반드시 엄수해 주시기 바랍니다.<br><br>
           1. 야간 야외 활동 시 반드시 3인 이상 동행하여 개인행동을 삼가야 합니다.<br>
           2. 보호구역 및 미개방 잔디밭, 문화재 석축 위로 올라가는 행위는 문화재 보호법에 의거하여 금지되며 위험합니다.<br>
           3. 차량 통행이 빈번한 대릉원 삼거리 및 월성 주변 이동 시 인도를 사용하고 반드시 신호를 준수하십시오.<br>
           4. 비상 상황 발생 시 즉시 인솔 교사 또는 학생안전부(02-1234-5678)로 연락바랍니다.`
  },
  4: {
    tag: "교육",
    title: "온라인 학습방 '골든벨 역사 퀴즈' 및 수료증 발급 개시",
    author: "평가관리실",
    date: "2026-06-05",
    body: `온라인 역사 지식 평가를 위한 '역사 상식 골든벨 퀴즈' 시스템이 오픈되었습니다.<br><br>
           학생 여러분은 본 홈페이지 상단의 <strong>'온라인 학습방'</strong>으로 접속하여, 수록된 6개 대표 유적지에 관한 과학적/역사적 기본 상식을 푸는 퀴즈에 참여할 수 있습니다.<br><br>
           5문항을 모두 맞추어 <strong>100점 만점</strong>을 획득하면 성명을 기재한 후, 대한역사문화고등학교장 명의의 <strong>디지털 역사 탐방 수료증</strong>을 인쇄하실 수 있습니다.<br>
           평가 기회는 제한이 없으니 만점을 달성할 때까지 적극적으로 도전해 보시길 권장합니다.`
  }
};

// 골든벨 퀴즈 문항 목록
const quizQuestions = [
  {
    q: "경주 첨성대에 사용된 돌의 개수(약 365개)는 주로 무엇을 상징할까요?",
    options: ["1년의 날수", "신라 왕조의 국왕 수", "27대 선덕여왕의 연세", "당시 신라의 행정 구역 수"],
    answer: 0
  },
  {
    q: "1971년 배수로 공사 도중 아주 우연히 발견되었으며, 백제 시대 고분 중 무덤의 주인공이 확실하게 밝혀진 벽돌무덤은 무엇인가요?",
    options: ["경주 천마총", "서울 석촌동 고분", "공주 무령왕릉", "합천 해인사 고분"],
    answer: 2
  },
  {
    q: "해인사 장경판전 바닥의 흙 속에 목판 보존을 위해 습도 조절용으로 다져 넣은 물질이 아닌 것은 무엇인가요?",
    options: ["숯", "소금", "횟가루", "모래"],
    answer: 3
  },
  {
    q: "1395년 태조 이성계에 의해 창건되었으며, 조선 왕조의 법궁(첫 번째 정궁) 역할을 한 궁궐은 어디인가요?",
    options: ["창덕궁", "덕수궁", "경복궁", "창경궁"],
    answer: 2
  },
  {
    q: "수원 화성 성곽을 축조할 때, 무거운 돌을 적은 힘으로 들어 올려 공사 기간과 비용을 대폭 단축시킨 정약용의 대표 발명품은 무엇인가요?",
    options: ["거중기와 유형거", "측우기와 수표", "자격루와 앙부일구", "혼천의와 간의"],
    answer: 0
  }
];

let activeHeritage = heritageData[0];
let activeRouteKey = "ktx";

// DOM 요소 참조
const elements = {
  cardGrid: document.getElementById("card-grid"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  modal: document.getElementById("detail-modal"),
  modalClose: document.getElementById("modal-close"),

  // 모달 내부 상세 필드
  heritagePeriod: document.getElementById("detail-period"),
  heritageName: document.getElementById("detail-name"),
  heritageTitle: document.getElementById("detail-title"),
  heritageDesc: document.getElementById("detail-desc"),
  heritageSpec: document.getElementById("detail-spec"),
  heritageHighlights: document.getElementById("detail-highlights-list"),

  // 탭 관련
  tabButtons: document.querySelectorAll(".tab-btn"),
  tabContents: document.querySelectorAll(".tab-content"),

  // 길 찾기 관련
  routeStartSelect: document.getElementById("route-start-select"),
  routeDuration: document.getElementById("route-duration"),
  routeSummary: document.getElementById("route-summary"),
  routeSteps: document.getElementById("route-steps"),
  svgMapPath: document.getElementById("svg-map-path"),
  svgMapNodes: document.getElementById("svg-map-nodes"),
  svgMarker: document.getElementById("svg-marker"),
  svgMarkerPulse: document.getElementById("svg-marker-pulse")
};

// 사이트 초기화
function init() {
  renderCards("all");
  setupEventListeners();
  handleSectionRouting();
  setupNoticeModal();
  setupFieldTripPage();
  setupQuiz();
  setupReportGenerator();
}

// 문화유산 카드 렌더링
function renderCards(filter) {
  elements.cardGrid.innerHTML = "";

  const filteredData = filter === "all"
    ? heritageData
    : heritageData.filter(h => h.periodEng === filter);

  filteredData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "heritage-card";
    card.id = `card-${item.id}`;
    card.setAttribute("tabindex", "0");
    card.style.animationDelay = `${index * 0.08}s`;

    // 시대별 뱃지 스타일 매핑
    let periodBadgeColor = "badge-three-kingdoms";
    if (item.periodEng === "goryeo") periodBadgeColor = "badge-goryeo";
    if (item.periodEng === "joseon") periodBadgeColor = "badge-joseon";

    card.innerHTML = `
      <div class="card-image-placeholder" style="background-image: url('${item.image}'); background-size: cover; background-position: center; border-bottom: 1px solid var(--border-color); height: 160px; position: relative;">
        <div class="card-bg-glow"></div>
        <span class="chinese-char" style="position: absolute; font-family: 'Cinzel', serif; font-size: 54px; font-weight: 700; color: rgba(255, 255, 255, 0.06); top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;">
          ${item.name.split(" ").pop().replace("(", "").replace(")", "")}
        </span>
      </div>
      <div class="card-content">
        <div class="card-header-row">
          <span class="period-badge ${periodBadgeColor}">${item.period}</span>
          <span class="card-location"><i class="fas fa-map-marker-alt"></i> ${item.location.split(" ")[0]} ${item.location.split(" ")[1]}</span>
        </div>
        <h3 class="card-title">${item.name.split(" ")[1] || item.name}</h3>
        <p class="card-subtitle">${item.title}</p>
        <div class="card-footer">
          <span class="explore-btn">자세히 탐방하기 <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    `;

    // 클릭 이벤트 추가
    card.addEventListener("click", () => openDetailModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetailModal(item);
      }
    });

    elements.cardGrid.appendChild(card);
  });
}

// 이벤트 리스너 바인딩
function setupEventListeners() {
  // 시대별 필터 버튼 클릭
  elements.filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.period);
    });
  });

  // 모달 닫기
  elements.modalClose.addEventListener("click", closeDetailModal);
  window.addEventListener("click", (e) => {
    if (e.target === elements.modal) {
      closeDetailModal();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && elements.modal.classList.contains("active")) {
      closeDetailModal();
    }
  });

  // 모달 내 탭 전환
  elements.tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.tabButtons.forEach(b => b.classList.remove("active"));
      elements.tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const activeTabId = `tab-${btn.dataset.tab}`;
      document.getElementById(activeTabId).classList.add("active");

      // 길 찾기 탭 활성화 시 맵 애니메이션 리셋 및 실행
      if (btn.dataset.tab === "directions") {
        setTimeout(animateRoute, 100);
      }
    });
  });

  // 출발지 선택 변경
  elements.routeStartSelect.addEventListener("change", (e) => {
    activeRouteKey = e.target.value;
    updateRouteDetails();
    animateRoute();
  });

  // 홈 배너 버튼들 바인딩
  document.getElementById("btn-explore-now").addEventListener("click", (e) => {
    e.preventDefault();
    const navItem = document.querySelector("#main-nav .nav-item[data-target='archive']");
    if (navItem) navItem.click();
  });

  document.getElementById("btn-go-quiz-directly").addEventListener("click", (e) => {
    e.preventDefault();
    const navItem = document.querySelector("#main-nav .nav-item[data-target='learning']");
    if (navItem) navItem.click();
  });

  document.getElementById("btn-go-report").addEventListener("click", (e) => {
    e.preventDefault();
    const navItem = document.querySelector("#main-nav .nav-item[data-target='learning']");
    if (navItem) navItem.click();
  });

  // 이달의 추천 유산 자세히 보기
  document.querySelectorAll(".btn-featured-go").forEach(btn => {
    btn.addEventListener("click", () => {
      const heritageId = btn.dataset.heritageId;
      const item = heritageData.find(h => h.id === heritageId);
      if (item) {
        openDetailModal(item);
      }
    });
  });
}

// 상세 정보 모달 열기
function openDetailModal(item) {
  activeHeritage = item;
  activeRouteKey = "ktx"; // 기본값

  // 데이터 연동
  elements.heritagePeriod.innerText = item.period;
  elements.heritagePeriod.className = `period-badge badge-${item.periodEng}`;
  elements.heritageName.innerText = item.name;
  elements.heritageTitle.innerText = item.title;
  elements.heritageDesc.innerText = item.desc;
  elements.heritageSpec.innerText = item.spec;

  // 주요 하이라이트 렌더링
  elements.heritageHighlights.innerHTML = "";
  item.highlights.forEach(h => {
    const li = document.createElement("li");
    const parts = h.split(":");
    if (parts.length > 1) {
      li.innerHTML = `<strong>${parts[0]}:</strong>${parts[1]}`;
    } else {
      li.innerText = h;
    }
    elements.heritageHighlights.appendChild(li);
  });

  // 찾아가는 길 셀렉트 옵션 빌드
  elements.routeStartSelect.innerHTML = "";
  Object.keys(item.routes).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.text = item.routes[key].startName;
    elements.routeStartSelect.appendChild(option);
  });
  elements.routeStartSelect.value = activeRouteKey;

  // 탭 기본값 설정 (첫 번째 탭 활성화)
  elements.tabButtons.forEach((b, idx) => {
    if (idx === 0) b.classList.add("active");
    else b.classList.remove("active");
  });
  elements.tabContents.forEach((c, idx) => {
    if (idx === 0) c.classList.add("active");
    else c.classList.remove("active");
  });

  updateRouteDetails();

  // 모달 표시
  elements.modal.classList.add("active");
  document.body.style.overflow = "hidden"; // 배경 스크롤 차단
}

// 상세 정보 모달 닫기
function closeDetailModal() {
  elements.modal.classList.remove("active");
  document.body.style.overflow = ""; // 스크롤 복원

  // SVG 내용 초기화
  elements.svgMapPath.removeAttribute("d");
  elements.svgMapNodes.innerHTML = "";
}

// 길 찾기 탭 데이터 갱신
function updateRouteDetails() {
  const route = activeHeritage.routes[activeRouteKey];
  if (!route) return;

  elements.routeDuration.innerText = route.duration;
  elements.routeSummary.innerText = route.summary;

  // 경로 단계별 가이드 빌드
  elements.routeSteps.innerHTML = "";
  route.steps.forEach((step, idx) => {
    const li = document.createElement("li");
    li.className = `step-item ${step.type}`;

    let icon = "fa-route";
    if (step.type === "bus") icon = "fa-bus";
    if (step.type === "subway") icon = "fa-subway";
    if (step.type === "transfer") icon = "fa-exchange-alt";
    if (step.type === "walk") icon = "fa-walking";

    li.innerHTML = `
      <div class="step-num">${idx + 1}</div>
      <div class="step-icon-wrapper">
        <i class="fas ${icon}"></i>
      </div>
      <div class="step-content">
        <div class="step-title-row">
          ${step.line ? `<span class="step-line-badge ${step.type}">${step.line}</span>` : ""}
          ${step.dur ? `<span class="step-dur">${step.dur}</span>` : ""}
        </div>
        <p class="step-desc">${step.desc}</p>
      </div>
    `;
    elements.routeSteps.appendChild(li);
  });
}

// SVG 인터랙티브 맵 드로잉 및 경로 애니메이션
function animateRoute() {
  const route = activeHeritage.routes[activeRouteKey];
  if (!route || !route.mapNodes) return;

  // 1. 노드 및 라인 생성
  const nodes = route.mapNodes;

  // 패스 데이터 구축 (Smooth Cubic Bezier 또는 Linear)
  let d = `M ${nodes[0].x} ${nodes[0].y}`;
  for (let i = 1; i < nodes.length; i++) {
    d += ` L ${nodes[i].x} ${nodes[i].y}`;
  }

  elements.svgMapPath.setAttribute("d", d);

  // 2. 패스 애니메이션 초기화 (다시 그리기 효과)
  const pathLength = elements.svgMapPath.getTotalLength();
  elements.svgMapPath.style.strokeDasharray = pathLength;
  elements.svgMapPath.style.strokeDashoffset = pathLength;

  // 강제 리플로우 유도
  elements.svgMapPath.getBoundingClientRect();

  // 패스 그리기 애니메이션 실행
  elements.svgMapPath.style.transition = "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)";
  elements.svgMapPath.style.strokeDashoffset = "0";

  // 3. 지도 위에 장소 노드(원 및 이름 라벨) 렌더링
  elements.svgMapNodes.innerHTML = "";
  nodes.forEach((node, idx) => {
    const isStart = idx === 0;
    const isEnd = idx === nodes.length - 1;

    // 그룹 엘리먼트
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", `map-node-group ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''}`);
    g.style.animationDelay = `${idx * 0.3}s`;

    // 배경 서클
    const circleBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleBg.setAttribute("cx", node.x);
    circleBg.setAttribute("cy", node.y);
    circleBg.setAttribute("r", isEnd ? "12" : isStart ? "10" : "8");
    circleBg.setAttribute("class", "node-circle-bg");
    g.appendChild(circleBg);

    // 전경 서클 (실제 색상 원)
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", isEnd ? "8" : isStart ? "6" : "4");
    circle.setAttribute("class", "node-circle");
    g.appendChild(circle);

    // 텍스트 라벨
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y - (isEnd ? 18 : 14));
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("class", "node-label");
    text.textContent = node.name;
    g.appendChild(text);

    elements.svgMapNodes.appendChild(g);
  });

  // 4. 도착 지점 핀(Marker) 애니메이션 위치 설정
  const endNode = nodes[nodes.length - 1];
  elements.svgMarker.setAttribute("cx", endNode.x);
  elements.svgMarker.setAttribute("cy", endNode.y);
  elements.svgMarkerPulse.setAttribute("cx", endNode.x);
  elements.svgMarkerPulse.setAttribute("cy", endNode.y);
}

// ----------------------------------------------------
// 신규 웹 기능 로직 (학교 홈페이지용 라우터 및 학생 상호작용 피처)

// 1. 헤더 메뉴 섹션 라우팅
function handleSectionRouting() {
  const navItems = document.querySelectorAll("#main-nav .nav-item");
  const sections = document.querySelectorAll(".page-section");

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = item.dataset.target;

      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      sections.forEach(section => {
        section.classList.remove("active");
        setTimeout(() => {
          if (!section.classList.contains("active")) {
            section.style.display = "none";
          }
        }, 300); // CSS 트랜지션 이후 보이지 않도록 함
      });

      const activeSection = document.getElementById(`section-${target}`);
      activeSection.style.display = "block";
      setTimeout(() => {
        activeSection.classList.add("active");
      }, 50);

      // 현장 탐방 탭 이동 시 맵 시뮬레이션 및 데이터 로드 자동 기동
      if (target === "field-trip") {
        updateTripRouteDetails();
        setTimeout(animateTripRoute, 250);
      }
    });
  });
}

// 2. 홈 공지사항 상세 보기 모달 바인딩
function setupNoticeModal() {
  const noticeItems = document.querySelectorAll(".notice-item");
  const noticeModal = document.getElementById("notice-modal");
  const noticeClose = document.getElementById("notice-modal-close");

  noticeItems.forEach(item => {
    item.addEventListener("click", () => {
      const noticeId = item.dataset.noticeId;
      const notice = noticesData[noticeId];
      if (!notice) return;

      document.getElementById("notice-detail-tag").innerText = notice.tag;
      document.getElementById("notice-detail-tag").className = `notice-detail-tag notice-${notice.tag === "공지" ? "important" : "normal"}`;
      document.getElementById("notice-detail-title").innerText = notice.title;
      document.getElementById("notice-detail-author").innerText = notice.author;
      document.getElementById("notice-detail-date").innerText = notice.date;
      document.getElementById("notice-detail-body").innerHTML = notice.body;

      noticeModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  noticeClose.addEventListener("click", () => {
    noticeModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  noticeModal.addEventListener("click", (e) => {
    if (e.target === noticeModal) {
      noticeModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// 3. 현장 탐방 안내 페이지 데이터 로직 & SVG
let tripActiveHeritage = heritageData[0];
let tripActiveRouteKey = "ktx";

function setupFieldTripPage() {
  const destSelect = document.getElementById("trip-destination-select");
  const startSelect = document.getElementById("trip-start-select");

  // 목적지 데이터 주입
  destSelect.innerHTML = "";
  heritageData.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name.split(" ")[1] || item.name;
    destSelect.appendChild(option);
  });

  function updateStartOptions() {
    const hId = destSelect.value;
    tripActiveHeritage = heritageData.find(h => h.id === hId);
    if (!tripActiveHeritage) return;

    startSelect.innerHTML = "";
    Object.keys(tripActiveHeritage.routes).forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = tripActiveHeritage.routes[key].startName;
      startSelect.appendChild(option);
    });

    tripActiveRouteKey = startSelect.value;
    updateTripRouteDetails();
    animateTripRoute();
  }

  destSelect.addEventListener("change", updateStartOptions);
  startSelect.addEventListener("change", () => {
    tripActiveRouteKey = startSelect.value;
    updateTripRouteDetails();
    animateTripRoute();
  });

  document.getElementById("btn-replay-trip-anim").addEventListener("click", animateTripRoute);

  // 최초 로드
  updateStartOptions();
}

function updateTripRouteDetails() {
  const route = tripActiveHeritage.routes[tripActiveRouteKey];
  if (!route) return;

  document.getElementById("trip-duration").innerText = route.duration;
  document.getElementById("trip-summary").innerText = route.summary;

  const stepsContainer = document.getElementById("trip-steps");
  stepsContainer.innerHTML = "";

  route.steps.forEach((step, idx) => {
    const li = document.createElement("li");
    li.className = `step-item ${step.type}`;

    let icon = "fa-route";
    if (step.type === "bus") icon = "fa-bus";
    if (step.type === "subway") icon = "fa-subway";
    if (step.type === "transfer") icon = "fa-exchange-alt";
    if (step.type === "walk") icon = "fa-walking";

    li.innerHTML = `
      <div class="step-num">${idx + 1}</div>
      <div class="step-content">
        <div class="step-title-row">
          ${step.line ? `<span class="step-line-badge ${step.type}">${step.line}</span>` : ""}
          ${step.dur ? `<span class="step-dur">${step.dur}</span>` : ""}
        </div>
        <p class="step-desc">${step.desc}</p>
      </div>
    `;
    stepsContainer.appendChild(li);
  });
}

function animateTripRoute() {
  const route = tripActiveHeritage.routes[tripActiveRouteKey];
  if (!route || !route.mapNodes) return;

  const svgPath = document.getElementById("trip-svg-map-path");
  const svgNodes = document.getElementById("trip-svg-map-nodes");
  const svgMarker = document.getElementById("trip-svg-marker");
  const svgMarkerPulse = document.getElementById("trip-svg-marker-pulse");

  const nodes = route.mapNodes;

  let d = `M ${nodes[0].x} ${nodes[0].y}`;
  for (let i = 1; i < nodes.length; i++) {
    d += ` L ${nodes[i].x} ${nodes[i].y}`;
  }

  svgPath.setAttribute("d", d);

  const pathLength = svgPath.getTotalLength();
  svgPath.style.strokeDasharray = pathLength;
  svgPath.style.strokeDashoffset = pathLength;

  svgPath.getBoundingClientRect();

  svgPath.style.transition = "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)";
  svgPath.style.strokeDashoffset = "0";

  svgNodes.innerHTML = "";
  nodes.forEach((node, idx) => {
    const isStart = idx === 0;
    const isEnd = idx === nodes.length - 1;

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", `map-node-group ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''}`);
    g.style.animationDelay = `${idx * 0.3}s`;

    const circleBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleBg.setAttribute("cx", node.x);
    circleBg.setAttribute("cy", node.y);
    circleBg.setAttribute("r", isEnd ? "12" : isStart ? "10" : "8");
    circleBg.setAttribute("class", "node-circle-bg");
    g.appendChild(circleBg);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", isEnd ? "8" : isStart ? "6" : "4");
    circle.setAttribute("class", "node-circle");
    g.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y - (isEnd ? 18 : 14));
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("class", "node-label");
    text.textContent = node.name;
    g.appendChild(text);

    svgNodes.appendChild(g);
  });

  const endNode = nodes[nodes.length - 1];
  svgMarker.setAttribute("cx", endNode.x);
  svgMarker.setAttribute("cy", endNode.y);
  svgMarkerPulse.setAttribute("cx", endNode.x);
  svgMarkerPulse.setAttribute("cy", endNode.y);
}

// 4. 온라인 학습방 골든벨 퀴즈 로직
let quizIndex = 0;
let quizScore = 0;

function setupQuiz() {
  const btnStart = document.getElementById("btn-start-quiz");
  const introBox = document.getElementById("quiz-intro-box");
  const playBox = document.getElementById("quiz-play-box");
  const resultBox = document.getElementById("quiz-result-box");
  const progressText = document.getElementById("quiz-progress");

  btnStart.addEventListener("click", () => {
    introBox.style.display = "none";
    playBox.style.display = "block";
    quizIndex = 0;
    quizScore = 0;
    loadQuizQuestion();
  });

  function loadQuizQuestion() {
    const currentQ = quizQuestions[quizIndex];
    progressText.innerText = `문항 ${quizIndex + 1} / ${quizQuestions.length}`;

    document.getElementById("quiz-q-num").innerText = `Q${quizIndex + 1}.`;
    document.getElementById("quiz-q-text").innerText = currentQ.q;

    const optionsDiv = document.getElementById("quiz-q-options");
    optionsDiv.innerHTML = "";

    currentQ.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = `${idx + 1}. ${opt}`;

      btn.addEventListener("click", () => {
        // 옵션 클릭 시 비활성화
        const btns = optionsDiv.querySelectorAll(".option-btn");
        btns.forEach(b => b.disabled = true);

        btn.classList.add("selected");
        const isCorrect = idx === currentQ.answer;

        if (isCorrect) {
          btn.classList.add("correct-feedback");
          quizScore += 20;
        } else {
          btn.classList.add("wrong-feedback");
          btns[currentQ.answer].classList.add("correct-feedback");
        }

        setTimeout(() => {
          quizIndex++;
          if (quizIndex < quizQuestions.length) {
            loadQuizQuestion();
          } else {
            showQuizResults();
          }
        }, 1200);
      });

      optionsDiv.appendChild(btn);
    });
  }

  function showQuizResults() {
    playBox.style.display = "none";
    resultBox.style.display = "block";
    progressText.innerText = "평가 완료";

    document.getElementById("quiz-score").innerText = quizScore;
    const msg = document.getElementById("quiz-result-msg");
    const certForm = document.getElementById("certificate-issuance-form");
    const retryBox = document.getElementById("quiz-retry-box");

    if (quizScore === 100) {
      msg.innerHTML = "축하합니다! 5문항 모두 맞추며 '골든벨 역사왕'에 등극하였습니다.<br>이름을 입력하여 수료증을 인쇄하세요.";
      certForm.style.display = "block";
      retryBox.style.display = "none";
    } else {
      msg.innerHTML = `아쉽게도 ${quizScore}점을 기록했습니다. (100점 만점)<br>문화재 해설과 자료를 다시 공부하고 만점에 도전해 보세요!`;
      certForm.style.display = "none";
      retryBox.style.display = "block";
    }
  }

  // 재도전
  document.getElementById("btn-retry-quiz").addEventListener("click", () => {
    resultBox.style.display = "none";
    document.getElementById("certificate-display-card").style.display = "none";
    introBox.style.display = "block";
    progressText.innerText = "준비 단계";
  });

  // 수료증 수여 버튼
  document.getElementById("btn-issue-cert").addEventListener("click", () => {
    const studentName = document.getElementById("cert-student-name").value.trim();
    if (!studentName) {
      alert("수료증에 서명될 학생 성명을 작성해 주세요.");
      return;
    }

    document.getElementById("cert-name-val").innerText = studentName;
    const randomNo = Math.floor(Math.random() * 8999) + 1000;
    document.getElementById("cert-no-val").innerText = `제 2026-${randomNo} 호`;

    const now = new Date();
    document.getElementById("cert-date-val").innerText = `${now.getFullYear()}년 ${String(now.getMonth() + 1).padStart(2, '0')}월 ${String(now.getDate()).padStart(2, '0')}일`;

    resultBox.style.display = "none";
    document.getElementById("certificate-display-card").style.display = "block";
  });

  // 수료증 인쇄 트리거
  document.getElementById("btn-print-certificate").addEventListener("click", () => {
    const certFrame = document.querySelector(".certificate-inner-frame").cloneNode(true);
    certFrame.classList.add("certificate-print-layout");

    const printable = document.getElementById("printable-area");
    printable.innerHTML = "";
    printable.appendChild(certFrame);

    window.print();
  });
}

// 5. 창의적 체험활동 보고서 작성 로직
function setupReportGenerator() {
  const destSelect = document.getElementById("rep-destination");

  // 셀렉트 채우기
  destSelect.innerHTML = "";
  heritageData.forEach(h => {
    const option = document.createElement("option");
    option.value = h.id;
    option.textContent = h.name;
    destSelect.appendChild(option);
  });

  document.getElementById("btn-print-report").addEventListener("click", () => {
    const grade = document.getElementById("rep-grade").value;
    const classVal = document.getElementById("rep-class").value;
    const num = document.getElementById("rep-number").value;
    const name = document.getElementById("rep-name").value.trim();
    const date = document.getElementById("rep-date").value;
    const heritageId = destSelect.value;
    const content = document.getElementById("rep-content").value.trim();

    const matchedHeritage = heritageData.find(h => h.id === heritageId);

    if (!grade || !classVal || !num || !name || !date || !content) {
      alert("보고서 학적 사항과 체험 학습 소감을 빠짐없이 기재해 주시기 바랍니다.");
      return;
    }

    // 인쇄용 HTML 조합
    const reportHtml = `
      <div class="report-print-layout">
        <div class="print-header">
          <h2>창의적 체험활동 보고서</h2>
        </div>
        <table class="print-table">
          <tr>
            <th>소속 학급</th>
            <td>${grade}학년 ${classVal}반 ${num}번</td>
            <th>성 명</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>탐방 일시</th>
            <td>${date}</td>
            <th>탐방 장소</th>
            <td>${matchedHeritage.name}</td>
          </tr>
        </table>
        <div class="print-content-box">
          <div class="print-content-title">■ 배운 점 및 느낀 점 (창의적 소감)</div>
          <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.8;">${content}</p>
        </div>
        <div class="print-footer" style="margin-top: 50px; text-align: center;">
          <p style="font-size: 16px; font-weight: bold; letter-spacing: 2px;">위와 같이 창의적 체험활동 보고서를 제출합니다.</p>
          <p style="font-size: 14px; margin-top: 20px;">2026년 06월 15일</p>
          <p style="font-size: 14px; margin-top: 10px; text-align: right; padding-right: 40px;">제출인: ${name} (서명)</p>
          <p style="font-size: 18px; font-weight: bold; letter-spacing: 4px; margin-top: 60px;">대한역사문화고등학교장 귀하</p>
        </div>
      </div>
    `;

    const printable = document.getElementById("printable-area");
    printable.innerHTML = reportHtml;

    window.print();
  });
}

// 돔 로드 시 앱 초기화
document.addEventListener("DOMContentLoaded", init);
