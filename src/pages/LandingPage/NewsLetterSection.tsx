import more from "../../assets/images/more.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const NewsLetterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="title">
        <div>
          <p style={{ fontSize: "2.5em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              N
            </span>
            EWS <br />
            LETTER
            <Link to="/newsletter">
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
          slidesPerView={4} // 슬라이드 4개씩 표시
          spaceBetween={5} // 슬라이드 간 간격
          scrollbar={{ draggable: true }}
          slidesOffsetBefore={50} // 슬라이드 시작 지점
          slidesOffsetAfter={0} // 슬라이드 끝 지점
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
                      '법률AI'거스를 수 없는 대세...변호사 대체 아닌 '협업'으로
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
    </section>
  );
};

export default NewsLetterSection;
