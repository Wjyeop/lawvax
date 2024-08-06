import React, { useState } from "react";
import ReactDOM from "react-dom";
import home from "../../assets/images/icons/home.png";
import lawyerImage from "../../assets/images/lawyer3.png";
import save from "../../assets/images/icons/save.png";
import print from "../../assets/images/icons/print.png";
import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";
import { profileData } from "../../const/profileData";

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
          <span>저장하기</span>
          <img src={print} alt="" />
          <span>인쇄하기</span>
        </div>
      </div>
      <div className="profile-main">
        <div className="content-wrap">
          <div className="text-wrap">
            <p className="job">{profileData.position}</p>
            <p className="name">
              {profileData.nameKo}
              <span>({profileData.nameCh})</span>
            </p>
            <p className="phone">
              <span>T</span> {profileData.workNumber}
            </p>
            <p className="email">
              <span>E</span> {profileData.email}
            </p>
          </div>
          <div className="img-wrap">
            <img src={lawyerImage} alt="" />
          </div>
        </div>
        <p className="ment">{profileData.introduction}</p>
      </div>
      <div className="fold-section">
        <div className="education">
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
        <div className="experience">
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
        <div className="etcWorkFields">
          <div className="title">
            <p>주요 업무분야</p>
          </div>
          {profileData.etcWorkFields
            .slice(
              0,
              isEtcWorkFieldsExpanded ? profileData.etcWorkFields.length : 4
            )
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {profileData.etcWorkFields.length > 4 ? (
            <button onClick={() => toggleExpand("etcWorkFields")}>
              {isEtcWorkFieldsExpanded ? "접기" : "펼치기"}
              {isEtcWorkFieldsExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          ) : (
            <div className="full-line" />
          )}
        </div>
        <div className="experience">
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
        <div className="experience">
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
    </div>
  );
};

export default MemberProfilePage;
