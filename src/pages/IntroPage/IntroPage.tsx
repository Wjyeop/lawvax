import home from "../../assets/images/icons/home.png";
import intro01 from "../../assets/images/HeaderLogo.png";
import intro02 from "../../assets/images/intro02.png";
import intro03 from "../../assets/images/intro04.png";

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>소개</span>
      </div>
      <div className="section01">
        <div className="flex">
          <div className="img-wrap">
            <img src={intro01} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p3">
              2022년 2월 문을 연 법무법인 LawVax는 기업∙금융∙첨단(IT) 분야를
              중심으로 꾸준히 성장하고 있는 강소로펌입니다. LawVax는 검찰 및
              법원 등에서 오랜 기간 수사∙재판 경험을 쌓은 변호사들이 원팀을
              이루어 고객들에게 종합법률서비스를 제공합니다.
              <br />
              <br />  기술과 산업환경이 빠르게 변화하면서 기업과 개인이 당면하는
              법률 리스크도 증가하고 있습니다. LawVax는 풍부한 경험과 노하우를
              바탕으로 고객의 어려움을 함께 해결해나가는 동반자가 되겠습니다.
            </p>
          </div>
        </div>
        <h1>Introduce ourselves</h1>
      </div>
      <div className="section02">
        <div className="text-wrap">
          <p className="p2">Corporate ∙ Finance ∙ IT</p>
          <p className="p3">
            법무법인 LawVax는 설립 초기부터{" "}
            <span className="bold">기업과 금융, 첨단(IT)</span>를 주력분야로
            삼아 다양한 사건을 수행해왔습니다. 금융범죄 및 기업 관련 수사경험이
            풍부한 검사장 출신 변호사,  민∙형사 재판 업무를 30여년 간 담당했던
            변호사 등이 주축이 되어 수사단계부터 재판에 이르기까지
            <span className="bold"> 원스톱 법률서비스</span>를 제공합니다. 특히{" "}
            <span className="bold">내부통제시스템 구축 및 감사,  가상화폐</span>
             등 신종 금융범죄 분야에서 성공케이스를 축적해 나가고 있습니다. 
          </p>
        </div>
      </div>
      <div className="section03">
        <div className="text-wrap">
          <p className="p2">Experience ∙ Difference</p>
          <p className="p3">
            LawVax는 변호사들의 차별화된{" "}
            <span className="bold">경험(experience)</span>을 바탕으로 
            탁월한(difference) 법률서비스를 지향합니다. 부패∙금융 수사 분야
            <span className="bold">
              ‘특수통’ 검사, 법원 부장판사, 대기업 법무 총괄책임자
            </span>
             등 다양한 이력을 보유한 변호사들이 고도의 전문성을 바탕으로
            의뢰인과 직접 소통합니다. 금융감독원∙국가정보기관 ∙경찰 등에서
            독보적인 실무경험을 쌓은 전문가들과{" "}
            <span className="bold">유기적 협업</span>을 통해 고객의
            니즈(needs)에 맞는 해법을 찾아드립니다. 
          </p>
        </div>
        <div className="img-wrap">
          <img src={intro02} alt="" />
        </div>
      </div>
      <div className="section04">
        <div className="img-wrap">
          <img src={intro03} alt="" />
        </div>
        <div className="text-wrap">
          <p className="p2">Law + Vaccine</p>
          <p className="p3">
            이미 문제가 발생한 후에 대응하는 것만으로는 부족합니다. 준법경영에
            필요한 <span className="bold">내부통제시스템</span>을
            갖추고, 끊임없이 체크하며 <span className="bold">문제를 예방</span>
            해야 합니다. 
            <br />
            <br /> LawVax는 법률(Law)과 백신(Vax∙Vaccine의 줄임말)의
            합성어로써,  로펌이 출범할 때부터{" "}
            <span className="bold">‘기업의 법률백신’</span>이 되겠다는 포부를
            담았습니다.  사명과 같이 기업이 당면할 사법리스크를 미리 진단하고
            이를 해결하기 위한 최적의 솔루션을 제시하겠습니다. 
          </p>
        </div>
      </div>
      {/* <div className="title">
        <span className="blue">Introduction</span>
        <p style={{ fontSize: "2em" }}>
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
              법무법인 LawVax는 설립 초기부터{" "}
              <span className="bold">기업과 금융, 첨단(IT)</span>를 주력분야로
              삼아 다양한 사건을 수행해왔습니다. 금융범죄 및 기업 관련
              수사경험이 풍부한 검사장 출신 변호사,  민∙형사 재판 업무를 30여년
              간 담당했던 변호사 등이 주축이 되어 수사단계부터 재판에 이르기까지
              <span className="bold"> 원스톱 법률서비스</span>를
              제공합니다. 특히{" "}
              <span className="bold">
                내부통제시스템 구축 및 감사,  가상화폐
              </span>
               등 신종 금융범죄 분야에서 성공케이스를 축적해 나가고 있습니다. 
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="text-wrap">
            <p className="p2">Experience ∙ Difference</p>
            <p className="p3">
              LawVax는 변호사들의 차별화된{" "}
              <span className="bold">경험(experience)</span>을 바탕으로 
              탁월한(difference) 법률서비스를 지향합니다. 부패∙금융 수사 분야
              <span className="bold">
                ‘특수통’ 검사, 법원 부장판사, 대기업 법무 총괄책임자
              </span>
               등 다양한 이력을 보유한 변호사들이 고도의 전문성을 바탕으로
              의뢰인과 직접 소통합니다. 금융감독원∙국가정보기관 ∙경찰 등에서
              독보적인 실무경험을 쌓은 전문가들과{" "}
              <span className="bold">유기적 협업</span>을 통해 고객의
              니즈(needs)에 맞는 해법을 찾아드립니다. 
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
              필요한 <span className="bold">내부통제시스템</span>을
              갖추고, 끊임없이 체크하며{" "}
              <span className="bold">문제를 예방</span>해야 합니다. 
              <br />
              <br /> LawVax는 법률(Law)과 백신(Vax∙Vaccine의 줄임말)의
              합성어로써, 로펌이 출범할 때부터{" "}
              <span className="bold">‘기업의 법률백신’</span>이 되겠다는 포부를
              담았습니다.  사명과 같이 기업이 당면할 사법리스크를 미리 진단하고
              이를 해결하기 위한 최적의 솔루션을 제시하겠습니다. 
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
              2022년 2월 문을 연 법무법인 LawVax는 기업∙금융∙첨단(IT) 분야를
              중심으로 꾸준히 성장하고 있는 강소로펌입니다. LawVax는 검찰 및
              법원 등에서 오랜 기간 수사∙재판 경험을 쌓은 변호사들이 원팀을
              이루어 고객들에게 종합법률서비스를 제공합니다.
              <br />
              <br />  기술과 산업환경이 빠르게 변화하면서 기업과 개인이 당면하는
              법률 리스크도 증가하고 있습니다. LawVax는 풍부한 경험과 노하우를
              바탕으로 고객의 어려움을 함께 해결해나가는 동반자가 되겠습니다.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default IntroPage;
