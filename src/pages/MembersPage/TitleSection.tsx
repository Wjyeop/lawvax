import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import home from "../../assets/images/icons/home.png";
import searchIcon from "../../assets/images/LandingPageSearchIcon.png";
import lawyer from "../../assets/images/lawyer1.png";

const TitleSection = () => {
  return (
    <section className="title-section">
      <div className="process">
        <img src={home} alt="" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>구성원</span>
      </div>
      <div className="sub-title">
        <p className="roman-title" style={{ fontSize: "2.5em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            H
          </span>
          IRED & <br />
          LAWYER
        </p>
      </div>
      <div className="search-bar-wrap">
        <div className="search-bar">
          <select className="category-select">
            <option value="category">업무분야선택</option>
            <option value="category">업무분야선택</option>
            <option value="category">업무분야선택</option>
          </select>
          <input
            type="text"
            placeholder="성함을 입력해주세요."
            className="search-input"
          />
          <div>
            <img className="search-icon" src={searchIcon} alt="search-icon" />
          </div>
        </div>
      </div>
      <div className="hired-title">
        <span className="roman-title">HIRED</span>
      </div>
      <div className="hired">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          slidesPerView={1}
          spaceBetween={10}
          onActiveIndexChange={(swiper: any) =>
            console.log("active index changed", swiper.activeIndex)
          }
        >
          <SwiperSlide>
            <div>
              <div className="img-wrap">
                <img src={lawyer} alt="" />
              </div>
              <div className="text-wrap">
                <p>변호사</p>
                <span>유성열</span>
                <span></span>
                <p>전 국세청장</p>
                <p>검찰 근무 및 변호사 활동 중 공직자 비리, 기업 비리...</p>
                <p>view more</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="img-wrap">
                <img src={lawyer} alt="" />
              </div>
              <div className="text-wrap">
                <p>변호사</p>
                <span>유성열</span>
                <span></span>
                <p>전 국세청장</p>
                <p>검찰 근무 및 변호사 활동 중 공직자 비리, 기업 비리...</p>
                <p>view more</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TitleSection;
