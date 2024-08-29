import icons from "../../assets/images/icons/icons";
import images from "../../assets/images/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ServicesDetail = () => {
  const introduce = useRef(null);
  const workSectionRef = useRef(null);
  const casesSectionRef = useRef(null);
  const membersSectionRef = useRef(null);
  const newsSectionRef = useRef(null);

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="services-detail-page">
      <div className="process">
        <img src={icons.home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>업무분야</span>
        <span>{">"}</span>
        <span>업무분야_1</span>
        <span>{">"}</span>
        <span>업무분야</span>
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
        <p>업무분야</p>
        <img src={images.work01} alt="" />
      </div>
      <div className="content-wrap">
        <div className="content-left">
          <div className="sub-title-ment">
            <p>
              LawVax의 대표변호사들은 대기업 등의 분식회계, 횡령, 배임, 탈세,
              자본시장법위반 등 회계 비리와 관련된 수많은 사건의 수사나 변론에
              관여한 특별한 경력을 가지고 있습니다. 또한 LawVax는 우수한 역량을
              보유한회계·세무법인과도 업무 협력 체계를 구축해 놓고 있으며,
              앞으로 회계, 조세 분야 전문가를 추가로 영입할 계획입니다. 따라서
              LawVax는 회계, 횡령, 배임, 탈세 등 회계 관련 법률 리스크에 대하여
              누구보다도 탁월한 법적 조언을 드릴 수 있을 것입니다.
            </p>
          </div>
          <div className="main-field-of-work" ref={workSectionRef}>
            <h1>주요업무분야</h1>
            <h3>업무분야 키워드 내용 설명 작성란</h3>
            <ul>
              <li>업무분야키 키워드 내용 설명 작성란</li>
              <li>업무분야키 키워드 내용 설명 작성란</li>
              <li>업무분야키 키워드 내용 설명 작성란</li>
            </ul>
            <h3>업무분야 키워드 내용 설명 작성란</h3>
            <ul>
              <li>업무분야키 키워드 내용 설명 작성란</li>
              <li>업무분야키 키워드 내용 설명 작성란</li>
              <li>업무분야키 키워드 내용 설명 작성란</li>
            </ul>
            <h3>업무분야 키워드 내용 설명 작성란</h3>
            <ul>
              <li>업무분야키 키워드 내용 설명 작성란</li>
              <li>업무분야키 키워드 내용 설명 작성란</li>
              <li>업무분야키 키워드 내용 설명 작성란</li>
            </ul>
          </div>
          <div className="featured-cases" ref={casesSectionRef}>
            <h1>대표사례</h1>
            <ul>
              <li>대표사례 내용 설명 작성란</li>
              <li>대표사례 내용 설명 작성란</li>
              <li>대표사례 내용 설명 작성란</li>
            </ul>
          </div>
          <div className="members" ref={membersSectionRef}>
            <h1>구성원</h1>
            <div className="members-grid">
              <div>
                <img src={images.lawyer1} alt="" />
                <p className="p1">
                  <span>유성열</span>
                  <span>(柳成烈)</span>
                </p>
                <p className="p2">변호사</p>
                <p className="p3">
                  <span>T</span>
                  <span>02. 583. 6300</span>
                </p>
                <p className="p4">
                  <span>E</span>
                  <span>ysl@lawvax.co.kr</span>
                </p>
              </div>
              <div>
                <img src={images.lawyer1} alt="" />
                <p className="p1">
                  <span>유성열</span>
                  <span>(柳成烈)</span>
                </p>
                <p className="p2">변호사</p>
                <p className="p3">
                  <span>T</span>
                  <span>02. 583. 6300</span>
                </p>
                <p className="p4">
                  <span>E</span>
                  <span>ysl@lawvax.co.kr</span>
                </p>
              </div>
              <div>
                <img src={images.lawyer1} alt="" />
                <p className="p1">
                  <span>유성열</span>
                  <span>(柳成烈)</span>
                </p>
                <p className="p2">변호사</p>
                <p className="p3">
                  <span>T</span>
                  <span>02. 583. 6300</span>
                </p>
                <p className="p4">
                  <span>E</span>
                  <span>ysl@lawvax.co.kr</span>
                </p>
              </div>
            </div>
          </div>
          <div className="recent-news" ref={newsSectionRef}>
            <h1>최근소식</h1>
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // navigation
                slidesPerView={4}
                spaceBetween={5}
                scrollbar={{ draggable: true }}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
              >
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <SwiperSlide key={index}>
                      <div className="newsletter-content">
                        <div className="mark">
                          <span>회계 법률</span>
                        </div>
                        <div className="title">
                          <span>
                            '법률AI'거스를 수 없는 대세...변호사 대체 아닌
                            '협업'으로
                          </span>
                        </div>
                        <div className="bottom">
                          <span className="date">2024.07.01</span>
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
          <p onClick={() => scrollToSection(workSectionRef)}>02 주요업무분야</p>
          <p onClick={() => scrollToSection(casesSectionRef)}>03 대표사례</p>
          <p onClick={() => scrollToSection(membersSectionRef)}>
            04 주요 구성원
          </p>
          <p onClick={() => scrollToSection(newsSectionRef)}>05 최근소식</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
