import home from "../../assets/images/icons/home.png";
import intro01 from "../../assets/images/intro01.png";
import intro02 from "../../assets/images/intro02.png";
import intro03 from "../../assets/images/intro03.png";
import intro04 from "../../assets/images/HeaderLogo.png";

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>소개</span>
      </div>
      <div className="title">
        <span className="blue">Introduction</span>
        <p style={{ fontSize: "2.5em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            L
          </span>
          AWVAX
        </p>
      </div>
      <p className="gray">Introduce ourselves</p>
      <div className="content">
        <div className="section1">
          <div className="img-wrap">
            <img src={intro01} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p2">Corporate ∙ Finance ∙ IT</p>
            <p className="p3">
              무법인 LawVax는 검찰 및 법원 등에서 오랜 기간 수사나 재판 경험을
              쌓아온 변호사들이 중심이 되어 기업∙금융∙첨단(IT) 분야에서 최상의
              서비스를 제공하고 있습니다.  특히 내부통제시스템 구축 및
              감사, 기업 수사대응, 가상화폐 등 신종 금융범죄에 관한 성공적인
              수행 사례를 축적해 나가고 있습니다.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="text-wrap">
            <p className="p2">Experience ∙ Difference</p>
            <p className="p3">
              LawVax는 변호사들의 차별화된 경험(experience)를
              바탕으로 탁월한(difference) 법률서비스를 지향합니다. 부패∙금융
              수사 분야의 특수통 검사,  30년 경력의 법관, 워크아웃 대상 기업의
              법무팀 총괄책임 등 이력을 보유한 베테랑 변호사들이 원팀을 이루어
              의뢰인과 직접 소통하며 의뢰인이 어려움을 이겨낼 수 있도록 수준
              높은 솔루션을 찾아드립니다.
            </p>
          </div>
          <div className="img-wrap">
            <img src={intro02} alt="" />
          </div>
        </div>
        <div className="section3">
          <div className="img-wrap">
            <img src={intro03} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p2">Law + Vaccine</p>
            <p className="p3">
              이미 문제가 발생한 후에 대응하는 것만으로는 부족합니다. 준법경영에
              필요한 내부통제시스템을 갖추고, 끊임없이 체크하며 문제를 예방해야
              합니다.  기업이 당면할 사법리스크를 미리 진단하고 해결책을
              제시하는 기업의 법률백신(Law+Vax)이 되겠습니다.
            </p>
          </div>
        </div>
      </div>
      <p className="gray">Greetings</p>
      <div className="content">
        <div className="section04">
          <div className="img-wrap">
            <img src={intro04} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p3">
              법무법인 LawVax는 검찰 및 법원 등에서 오랜 기간
              기업∙금융∙첨단(IT) 수사나 재판 경험을 쌓아온 변호사들이 중심이
              되어 2022년 2월 설립한 로펌입니다. 수사대응 및 자문, 기업감사 및
              내부통제, 가상화폐 관련 이슈 등에서 굵직한 수행사례를 이어오고
              있습니다.
              <br />
              <br />  LawVax는 기업이 당변한 법률(Law) 리스크를 사전에 예방하고
              해소하는 백신(Vax∙Vaccine)이 되겠다는 뜻입니다. 동시에 Vax는
              ‘가상(Virtual) 자산(Asset) 거래(eXchange)’의 줄임말이기도
              합니다. 기업∙금융∙첨단(IT) 분야에 관한 수준 높은 법률 서비스를
              제공하겠다는 자신감의 담은 표현입니다.
              <br />
              <br />      기술과 산업환경이 빠르게 변화하는 기업과 개인이
              당면하는 법률 리스크도 증가하고 있습니다. LawVax는 풍부한 경험과
              노하우를 바탕으로 외뢰인에게 최선의 해결책을 제시하는 동반자가
              되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
