interface Item {
  startYear: string;
  endYear?: string;
  content: string;
}

interface Profile {
  lawyerId: number;
  nameKo: string;
  nameEn: string;
  nameCh: string;
  workNumber: string;
  faxNumber: string;
  email: string;
  introduction: string;
  position: string;
  mainImg: string;
  subImg: string;
  isVisible: boolean;
  isHired: boolean;
  language: string;
  isCorporateWorkField: boolean;
  isFinanceWorkField: boolean;
  isItWorkField: boolean;
  isCenter1Member: boolean;
  isCenter2Member: boolean;
  careers: Item[];
  educations: Item[];
  handleCases: Item[];
  licenses: Item[];
  etcWorkFields: Item[];
}

export const profileData: Profile = {
  lawyerId: 1,
  nameKo: "김기동",
  nameEn: "Ki-Dong Kim",
  nameCh: "金基東",
  workNumber: "02-583-6300",
  faxNumber: "02-583-6303",
  email: "kdong@lawvax.co.kr",
  introduction:
    "초임검사 시절부터 검사장으로 퇴직할 때까지 25여 년간 검사 생활의 대부분을 특수부, 강력부 등 일선 수사부서에서 기업·금융 반부패 수사 업무에 종사해 왔으며, 특히 「원전비리수사단장」, 「대검찰청 방위사업비리 합동수사단장」, 「대검찰청 부패범죄특별수사단장」, 서울중앙지검 특수1부장·특수3부장을 비롯한 중요 수사부서의 책임자를 도맡아 하는 등 특별한 경력을 가지고 있습니다. 2019년 8월부터 약 2년 6개월간 변호사로 활동해 오면서도, 삼성전자 이재용 부회장 변론을 비롯하여 많은 기업 사건 변론에 맡아 오는 등 기업·금융 사건 변호사로 활발하게 활동하고 있습니다.",
  position: "대표변호사",
  mainImg: "6JGgqpXodeisOnBzHygQXg.jpeg",
  subImg: "",
  isVisible: true,
  isHired: false,
  language: "한국어 및 영어",
  isCorporateWorkField: true,
  isFinanceWorkField: false,
  isItWorkField: false,
  isCenter1Member: false,
  isCenter2Member: true,
  careers: [
    {
      startYear: "1989",
      endYear: "",
      content: "제 31회 사법시험 합격",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1992",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1993",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
    {
      startYear: "1994",
      endYear: "",
      content: "사법연수원 수료(제21기)",
    },
  ],
  educations: [
    {
      startYear: "1983",
      endYear: "",
      content: "부산 혜과고등학교 졸업",
    },
    {
      startYear: "1983",
      endYear: "",
      content: "부산 혜과고등학교 졸업",
    },
    {
      startYear: "1983",
      endYear: "",
      content: "부산 혜과고등학교 졸업",
    },
    {
      startYear: "1983",
      endYear: "",
      content: "부산 혜과고등학교 졸업",
    },
    {
      startYear: "2005",
      endYear: "",
      content: "영국 University College London 대학 방문연구자과정",
    },
  ],
  handleCases: [
    {
      startYear: "2021",
      endYear: "",
      content: "제일모직과 삼성물산 합병 등 사건 관련 이재용 회장 변론",
    },
    {
      startYear: "2023",
      endYear: "2024",
      content: "태광그룹 감사업무 대행 및 고소·고발 대리",
    },
    {
      startYear: "2023",
      endYear: "2024",
      content: "태광그룹 감사업무 대행 및 고소·고발 대리",
    },
    {
      startYear: "2023",
      endYear: "2024",
      content: "태광그룹 감사업무 대행 및 고소·고발 대리",
    },
    {
      startYear: "2023",
      endYear: "2024",
      content: "태광그룹 감사업무 대행 및 고소·고발 대리",
    },
  ],
  licenses: [
    {
      content: "이코노미스트, 법률신문, 아시아경제 등 칼럼 게재",
      startYear: "",
    },
  ],
  etcWorkFields: [
    {
      content: "형사사건",
      startYear: "",
    },
    {
      content: "금융사건",
      startYear: "",
    },
    {
      content: "기업 감사 내부통제 지원",
      startYear: "",
    },
  ],
};
