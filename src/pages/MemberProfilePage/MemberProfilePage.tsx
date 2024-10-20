import { useEffect, useState } from "react";
import home from "../../assets/images/icons/home.png";
import lawyerImage from "../../assets/images/lawyer4.png";
import save from "../../assets/images/icons/saveBlue.png";
import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";

import { getMembersDetail } from "../../api/getMembersDetail";
import { generateMemberProfilePdf } from "../../utils/pdf";
import { useParams } from "react-router-dom";

const MemberProfilePage = () => {
  const { id } = useParams();
  const [lawyerData, setLawyerData] = useState<MemberItem>({
    id: 0,
    nameKo: "",
    nameEn: "",
    nameCh: "",
    position: "",
    email: "",
    mainImg: "",
    firstMainCareer: "",
    secondMainCareer: "",
    workNumber: "",
    faxNumber: "",
    introduction: "",
    language: "",
    careers: [],
    educations: [],
    handleCases: [],
    licenses: [],
    workFields: [],
  });
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

  useEffect(() => {
    const fetchLawyer = async () => {
      try {
        const data = await getMembersDetail(Number(id));
        setLawyerData(data);
      } catch (error) {
        console.error("변호사 데이터 조회 중 에러 발생:", error);
      }
    };
    fetchLawyer();
  }, [id]);

  const handlePdfDownload = () => {
    if (lawyerData) {
      generateMemberProfilePdf(lawyerData); // lawyerData를 인자로 전달하여 PDF 생성
    } else {
      console.error("변호사 데이터를 불러오지 못했습니다.");
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
        <div className="save" onClick={handlePdfDownload}>
          <img src={save} alt="" />
          <span>상세정보 저장하기</span>
        </div>
      </div>
      <div className="profile-main">
        <div className="content-wrap">
          <div className="text-wrap">
            <p className="name">
              {lawyerData?.nameKo}
              <span className="job">{lawyerData?.position}</span>
            </p>
            {/* <p className="mark">
              <img src={big} alt="" />
              {lawyerData?.position}
            </p> */}
            <p className="sub-title">
              <span>주요경력</span>
            </p>
            <div className="sub-content01">
              <p>{lawyerData?.firstMainCareer}</p>
              <p>{lawyerData?.secondMainCareer}</p>
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
        <p className="ment">{lawyerData?.introduction}</p>
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
          {lawyerData?.handleCases
            .slice(
              0,
              isHandleCasesExpanded ? lawyerData?.handleCases.length : 4
            )
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span className="year">{item.startYear}</span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {lawyerData?.handleCases.length > 4 && (
            <button onClick={() => toggleExpand("handleCases")}>
              {isHandleCasesExpanded ? "접기" : "펼치기"}
              {isHandleCasesExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          )}
        </div>
        <div className="education section" id="education-section">
          <div className="title">
            <p>학력</p>
          </div>
          {lawyerData?.educations
            .slice(0, isEducationExpanded ? lawyerData?.educations.length : 4)
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span className="year">{item.year}</span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {lawyerData?.educations.length > 4 && (
            <button onClick={() => toggleExpand("education")}>
              {isEducationExpanded ? "접기" : "펼치기"}
              {isEducationExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          )}
        </div>
        <div className="experience section" id="experience-section">
          <div className="title">
            <p>경력</p>
          </div>
          {lawyerData?.careers
            .slice(0, isExperienceExpanded ? lawyerData?.careers.length : 4)
            .map((item, index) => (
              <div key={index} className="content">
                <div>
                  <span className="year">{item.startYear}</span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          {lawyerData?.careers.length > 4 && (
            <button onClick={() => toggleExpand("experience")}>
              {isExperienceExpanded ? "접기" : "펼치기"}
              {isExperienceExpanded ? (
                <img src={up} alt="" />
              ) : (
                <img src={down} alt="" />
              )}
            </button>
          )}
        </div>
        {lawyerData?.licenses.length > 1 && (
          <div className="other-section section" id="other-section">
            <div className="title">
              <p>저서/활동/기타</p>
            </div>
            {lawyerData?.licenses
              .slice(0, isLicensesExpanded ? lawyerData?.licenses.length : 4)
              .map((item, index) => (
                <div key={index} className="content">
                  <div>
                    <span>{item.content}</span>
                  </div>
                </div>
              ))}
            {lawyerData?.licenses.length > 4 && (
              <button onClick={() => toggleExpand("licenses")}>
                {isLicensesExpanded ? "접기" : "펼치기"}
                {isLicensesExpanded ? (
                  <img src={up} alt="" />
                ) : (
                  <img src={down} alt="" />
                )}
              </button>
            )}
          </div>
        )}
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
    </div>
  );
};

export default MemberProfilePage;

interface Career {
  startYear: string;
  endYear: string;
  content: string;
}

interface Education {
  year: string;
  content: string;
}

interface HandleCase {
  startYear: string;
  endYear: string;
  content: string;
}

interface License {
  content: string;
}

interface WorkField {
  workField: string;
}

interface MemberItem {
  id: number;
  nameKo: string;
  nameEn: string;
  nameCh: string;
  position: string;
  email: string;
  mainImg: string;
  firstMainCareer: string;
  secondMainCareer: string;
  workNumber: string;
  faxNumber: string;
  introduction: string;
  language: string;
  careers: Career[];
  educations: Education[];
  handleCases: HandleCase[];
  licenses: License[];
  workFields: WorkField[];
}
