import React, { useRef, useState } from "react";
import more from "../../assets/images/more.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import lawyer1 from "../../assets/images/hiredSample.png";
import { Link } from "react-router-dom";

const HiredLawyerSection = () => {
  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(0);

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
                <img src={more} alt="" />
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          spaceBetween={0}
          slidesOffsetBefore={50}
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
              slidesPerView: 4,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
              <div
                className={`content ${activeSlideIndex === index ? "active" : ""}`}
              >
                <div className="img-wrap">
                  <img src={lawyer1} alt={`Slide ${index}`} />
                </div>
                <div className="text-wrap">
                  <p className="job">변호사</p>
                  <p className="name">홍길동</p>
                  <p className="class">국세청장</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HiredLawyerSection;
