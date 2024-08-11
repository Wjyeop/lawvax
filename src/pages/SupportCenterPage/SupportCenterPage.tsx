import { useState } from "react";
import main01 from "../../assets/images/CenterMain01.png";
import main02 from "../../assets/images/CenterMain02.png";
import content01 from "../../assets/images/TechCenter01.png";
import content02 from "../../assets/images/TechCenter02.png";
import content03 from "../../assets/images/TechCenter03.png";
import SearchListSection from "../MemberSearchPage/SearchListSection";

const SupportCenterPage = () => {
  const [activeTab, setActiveTab] = useState("소개");

  return (
    <div className="support-center-page">
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
      <div className="theme-select">
        <button
          className={activeTab === "소개" ? "active" : ""}
          onClick={() => setActiveTab("소개")}
        >
          소개
        </button>
        <button
          className={activeTab === "업무분야" ? "active" : ""}
          onClick={() => setActiveTab("업무분야")}
        >
          업무분야
        </button>
        <button
          className={activeTab === "구성원" ? "active" : ""}
          onClick={() => setActiveTab("구성원")}
        >
          구성원
        </button>
      </div>
      <div className="section01">
        <div className="img-wrap">
          <img src={main02} alt="" />
        </div>
        <div className="text-wrap">
          <p className="p1">Our Vision</p>
          <h1>『LawVax 기술보호센터』는</h1>
          <p className="p2">
            기술보호센터는 기술보호 생태계를 조성하여 공익에 기여하는 한편,
            <br />
            경제안보 시대에 기업의 생존과 직결된 공급망·기술수출 통제 등
            <br />
            새로운 법률 이슈 대응을 선도해 나갈 계획입니다.
          </p>
        </div>
      </div>
      <h2 className="sub-title">Our Service</h2>
      <div className="section02">
        <div className="section1">
          <div className="img-wrap">
            <img src={content01} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p1">Technology Protection</p>
            <p className="p2">신속 · 예방 · 지원</p>
            <p className="p3">
              기업의 첨단기술 관련 법률 리스크 사전 예방 및 리스크 발생시 신속
              대응 지원을 위해 설립하였으며, 보안컨설턴트 및 전문 변호사들이
              기술보호를 위한 컨설팅·법률대응 및 영업비밀·競業 관련 분쟁 등에
              대한 토탈 법률 서비스를 제공하고 있습니다.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="text-wrap">
            <p className="p1">One-stop</p>
            <p className="p2">영업비밀 보호 · 대응</p>
            <p className="p3">
              기술보호센터는 기업의 핵심인력 입·퇴사시 영업비밀 보호를 위한 보안
              교육·컨설팅을 지원하고, 기술유출 징후 등 리스크 발생 시 자체 대응
              지원과 사법적 구제 등 통합적인 서비스를 제공합니다.
            </p>
          </div>
          <div className="img-wrap">
            <img src={content02} alt="" />
          </div>
        </div>
        <div className="section3">
          <div className="img-wrap">
            <img src={content03} alt="" />
          </div>
          <div className="text-wrap">
            <p className="p1">Security Management</p>
            <p className="p2">핵심기술 수출 및 M&A</p>
            <p className="p3">
              기술보호센터는 기업의 핵심인력 입·퇴사시 영업비밀 보호를 위한 보안
              교육·컨설팅을 지원하고, 기술유출 징후 등 리스크 발생 시 자체 대응
              지원과 사법적 구제 등 통합적인 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </div>
      <h2 className="sub-title">Our Team</h2>
      <SearchListSection />
    </div>
  );
};

export default SupportCenterPage;
