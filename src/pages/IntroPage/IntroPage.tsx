import home from "../../assets/images/icons/home.png";
import intro01 from "../../assets/images/intro01.png";
import intro02 from "../../assets/images/intro02.png";
import intro03 from "../../assets/images/intro03.png";

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
        <p className="gray">Introduce ourselves</p>
      </div>
      <div className="content">
        <div className="section1">
          <div className="img-wrap">
            <img src={intro01} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p1">Background</p>
            <p className="p2">Lawvax 설립일</p>
            <p className="p3">
              법무법인 LawVax는 검찰 및 법원 등에서 오랜 기간 기업·금융·첨단(IT)
              사건 수사나 재판 경험을 쌓아온 변호사들이 중심이 되어 2022년 2월
              설립되었습니다.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="text-wrap">
            <p className="p1">Skillfulness</p>
            <p className="p2">수많은 경험</p>
            <p className="p3">
              LawVax의 변호사들은 「횡령·배임·분식회계·탈세 등 회계 관련」,
              「담합·부당지원·사익편취 등 공정거래 관련」, 「중대재해 관련」,
              「경영권 승계나 M&A 관련」, 「증권·금융 관련」, 「기업 핵심 기술
              관련」 등 기업과 관련된 수많은 법률 리스크 대응을 수사나 재판 및
              변론을 통해서 경험하였습니다.
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
            <p className="p1">Troubleshooter</p>
            <p className="p2">기업의 법률 백신</p>
            <p className="p3">
              이러한 경험(experience)을 보유한 변호사들이 의뢰인과 직접
              소통하면서 의뢰인이 어려움을 이겨낼 수 있도록 누구보다도
              탁월한(difference) 법률서비스를 제공하겠습니다.
              <br />
              <br /> LawVax는 기업의 법률 리스크를 예방하고, 기업의 고민을
              해결하겠습니다.기업의 법률(Law) 백신(Vax)이 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
