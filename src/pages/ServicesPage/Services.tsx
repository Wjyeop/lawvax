import { useState } from "react";
import icons from "../../assets/images/icons/icons";
import up01 from "../../assets/images/icons/up01.png";
import down01 from "../../assets/images/icons/down01.png";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [isBusinessExpanded, setBusinessExpanded] = useState(false);
  const [isTechnologyExpanded, setTechnologyExpanded] = useState(false);
  const [isFinanceExpanded, setFinanceExpanded] = useState(false);

  const toggleExpand = (section: any) => {
    switch (section) {
      case "business":
        setBusinessExpanded(!isBusinessExpanded);
        break;
      case "finance":
        setFinanceExpanded(!isFinanceExpanded);
        break;
      case "technology":
        setTechnologyExpanded(!isTechnologyExpanded);
        break;
      default:
        break;
    }
  };

  return (
    <div className="services-page">
      <div className="process">
        <img src={icons.home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>업무분야</span>
      </div>
      <div className="title">
        <p style={{ fontSize: "2.5em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            F
          </span>
          IELD
          <br />
          OF WORK
        </p>
      </div>
      <div className="content-wrap">
        <div className="content01" onClick={() => toggleExpand("business")}>
          <div className={isBusinessExpanded ? "title open" : "title"}>
            <span>형사</span>
            <img
              className="fold-img"
              src={isBusinessExpanded ? icons.up01 : icons.down01}
              alt=""
            />
          </div>
          {isBusinessExpanded && (
            <div className="fold-wrap">
              <Link to="/services/detail">
                <div className="content">
                  <p>업무분야</p>
                  <img src={icons.down} alt="" />
                </div>
              </Link>
              <div className="content">
                <p>업무분야</p>
                <img src={icons.down} alt="" />
              </div>
              <div className="content">
                <p>업무분야</p>
                <img src={icons.down} alt="" />
              </div>
              <div className="content">
                <p>업무분야</p>
                <img src={icons.down} alt="" />
              </div>
              <div className="content">
                <p>업무분야</p>
                <img src={icons.down} alt="" />
              </div>
              <div className="content">
                <p>업무분야</p>
                <img src={icons.down} alt="" />
              </div>
              <div className="content">
                <p>업무분야</p>
                <img src={icons.down} alt="" />
              </div>
              <div className="content">
                <p>업무분야</p>
                <img src={icons.down} alt="" />
              </div>
            </div>
          )}
        </div>
        <div className="content02">
          <div className="title">
            <span>민사 · 행정 · 가사</span>
            <img
              className="fold-img"
              src={isFinanceExpanded ? up01 : down01}
              alt=""
              onClick={() => toggleExpand("finance")}
            />
          </div>
          {isFinanceExpanded && <div />}
        </div>
        <div className="content03">
          <div className="title">
            <span>금융 · 가상자산</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
              onClick={() => toggleExpand("technology")}
            />
          </div>
          {isTechnologyExpanded && <div />}
        </div>
        <div className="content04">
          <div className="title">
            <span>기업 자문 · 감사대행</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
            />
          </div>
        </div>
        <div className="content05">
          <div className="title">
            <span>IT · 첨단 · 기술보호 · 개인정보</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
            />
          </div>
        </div>
        <div className="content06">
          <div className="title">
            <span>조세 · 관세 · 공정거래</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
            />
          </div>
        </div>
        <div className="content07">
          <div className="title">
            <span>기업 M&A · 구조조정 · 회생</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
            />
          </div>
        </div>
        <div className="content08">
          <div className="title">
            <span>건설 · 부동산</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
            />
          </div>
        </div>
        <div className="content09">
          <div className="title">
            <span>조선 · 해운</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
            />
          </div>
        </div>
        <div className="content10">
          <div className="title">
            <span>방산 · 우주항공</span>
            <img
              className="fold-img"
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
