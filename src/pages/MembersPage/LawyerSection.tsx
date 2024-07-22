import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import lawyer1 from "../../assets/images/hiredSample.png";

const Lawyersection = () => {
  const swiperRef = useRef(null);

  const handleSlideClick = (index: Number) => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slideTo(index);
    }
  };

  return (
    <section className="lawyer-section">
      <div className="lawyer-title">
        <span className="roman-title">LAWYER</span>
      </div>
      <div className="lawyer">
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

export default Lawyersection;
