import React, { useState } from "react";
import newsImg from "../../assets/images/news1.png";
import more from "../../assets/images/more.png";
import left from "../../assets/images/ArrowLeft.png";
import right from "../../assets/images/ArrowRight.png";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("법인소식");

  return (
    <div className="news-section">
      <div className="title">
        <p className="blue">About Us</p>
        <div>
          <p style={{ fontSize: "2.5em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              N
            </span>
            EWS
            <Link to="/news">
              <button className="more">
                <img src={more} alt="" />
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div className="theme-select">
        <button
          className={activeTab === "법인소식" ? "active" : ""}
          onClick={() => setActiveTab("법인소식")}
        >
          법인소식
        </button>
        <button
          className={activeTab === "언론보도" ? "active" : ""}
          onClick={() => setActiveTab("언론보도")}
        >
          언론보도
        </button>
        <button
          className={activeTab === "인재영입" ? "active" : ""}
          onClick={() => setActiveTab("인재영입")}
        >
          인재영입
        </button>
        <button
          className={activeTab === "수상" ? "active" : ""}
          onClick={() => setActiveTab("수상")}
        >
          수상
        </button>
      </div>
      <div className="content">
        <div className="img-section">
          <img src={newsImg} alt="" />
        </div>
        <div className="text-section">
          <div className="nav">
            <button>
              <img src={left} alt="" />
            </button>
            <span>1 / 10</span>
            <button>
              <img src={right} alt="" />
            </button>
          </div>
          <p className="title">
            중대재해처벌법 시행 2년, <br />
            무엇이 달라졌을까
          </p>
          <p className="cotents">
            [김기동 법무법인 로백스 대표변호사] 산업현장에서 반복적으로 발생하는
            중대재해를 줄이고자 재정된 중대재해 처벌 등에 관한 법률 (이하
            '중대재해처벌법')이 시행된 지 벌써 2년이 지났다. 재정 당시 과도한
            형사처벌 등에 대한 우려에도 불구하고 어느덧 중대재해처벌법 ...
          </p>
          <button className="more">자세히 보기</button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
