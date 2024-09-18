import { useState } from "react";
import img from "../../assets/images/images";
import icons from "../../assets/images/icons/icons";
import main01 from "../../assets/images/CenterMain01.png";
import main02 from "../../assets/images/CenterMain02.png";
import { lawyerList } from "../../const/lawyerList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SupportCenterPage = () => {
  const [activeTab, setActiveTab] = useState("소개");
  const [showAll, setShowAll] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  const visibleLawyers = showAll
    ? lawyerList
    : isMobile
      ? lawyerList.slice(0, 4) // 모바일에서는 4개만 표시
      : lawyerList.slice(0, 6); // 데스크탑에서는 6개만 표시

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="support-center-page">
      {isDesktop ? (
        <div className="main">
          <div className="text-wrap">
            <p>TO MANAGING ADVANCED THCH LEGAL RISKS</p>
            <h1>
              Technology
              <br /> Protection Center
            </h1>
          </div>
          <div className="img-wrap">
            <img src={main01} alt="" />
          </div>
        </div>
      ) : (
        <div className="main">
          <div className="text-wrap">
            <p>TO MANAGING ADVANCED THCH LEGAL RISKS</p>
            <h1>
              Technology
              <br /> Protection Center
            </h1>
          </div>
        </div>
      )}
      <div className="theme-select">
        <button
          className={activeTab === "소개" ? "active" : ""}
          onClick={() => {
            setActiveTab("소개");
            scrollToSection("section01");
          }}
        >
          소개
        </button>
        <button
          className={activeTab === "서비스소개" ? "active" : ""}
          onClick={() => {
            setActiveTab("서비스소개");
            scrollToSection("section02");
          }}
        >
          서비스 소개
        </button>
        <button
          className={activeTab === "조직도" ? "active" : ""}
          onClick={() => {
            setActiveTab("조직도");
            scrollToSection("section03");
          }}
        >
          조직도
        </button>
        <button
          className={activeTab === "구성원" ? "active" : ""}
          onClick={() => {
            setActiveTab("구성원");
            scrollToSection("section04");
          }}
        >
          구성원
        </button>
        <button
          className={activeTab === "뉴스레터" ? "active" : ""}
          onClick={() => {
            setActiveTab("뉴스레터");
            scrollToSection("section05");
          }}
        >
          뉴스레터
        </button>
      </div>
      {isDesktop ? (
        <div className="section01" id="section01">
          <div className="img-wrap">
            <img src={main02} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p1">개요</p>
            <h1>『LawVax 기술보호센터』</h1>
            <p className="p2">
              법무법인 LawVax는 중요성이 날로 커지고 있는
              <span className="bold">
                기업의 감사나 내부통제 업무를 전문적으로 지원하기 위해
              </span>
              <br />
              2024. 3. 「기업 감사/내부통제 지원센터(공동센터장
              김기동·이동열·김후곤 변호사)」를 설립하였습니다.
              <br />
              <br />
              지원센터는{" "}
              <span className="bold">검찰의 중요 수사부서 책임자</span>
              를 두루 거친 공동센터장들의 지휘하에 검찰, 국세청, 관세청,
              금융감독원,
              <br />
              공정거래위원회, 개인정보보호위원회 등 출신 40여 명의 최고
              전문가들이 <span className="bold">원팀(one team)</span>으로 업무를
              수행합니다.
              <br />
              <br /> {" "}
              <span className="bold">회계·세무법인과 협력관계를 구축</span>하여
              사안에 따라 필요한 회계·세무 전문인력을 업무에 투입하고 있습니다.
              <br />
              기업지배구조원(현 ESG기준원) 원장을 지낸
              <span className="bold">지배구조 및 ESG 전문가</span>인 조명현
              고려대 경영대 교수,
              <br />
              김대지 전 <span className="bold">국세청장</span>, 천홍욱 전
              <span className="bold">관세청장</span>은 자문위원으로서 업무
              전반에 대하여 자문해 주고 있습니다.
              <br />
              <br />
              <span className="bold">
                특히 기업 감사 등에 특화되어 개발된 포렌식 프로그램
              </span>
              을 사용하여 시간과 비용을 대폭 줄였습니다.
              <br />
              자료 반출 없이 기업 내에서 포렌식을 진행하고 감사 종료 시에는 기업
              관계자의 참여하에
              <br />
              포렌식 자료는 폐기하는 등
              <span className="bold">기업의 보안 유지</span>에도 빈틈이 없도록
              하고 있습니다.
              <br />
              <br />
              지원센터는
              <span className="bold">
                「감사 - 민·형사상 법적 조치 - 재발방지책 마련」
              </span>
              으로
              <span className="bold">이어지는 원스톱 서비스를 제공</span>합니다.
              <br />
               LawVax는 최근 태광그룹 계열사들에 대하여 감사를 진행하여 전
              경영진들의 중대한 비리를 적발,
              <br />
              고소·고발 조치를 완료하는 등 큰 성과를 거둔 바도 있습니다.
            </p>
          </div>
        </div>
      ) : (
        <div className="section01" id="section01">
          <div className="text-wrap">
            <p className="p1">개요</p>
            <h1>『LawVax 기술보호센터』</h1>
            <p className="p2">
              법무법인 LawVax는 중요성이 날로 커지고 있는
              <span className="bold">
                기업의 감사나 내부통제 업무를 전문적으로 지원하기 위해
              </span>
              <br />
              2024. 3. 「기업 감사/내부통제 지원센터(공동센터장
              김기동·이동열·김후곤 변호사)」를 설립하였습니다.
              <br />
              <br />
              지원센터는{" "}
              <span className="bold">검찰의 중요 수사부서 책임자</span>
              를 두루 거친 공동센터장들의 지휘하에 검찰, 국세청, 관세청,
              금융감독원,
              <br />
              공정거래위원회, 개인정보보호위원회 등 출신 40여 명의 최고
              전문가들이 <span className="bold">원팀(one team)</span>으로 업무를
              수행합니다.
              <br />
              <br /> {" "}
              <span className="bold">회계·세무법인과 협력관계를 구축</span>하여
              사안에 따라 필요한 회계·세무 전문인력을 업무에 투입하고 있습니다.
              <br />
              기업지배구조원(현 ESG기준원) 원장을 지낸
              <span className="bold">지배구조 및 ESG 전문가</span>인 조명현
              고려대 경영대 교수,
              <br />
              김대지 전 <span className="bold">국세청장</span>, 천홍욱 전
              <span className="bold">관세청장</span>은 자문위원으로서 업무
              전반에 대하여 자문해 주고 있습니다.
              <br />
              <br />
              <span className="bold">
                특히 기업 감사 등에 특화되어 개발된 포렌식 프로그램
              </span>
              을 사용하여 시간과 비용을 대폭 줄였습니다.
              <br />
              자료 반출 없이 기업 내에서 포렌식을 진행하고 감사 종료 시에는 기업
              관계자의 참여하에
              <br />
              포렌식 자료는 폐기하는 등
              <span className="bold">기업의 보안 유지</span>에도 빈틈이 없도록
              하고 있습니다.
              <br />
              <br />
              지원센터는
              <span className="bold">
                「감사 - 민·형사상 법적 조치 - 재발방지책 마련」
              </span>
              으로
              <span className="bold">이어지는 원스톱 서비스를 제공</span>합니다.
              <br />
               LawVax는 최근 태광그룹 계열사들에 대하여 감사를 진행하여 전
              경영진들의 중대한 비리를 적발,
              <br />
              고소·고발 조치를 완료하는 등 큰 성과를 거둔 바도 있습니다.
            </p>
          </div>
        </div>
      )}
      <h2 className="sub-title roman-title">Our Service</h2>
      {isDesktop ? (
        <div className="section02" id="section02">
          <div className="content">
            <div className="img-wrap">
              <img src={img.center01} alt="" />
            </div>
            <div className="text-wrap">
              <p className="p1">
                기업 내부감사와내부통제 <br />
                시스템의 변화가 필요한 이유
              </p>
              <p className="p2">
                 △ 이사의 감시의무를 강화하는 판례가 연이어 나오고 있어, <br />
                기업 내 엄격한 내부통제 시스템의 구축 필요성이 절실한
                시점입니다.
                <br />
                <br />  △ 각종 법령의 제·개정으로 대주주나 임직원의 업무 관련
                범죄시 <br />
                기업 리스크가 급증하고 있습니다.
                <br />
                <br />  △ 기업 내부 자체 감사만으로는 기업 내부 부정을
                적발하기에는 <br />
                현실적 한계와 어려움이 따릅니다.   <br />
                <br />△ 현재 기업들이 구축하고 있는 내부통제 시스템에는 미비점이
                많습니다.
              </p>
            </div>
          </div>
          <div className="content">
            <div className="text-wrap">
              <p className="p1">LawVax「기업 감사/내부통제 지원센터」의 강점</p>
              <p className="p2">
                1. 감사업무 대행 <br />
                <br />△ 특정 업무·부서·계열사 등 기업에서 위임한 범위 내에서
                감사를 실시합니다.       <br />- 감사부서와 함께 또는 독자적으로
                감사를 진행할 수 있습니다.     <br />
                <br />△ 감사업무 종료 시, 기업의 요청에 따라 감사 결과를
                서면으로 제공하고, 필요한 경우 고소·고발장, 소장 작성 등의
                업무도 수행하게 됩니다.   <br />
                <br />
                2. 내부통제 시스템 구축 자문     <br />
                <br />△ 판례에서 요구하는 ‘내부통제 시스템 구축의무’에
                부합할만한 시스템을 구축하여 대비하고 있는 기업은 많지 않습니다.
                     
                <br />- 지금까지는 주로 담합이나 분식회계 관련 사안이
                문제되었으나, 앞으로는 중대재해 처벌법, 개인정보보호법,
                자본시장법 등과 관련된 이슈 등도 문제될 것으로 예상됩니다.    {" "}
                <br />
                <br />△ LawVax의 컨설팅을 통해 합리적이고 효율적인 내부통제
                시스템을 구축할 수 있습니다.       <br />① 부서별 업무 및 관련
                규정을 검토하여 임직원이 준수해야 할 내부통제 기준을 수립하고,
                <br />② 임직원이 내부통제 기준을 숙지하고 이를 준수하도록
                정기적인 교육을 실시하며, <br />③ 모니터링 시스템을 구축하고,{" "}
                <br />④ 위법·부당행위 적발 시 이사회에 보고하여 위반직원에 대한
                제재와 시정을 요구하는 등 내부통제 시스템을 구축할 수 있습니다.
              </p>
            </div>
            <div className="img-wrap">
              <img src={img.center02} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="img-wrap">
              <img src={img.center03} alt="" />
            </div>
            <div className="text-wrap">
              <p className="p2">
                  3. 기업의 인수합병(M&A) 시 피인수 기업에 대한 심층 조사    {" "}
                <br />
                <br />△ M&A 과정에서 식별하지 못한 기업 부정 이슈가 발견되어
                소송이나 분쟁을 맞닥뜨리는 기업이 많습니다.     <br />
                <br />△ 인수 전 단계에서도 부정 발생 고위험 영역에 대한 조사
                업무(Due Diligence)를 수행하지만, 정보 제한으로 계약서상 진술
                보장에만 주로 의존하고 폭넓은 내부감사는 어렵습니다.     <br />
                <br />△ 인수 후 초기 단계에서 부정 이슈를 발견해야만 인수 대가의
                적정성을 다투기 위한 법적 근거로 활용할 수 있으므로, 최단시간 내
                피인수 기업에 대한 강도 높은 조사가 필요합니다.     <br />
                <br />△ 조사 결과는 내부통제 시스템 개선 자료로 활용할 수
                있으며, 위 조사 과정에서 풍부한 회계 부정 조사 경험과 전문성을
                보유한 법률 전문가 등의 조력을 받는 것은 매우 중요합니다.    {" "}
                <br />
                <br />
                4. 산업기술보호 등과 관련된 법률 리스크에 대한 자문     <br />
                <br />△ 국가핵심기술·방산기술·전략물자의 해외 수출 및 외국
                기업과의 M&A 관련 정부의 승인·신고 절차에 대하여 국가정보기관
                출신 기술보호 전문가들의 컨설팅을 제공합니다.     
                <br />
                <br />△ 산업기술보호법 등 법령에서 정한 기술보호조치 의무 등을
                이행할 수 있도록 보안관리 컨설팅도 제공하고 있습니다.  
              </p>
            </div>
          </div>
          <div className="content">
            <div className="text-wrap">
              <p className="p1">실제 수행한 사례들</p>
              <p className="p2">
                  1. 회사 측의 요청에 따라서 태광그룹 소속 계열사를 감사하여 전
                경영진의 중대 비리를 적발한 후 고소·고발 조치를 하였습니다.  {" "}
                <br />
                <br />
                2. 그 외에도 회사나 공공기관 경영진의 요청에 따라 내부 비리에
                대한 감사를 다수 수행하였습니다.   <br />
                <br />
                3. 지원센터 소속 전문위원인 공인회계사나 세무사들은 M&A 피인수
                기업의 조사에 참여한 경험이 많습니다.     
                <br />
                <br />△ 피인수법인 A사(전자제품 제조 및 판매회사)의 제품불량
                이슈 확인 사례       <br />
                <br />△ 피인수법인 B社(식품 제조 및 판매회사)의 영업이익
                과대계상 내역 확인 사례     <br />
                <br />△ 피인수 예정 법인 C사(미국 소재 진단키트 제조 회사)의
                과다계상 자산 확인 사례
              </p>
            </div>
            <div className="img-wrap">
              <img src={img.center04} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="section02" id="section02">
          <div className="content">
            <div className="img-wrap">
              <img src={img.center01} alt="" />
            </div>
            <div className="text-wrap">
              <p className="p1">
                기업 내부감사와내부통제 <br />
                시스템의 변화가 필요한 이유
              </p>
              <p className="p2">
                 △ 이사의 감시의무를 강화하는 판례가 연이어 나오고 있어, <br />
                기업 내 엄격한 내부통제 시스템의 구축 필요성이 절실한
                시점입니다.
                <br />
                <br />  △ 각종 법령의 제·개정으로 대주주나 임직원의 업무 관련
                범죄시 <br />
                기업 리스크가 급증하고 있습니다.
                <br />
                <br />  △ 기업 내부 자체 감사만으로는 기업 내부 부정을
                적발하기에는 <br />
                현실적 한계와 어려움이 따릅니다.   <br />
                <br />△ 현재 기업들이 구축하고 있는 내부통제 시스템에는 미비점이
                많습니다.
              </p>
            </div>
          </div>
          <div className="content">
            <div className="img-wrap">
              <img src={img.center02} alt="" />
            </div>
            <div className="text-wrap">
              <p className="p1">LawVax「기업 감사/내부통제 지원센터」의 강점</p>
              <p className="p2">
                1. 감사업무 대행 <br />
                <br />△ 특정 업무·부서·계열사 등 기업에서 위임한 범위 내에서
                감사를 실시합니다.       <br />- 감사부서와 함께 또는 독자적으로
                감사를 진행할 수 있습니다.     <br />
                <br />△ 감사업무 종료 시, 기업의 요청에 따라 감사 결과를
                서면으로 제공하고, 필요한 경우 고소·고발장, 소장 작성 등의
                업무도 수행하게 됩니다.   <br />
                <br />
                2. 내부통제 시스템 구축 자문     <br />
                <br />△ 판례에서 요구하는 ‘내부통제 시스템 구축의무’에
                부합할만한 시스템을 구축하여 대비하고 있는 기업은 많지 않습니다.
                     
                <br />- 지금까지는 주로 담합이나 분식회계 관련 사안이
                문제되었으나, 앞으로는 중대재해 처벌법, 개인정보보호법,
                자본시장법 등과 관련된 이슈 등도 문제될 것으로 예상됩니다.    {" "}
                <br />
                <br />△ LawVax의 컨설팅을 통해 합리적이고 효율적인 내부통제
                시스템을 구축할 수 있습니다.       <br />① 부서별 업무 및 관련
                규정을 검토하여 임직원이 준수해야 할 내부통제 기준을 수립하고,
                <br />② 임직원이 내부통제 기준을 숙지하고 이를 준수하도록
                정기적인 교육을 실시하며, <br />③ 모니터링 시스템을 구축하고,{" "}
                <br />④ 위법·부당행위 적발 시 이사회에 보고하여 위반직원에 대한
                제재와 시정을 요구하는 등 내부통제 시스템을 구축할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="content">
            <div className="img-wrap">
              <img src={img.center03} alt="" />
            </div>
            <div className="text-wrap">
              <p className="p2">
                  3. 기업의 인수합병(M&A) 시 피인수 기업에 대한 심층 조사    {" "}
                <br />
                <br />△ M&A 과정에서 식별하지 못한 기업 부정 이슈가 발견되어
                소송이나 분쟁을 맞닥뜨리는 기업이 많습니다.     <br />
                <br />△ 인수 전 단계에서도 부정 발생 고위험 영역에 대한 조사
                업무(Due Diligence)를 수행하지만, 정보 제한으로 계약서상 진술
                보장에만 주로 의존하고 폭넓은 내부감사는 어렵습니다.     <br />
                <br />△ 인수 후 초기 단계에서 부정 이슈를 발견해야만 인수 대가의
                적정성을 다투기 위한 법적 근거로 활용할 수 있으므로, 최단시간 내
                피인수 기업에 대한 강도 높은 조사가 필요합니다.     <br />
                <br />△ 조사 결과는 내부통제 시스템 개선 자료로 활용할 수
                있으며, 위 조사 과정에서 풍부한 회계 부정 조사 경험과 전문성을
                보유한 법률 전문가 등의 조력을 받는 것은 매우 중요합니다.    {" "}
                <br />
                <br />
                4. 산업기술보호 등과 관련된 법률 리스크에 대한 자문     <br />
                <br />△ 국가핵심기술·방산기술·전략물자의 해외 수출 및 외국
                기업과의 M&A 관련 정부의 승인·신고 절차에 대하여 국가정보기관
                출신 기술보호 전문가들의 컨설팅을 제공합니다.     
                <br />
                <br />△ 산업기술보호법 등 법령에서 정한 기술보호조치 의무 등을
                이행할 수 있도록 보안관리 컨설팅도 제공하고 있습니다.  
              </p>
            </div>
          </div>
          <div className="content">
            <div className="img-wrap">
              <img src={img.center04} alt="" />
            </div>
            <div className="text-wrap">
              <p className="p1">실제 수행한 사례들</p>
              <p className="p2">
                  1. 회사 측의 요청에 따라서 태광그룹 소속 계열사를 감사하여 전
                경영진의 중대 비리를 적발한 후 고소·고발 조치를 하였습니다.  {" "}
                <br />
                <br />
                2. 그 외에도 회사나 공공기관 경영진의 요청에 따라 내부 비리에
                대한 감사를 다수 수행하였습니다.   <br />
                <br />
                3. 지원센터 소속 전문위원인 공인회계사나 세무사들은 M&A 피인수
                기업의 조사에 참여한 경험이 많습니다.     
                <br />
                <br />△ 피인수법인 A사(전자제품 제조 및 판매회사)의 제품불량
                이슈 확인 사례       <br />
                <br />△ 피인수법인 B社(식품 제조 및 판매회사)의 영업이익
                과대계상 내역 확인 사례     <br />
                <br />△ 피인수 예정 법인 C사(미국 소재 진단키트 제조 회사)의
                과다계상 자산 확인 사례
              </p>
            </div>
          </div>
        </div>
      )}
      <h2 className="sub-title roman-title">Organization chart</h2>
      <div className="section03" id="section03">
        <img src={img.center05} alt="" />
      </div>
      <h2 className="sub-title roman-title">Our Team</h2>
      <div className="section04" id="section04">
        <div className="members-wrap">
          {visibleLawyers.map((lawyer, index) => (
            <div key={index} className="lawyer-item">
              <img src={lawyer.img} alt="" />
              <div className="text-wrap">
                <p className="p1">
                  <span>{lawyer.name}</span>
                  <span> {lawyer.name2}</span>
                </p>
                <p className="p2">{lawyer.title}</p>
                {lawyer.mark.map((mark, index) => (
                  <p key={index} className="p3">
                    {mark}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="toggle-button" onClick={handleToggle}>
          {showAll ? "접기" : "더보기"}
          {showAll ? (
            <img src={icons.up} alt="" />
          ) : (
            <img src={icons.down} alt="" />
          )}
        </button>
      </div>
      <div className="section05" id="section05">
        <div className="sub-title">
          <h1>
            뉴스레터
            <Link to="/landing-search-detail">
              <button className="more">
                <img src={img.more} alt="" />
              </button>
            </Link>
          </h1>
        </div>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
            spaceBetween={5}
            scrollbar={{ draggable: true }}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
          >
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="newsletter-content">
                    <div className="mark">
                      <span>회계 법률</span>
                    </div>
                    <div className="title">
                      <span>
                        '법률AI'거스를 수 없는 대세...변호사 대체 아닌
                        '협업'으로
                      </span>
                    </div>
                    <div className="bottom">
                      <span className="date">2024.07.01</span>
                      <Link to="/newsletter">
                        <span className="more">자세히 보기</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SupportCenterPage;
