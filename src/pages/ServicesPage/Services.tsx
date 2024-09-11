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
            <span>업무 분야_1</span>
            <img src={isBusinessExpanded ? icons.up01 : icons.down01} alt="" />
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
            <span>업무 분야_2</span>
            <img
              src={isFinanceExpanded ? up01 : down01}
              alt=""
              onClick={() => toggleExpand("finance")}
            />
          </div>
          {isFinanceExpanded && <div />}
        </div>
        <div className="content03">
          <div className="title">
            <span>업무 분야_3</span>
            <img
              src={isTechnologyExpanded ? up01 : down01}
              alt=""
              onClick={() => toggleExpand("technology")}
            />
          </div>
          {isTechnologyExpanded && <div />}
        </div>
        <div className="content04">
          <div className="title">
            <span>업무 분야_4</span>
            <img src={isTechnologyExpanded ? up01 : down01} alt="" />
          </div>
        </div>
        <div className="content05">
          <div className="title">
            <span>업무 분야_5</span>
            <img src={isTechnologyExpanded ? up01 : down01} alt="" />
          </div>
        </div>
        <div className="content06">
          <div className="title">
            <span>업무 분야_6</span>
            <img src={isTechnologyExpanded ? up01 : down01} alt="" />
          </div>
        </div>
        <div className="content07">
          <div className="title">
            <span>업무 분야_7</span>
            <img src={isTechnologyExpanded ? up01 : down01} alt="" />
          </div>
        </div>
        <div className="content08">
          <div className="title">
            <span>업무 분야_8</span>
            <img src={isTechnologyExpanded ? up01 : down01} alt="" />
          </div>
        </div>
        <div className="content09">
          <div className="title">
            <span>업무 분야_9</span>
            <img src={isTechnologyExpanded ? up01 : down01} alt="" />
          </div>
        </div>
        <div className="content10">
          <div className="title">
            <span>업무 분야_10</span>
            <img src={isTechnologyExpanded ? up01 : down01} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
