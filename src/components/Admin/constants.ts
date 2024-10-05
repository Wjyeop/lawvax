import { ReactComponent as People } from "../../assets/images/ic_admin_people.svg";
import { ReactComponent as List } from "../../assets/images/ic_admin_list.svg";
import { ReactComponent as Box } from "../../assets/images/ic_admin_box.svg";
import { ReactComponent as NewsLetter } from "../../assets/images/ic_admin_newsletter.svg";

export const MANAGEMENT_TAB_CONTENTS = [
  {
    Icon: People,
    label: "구성원 관리",
    link: "/admin/people-management",
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
