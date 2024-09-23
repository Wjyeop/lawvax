import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import img from "../../assets/images/img";
import { membersLandingPage } from "../../api/membersLandingPage";

const HiredLawyerSection = () => {
  interface MemberItem {
    nameKo: string;
    position: string;
    firstMainCareer: string;
  }

  const [membersData, setMembersData] = useState<MemberItem[]>([]);
  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await membersLandingPage();
        setMembersData(data);
      } catch (error) {
        console.error("뉴스 조회 중 에러 발생:", error);
      }
    };

    fetchNews();
  }, []);

  const handleSlideClick = (index: number) => {
    setActiveSlideIndex(index);

    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slideTo(index);
    }
  };

  return (
    <section className="hired-section">
      <div className="title">
        <div>
          <p style={{ fontSize: "2em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              P
            </span>
            ROFESSIONAL
            <Link to="/members">
              <button className="more">
                <img src={img.more} alt="" />
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div className="content-wrap">
        <div className="section01">
          <div>
            <div className="img-wrap">
              <img src={img.lawyer4} alt="" />
            </div>
            <div className="text-wrap">
              <p className="job">변호사</p>
              <p className="name">김변호사</p>
              <p className="class">변호사 1급</p>
            </div>
          </div>
        </div>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            spaceBetween={0}
            slidesOffsetBefore={20}
            slidesOffsetAfter={50}
            ref={swiperRef}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {membersData.map((data, index) => (
              <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
                <div
                  className={`content ${activeSlideIndex === index ? "active" : ""}`}
                >
                  <div className="img-wrap">
                    <img src={img.lawyer1} alt={`Slide ${index}`} />
                  </div>
                  <div className="text-wrap">
                    <p className="job">{data.position}</p>
                    <p className="name">{data.nameKo}</p>
                    <p className="class">{data.firstMainCareer}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HiredLawyerSection;
