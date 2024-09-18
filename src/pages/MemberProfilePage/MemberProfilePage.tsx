import React, { useEffect, useState } from "react";
import home from "../../assets/images/icons/home.png";
import lawyerImage from "../../assets/images/lawyer4.png";
import save from "../../assets/images/icons/saveBlue.png";
import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";
import big from "../../assets/images/icons/big.png";

import { profileData } from "../../const/profileData";
import Topbutton from "../../components/TopButton";

const MemberProfilePage = () => {
  const [isEducationExpanded, setEducationExpanded] = useState(false);
  const [isExperienceExpanded, setExperienceExpanded] = useState(false);
  const [isEtcWorkFieldsExpanded, setEtcWorkFieldsExpanded] = useState(false);
  const [isHandleCasesExpanded, setHandleCasesExpanded] = useState(false);
  const [isLicensesExpanded, setLicensesExpanded] = useState(false);

  const toggleExpand = (section: any) => {
    switch (section) {
      case "education":
        setEducationExpanded(!isEducationExpanded);
        break;
      case "experience":
        setExperienceExpanded(!isExperienceExpanded);
        break;
      case "etcWorkFields":
        setEtcWorkFieldsExpanded(!isEtcWorkFieldsExpanded);
        break;
      case "handleCases":
        setHandleCasesExpanded(!isHandleCasesExpanded);
        break;
      case "licenses":
        setLicensesExpanded(!isLicensesExpanded);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll<HTMLSpanElement>(".menu-item");

    const removeActiveClass = () => {
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
    };

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            removeActiveClass();
            item.classList.add("active");
          }
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute("id");
            if (targetId) {
              const correspondingMenuItem =
                document.querySelector<HTMLSpanElement>(
                  `.menu-item[data-target="${targetId}"]`
                );
              if (correspondingMenuItem) {
                removeActiveClass();
                correspondingMenuItem.classList.add("active");
              }
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll<HTMLElement>(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      menuItems.forEach((item) => item.removeEventListener("click", () => {}));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="member-profile-page">
      <div className="title-section">
        <div className="process">
          <img src={home} alt="" />
          <span>HOME</span>
          <span>{">"}</span>
          <span>구성원</span>
          <span className="search">{">"}</span>
          <span className="search">인물검색</span>
        </div>
        <div className="save">
          <img src={save} alt="" />
          <span>상세정보 저장하기</span>
        </div>
      </div>
      <div className="profile-main">
        <div className="content-wrap">
          <div className="text-wrap">
            <p className="name">
              {profileData.nameKo}
              {/* <span>({profileData.nameCh})</span> */}
              <span className="job">{profileData.position}</span>
            </p>
            <p className="mark">
              <img src={big} alt="" />
              서울대 법대
            </p>
            <p className="sub-title">
              <span>주요경력</span>
            </p>
            <div className="sub-content01">
              <p>서울대 법대</p>
              <p>부산지검장</p>
              <p>대검 부패범죄특별수사단 단장</p>
            </div>
            <p className="sub-title">
              <span>업무분야</span>
            </p>
            <div className="sub-content02">
              <span>금융</span>
              <span>가상자산</span>
              <span>형사</span>
              <span>기업감사</span>
            </div>
          </div>
          <div className="img-wrap">
            <img src={lawyerImage} alt="" />
          </div>
        </div>
        <p className="ment">{profileData.introduction}</p>
      </div>
      <div className="sub-menu">
        <span className="menu-item" data-target="case-section">
          주요 처리사례
        </span>
        <span className="menu-item" data-target="education-section">
          학력
        </span>
        <span className="menu-item" data-target="experience-section">
          경력
        </span>
        <span className="menu-item" data-target="other-section">
          저서/활동/기타
        </span>
      </div>
      <div className="fold-section">
        <div className="case section" id="case-section">
          <div className="title">
            <p>주요 처리사례</p>
          </div>
          {profileData.handleCases
            .slice(
              0,
              isHandleCasesExpanded ? profileData.handleCases.length : 4
            )
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span className="year">{item.startYear}</span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {profileData.handleCases.length > 4 ? (
            <button onClick={() => toggleExpand("handleCases")}>
              {isHandleCasesExpanded ? "접기" : "펼치기"}
              {isHandleCasesExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          ) : (
            <div className="full-line" />
          )}
        </div>
        <div className="education section" id="education-section">
          <div className="title">
            <p>학력</p>
          </div>
          {profileData.educations
            .slice(0, isEducationExpanded ? profileData.educations.length : 4)
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span className="year">{item.startYear}</span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {profileData.educations.length > 4 ? (
            <button onClick={() => toggleExpand("education")}>
              {isEducationExpanded ? "접기" : "펼치기"}
              {isEducationExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          ) : (
            <div className="full-line" />
          )}
        </div>
        <div className="experience section" id="experience-section">
          <div className="title">
            <p>경력</p>
          </div>
          {profileData.careers
            .slice(0, isExperienceExpanded ? profileData.careers.length : 4)
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span className="year">{item.startYear}</span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {profileData.careers.length > 4 ? (
            <button onClick={() => toggleExpand("experience")}>
              {isExperienceExpanded ? "접기" : "펼치기"}
              {isExperienceExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          ) : (
            <div className="full-line" />
          )}
        </div>
        <div className="other-section section" id="other-section">
          <div className="title">
            <p>저서/활동/기타</p>
          </div>
          {profileData.licenses
            .slice(0, isLicensesExpanded ? profileData.licenses.length : 4)
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {profileData.licenses.length > 4 ? (
            <button onClick={() => toggleExpand("licenses")}>
              {isLicensesExpanded ? "접기" : "펼치기"}
              {isLicensesExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          ) : (
            <div className="full-line" />
          )}
        </div>
      </div>
      <div className="info">
        <p className="phone">
          <span>T</span>
          02-583-6303
        </p>
        <p className="email">
          <span>E</span>
          kdong@lawvax.co.kr
        </p>
      </div>
      <Topbutton />
    </div>
  );
};

export default MemberProfilePage;
