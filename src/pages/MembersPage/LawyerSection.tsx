import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import lawyer1 from "../../assets/images/hiredSample.png";
import { lawyerList } from "../../const/lawyerList";
import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";

const Lawyersection = () => {
  const [selectedLawyerIndex, setSelectedLawyerIndex] = useState<number | null>(
    null
  );
  const [showAll, setShowAll] = useState(false);
  const visibleLawyers = showAll ? lawyerList : lawyerList.slice(0, 6); // 처음엔 6명만 표시

  const handleClick = (index: number) => {
    setSelectedLawyerIndex(index);
  };

  const handleToggle = () => {
    setShowAll((prevState) => !prevState); // 상태 토글
  };

  // const swiperRef = useRef(null);

  // const handleSlideClick = (index: Number) => {
  //   if (swiperRef.current && (swiperRef.current as any).swiper) {
  //     (swiperRef.current as any).swiper.slideTo(index);
  //   }
  // };

  return (
    <section className="lawyer-section">
      <div className="grid-wrap">
        {visibleLawyers.map((lawyer, index) => (
          <div
            key={index} // 인덱스를 key로 사용
            className={`lawyer-item ${selectedLawyerIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="img-wrap">
              <img
                src={lawyer1} // 단일 컬러 이미지 사용
                alt={lawyer.name}
              />
            </div>
            {selectedLawyerIndex === index && (
              <div className="text-wrap">
                <p className="title">{lawyer.title}</p>
                <p className="name">{lawyer.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="toggle-button" onClick={handleToggle}>
        {showAll ? "접기" : "더보기"}
        {showAll ? <img src={up} alt="" /> : <img src={down} alt="" />}
      </button>

      {/* <div className="lawyer-title">
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
      </div> */}
    </section>
  );
};

export default Lawyersection;
