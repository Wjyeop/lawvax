import React, { useRef } from "react";
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

  const handleSlideClick = (index: Number) => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slideTo(index);
    }
  };

  return (
    <section className="hired-section">
      <div className="title">
        <div>
          <p style={{ fontSize: "2.5em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              H
            </span>
            IRED & <br />
            LAWYER
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
          spaceBetween={10}
          slidesOffsetBefore={50}
          slidesOffsetAfter={50}
          ref={swiperRef}
          onActiveIndexChange={(swiper: any) =>
            console.log("active index changed", swiper.activeIndex)
          }
        >
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
              <div className="content">
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
