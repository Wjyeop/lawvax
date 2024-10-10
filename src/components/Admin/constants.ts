import { ReactComponent as People } from "../../assets/images/ic_admin_people.svg";
import { ReactComponent as List } from "../../assets/images/ic_admin_list.svg";
import { ReactComponent as Box } from "../../assets/images/ic_admin_box.svg";
import { ReactComponent as NewsLetter } from "../../assets/images/ic_admin_newsletter.svg";

export const MANAGEMENT_TAB_CONTENTS = [
  {
    Icon: People,
    label: "구성원 관리",
    link: "/admin/people-management",
    extraLink: "/admin/people-register",
  },
  {
    Icon: List,
    label: "업무분야 관리",
    link: "/admin/work-category-manegement",
  },
  {
    Icon: Box,
    label: "게시글 관리",
    link: "/admin/post-manegement",
  },
  {
    Icon: NewsLetter,
    label: "뉴스레터 관리",
    link: "/admin/news-letter-manegement",
  },
];

export const NEWS_LETTER_TAB_CONTENTS = {
  전체보기: 3,
  형사: 1,
  "민사 · 행정 · 가사": 1,
  "금융 · 가상자산": 0,
  "기업 자문 · 감사 대행": 1,
  "IT · 첨단 · 기술보호 · 개인정보": 0,
  "조세 · 관세 · 공정거래": 0,
  "기업 M&A · 구조조정 · 회생": 0,
  "건설 · 부동산": 0,
  "조선 · 해운": 0,
  "방산 · 우주항공": 0,
  "기업 감사/내부통제 지원센터": 0,
  "기술 보호 센터": 0,
  비공개: 0,
};

export const NEWS_LETTER_LIST_CONTENTS = {
  totalCount: 3,
  newsletterList: [
    {
      id: 3,
      creator: "로백스",
      title: "[소식]글로벌 항공우주산업 학회 세미나 개최",
      category: "기업 자문 · 감사 대행",
      createdAt: "2024-09-12T17:52:05",
    },
    {
      id: 2,
      creator: "로백스",
      title: "[소식]글로벌 항공우주산업 학회 세미나 개최",
      category: "민사 · 행정 · 가사",
      createdAt: "2024-09-12T17:51:54",
    },
    {
      id: 1,
      creator: "로백스",
      title: "[소식]글로벌 항공우주산업 학회 세미나 개최",
      category: "형사",
      createdAt: "2024-09-12T17:50:55",
    },
  ],
};

export const POST_TAB_CONTENT = {
  전체보기: 253,
  Lawvax소식: 0,
  언론보도: 253,
  인재영입: 0,
  비공개: 0,
};

export const POST_LIST_CONTENT = {
  totalCount: 253,
  newsList: [
    {
      id: 480,
      creator: "로백스",
      title: "법무법인 로백스, 중견기업연합회와 기술보호협력 방안 모색",
      category: "언론보도",
      createdAt: "2023-03-30T14:55:34",
    },
    {
      id: 479,
      creator: "로백스",
      title: "\t법무법인 로백스, 세계보안엑스포(SECON) 통해 무료법률상담 진행",
      category: "언론보도",
      createdAt: "2023-03-30T14:55:20",
    },
    {
      id: 478,
      creator: "로백스",
      title: "현대모비스, 정의선 사내이사 재선임…현대제철·위아도 원안대로",
      category: "언론보도",
      createdAt: "2023-03-30T14:55:06",
    },
    {
      id: 477,
      creator: "로백스",
      title:
        '"산업기술 애로, 저희에게 맡기세요" 한국산업기술보호協 법률자문단 출범',
      category: "언론보도",
      createdAt: "2023-03-30T14:54:56",
    },
    {
      id: 476,
      creator: "로백스",
      title: "법무법인 로백스, 中企와 상생행보",
      category: "언론보도",
      createdAt: "2023-03-30T14:54:36",
    },
    {
      id: 475,
      creator: "로백스",
      title: "정의선, 현대모비스 사내이사 재선임…조성환 사장 ",
      category: "언론보도",
      createdAt: "2023-03-30T14:53:39",
    },
    {
      id: 474,
      creator: "로백스",
      title:
        "기업 ‘甲’, 회계법인 ‘乙’…한국판 ‘엔론 사태’ 도돌이표 [김기동의 이슈&로]",
      category: "언론보도",
      createdAt: "2023-03-30T14:53:25",
    },
    {
      id: 473,
      creator: "로백스",
      title: "김현준 ‘세무법인’, 김대지 ‘로펌’ 택했다…전직 국세청장의 새출발",
      category: "언론보도",
      createdAt: "2023-03-30T14:53:01",
    },
    {
      id: 472,
      creator: "로백스",
      title: "[논단]금융혁신의 새 지평 '토큰증권'에 대한 기대",
      category: "언론보도",
      createdAt: "2023-03-30T14:52:48",
    },
  ],
};

export const WORK_CATEGORY_CONTENT = [
  "형사",
  "민사 · 행정 · 가사",
  "금융 · 가상자산",
  "건설 · 부동산",
  "IT · 첨단 · 기술보호 · 개인정보",
  "기업 자문 · 감사 대행",
  "조세 · 관세 · 공정거래",
  "기업 M&A · 구조조정 · 회생",
  "조선 · 해운",
  "방산 · 우주항공",
];

export const WORK_POSITION_LIST = [
  "대표 변호사",
  "파트너 변호사",
  "변호사",
  "고문",
];

export const MAIN_TASKS_LIST = [
  "형사",
  "민사·행정·가사",
  "금융·가상자산",
  "기업 자문·감사 대행",
  "IT·첨단·기술보호·개인정보",
  "조세·관세·공정거래",
  "기업 M&A·구조조정·회생",
  "건설·부동산",
  "조선·해운",
  "방산·우주항공",
];

export const ADD_TASKS_LIST = ["기업 감사/내부통제 센터", "기술보호센터"];
