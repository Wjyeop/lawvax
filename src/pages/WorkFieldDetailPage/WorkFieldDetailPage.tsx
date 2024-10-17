import img from "../../assets/images/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getWorkFieldDetail } from "../../api/getWorkFieldDetail";
import { getWorkFieldMembers } from "../../api/getWorkFieldMembers";
import { getWorkFieldNewsLetter } from "../../api/getWorkFieldNewsLetter";

const WorkFieldDetailPage = () => {
  const { workField } = useParams();
  const [workFieldData, setWorkFieldData] = useState({
    name: "",
    mainImg: "",
    introduction: "",
    mainCases: [
      {
        start_year: "",
        end_year: "",
        content: "",
      },
    ],
    subCases: [
      {
        content: "",
      },
    ],
  });
  const [lawyerList, setLawyerList] = useState([
    {
      id: 0,
      nameKo: "",
      nameCh: "",
      mainImg: "",
      position: "",
      firstMainCareer: "",
      secondMainCareer: "",
    },
  ]);
  const [newsLetterList, setNewsLetterList] = useState([
    {
      id: 0,
      category: "",
      title: "",
      createdAt: "",
    },
  ]);

  const introduce = useRef(null);
  const workSectionRef = useRef(null);
  const membersSectionRef = useRef(null);
  const newsSectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const visibleLawyers = showAll ? lawyerList : lawyerList.slice(0, 6); // 처음엔 6명만 표시

  useEffect(() => {
    const fetchWorkField = async () => {
      try {
        const data = await getWorkFieldDetail(String(workField));
        setWorkFieldData(data);
      } catch (error) {
        console.error("업무분야 조회 중 에러 발생:", error);
      }
    };

    const fetchMembers = async () => {
      try {
        const data = await getWorkFieldMembers(String(workField));
        setLawyerList(data);
      } catch (error) {
        console.error("구성원 조회 중 에러 발생:", error);
      }
    };

    const fetchNewsLetter = async () => {
      try {
        const data = await getWorkFieldNewsLetter(String(workField));
        setNewsLetterList(data);
      } catch (error) {
        console.error("뉴스레터 조회 중 에러 발생:", error);
      }
    };

    fetchNewsLetter();
    fetchWorkField();
    fetchMembers();
  }, [workField]);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="services-detail-page">
      <div className="process">
        <img src={img.icons.home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>업무분야</span>
        <span>{">"}</span>
        <span>{workField}</span>
      </div>
      <div className="title">
        <p>
          <span className="blue">F</span>
          IELD
          <br />
          OF WORK
        </p>
      </div>
      <div className="sub-title" ref={introduce}>
        <p>{workField}</p>
        {/* <img src={img.field01} alt="임시 이미지" /> */}
        <img src={workFieldData.mainImg} alt="" />
      </div>
      <div className="content-wrap">
        <div className="content-left">
          <div className="sub-title-ment">
            <p>{workFieldData.introduction}</p>
          </div>
          <div className="main-field-of-work" ref={workSectionRef}>
            <h1>대표사례</h1>
            <ul>
              {workFieldData.mainCases.map((mainCase, index) => (
                <li key={index}>
                  {mainCase.start_year}
                  {mainCase.end_year && `-${mainCase.end_year}`}
                  <span>{mainCase.content}</span>
                </li>
              ))}
            </ul>
            {workFieldData.subCases.map((subCase, index) => (
              <p key={index}>- {subCase.content}</p>
            ))}
          </div>
          <div className="members" ref={membersSectionRef}>
            <h1>주요 구성원</h1>
            <div className="members-grid">
              {visibleLawyers.map((lawyer, index) => (
                <div key={index}>
                  <img src={lawyer.mainImg} alt="" />
                  <p className="p1">
                    <span>{lawyer.nameKo}</span>
                    <span>({lawyer.nameCh})</span>
                  </p>
                  <p className="p2">{lawyer.position}</p>
                  <p className="p3">{lawyer.firstMainCareer}</p>
                  <p className="p3">{lawyer.secondMainCareer}</p>
                </div>
              ))}
            </div>
          </div>
          {lawyerList.length > 6 && (
            <div className="toggle-button-wrap">
              <button className="toggle-button" onClick={handleToggle}>
                {showAll ? "접기" : "더보기"}
                {showAll ? (
                  <img src={img.icons.up} alt="" />
                ) : (
                  <img src={img.icons.down} alt="" />
                )}
              </button>
            </div>
          )}

          <div className="recent-news" ref={newsSectionRef}>
            <h1>뉴스레터</h1>
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // navigation
                slidesPerView={4}
                spaceBetween={5}
                scrollbar={{ draggable: true }}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                breakpoints={{
                  300: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {newsLetterList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="newsletter-content">
                      <div className="mark">
                        <span>{item.category}</span>
                      </div>
                      <div className="title">
                        <span>{item.title}</span>
                      </div>
                      <div className="bottom">
                        <span className="date">
                          {item.createdAt.slice(0, 10)}
                        </span>
                        <Link to="/newsletter">
                          <span className="more">자세히 보기</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="content-right">
          <p onClick={() => scrollToSection(introduce)}>01 소개</p>
          <p onClick={() => scrollToSection(workSectionRef)}>02 대표사례</p>
          <p onClick={() => scrollToSection(membersSectionRef)}>
            03 주요 구성원
          </p>
          <p onClick={() => scrollToSection(newsSectionRef)}>04 관련 기사</p>
        </div>
      </div>
    </div>
  );
};

export default WorkFieldDetailPage;
