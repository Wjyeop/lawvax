import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import lawyer from "../../assets/images/lawyer1.png";
import pre from "../../assets/images/icons/pre.png";
import viewMore from "../../assets/images/viewMore.png";
import { Link } from "react-router-dom";

const HiredSection = () => {
  return (
    <section className="hired-section">
      <div className="hired-title"></div>
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
                <p className="job">변호사</p>
                <span className="name">유성열</span>
                <span className="name-2">(柳成烈)</span>
                <div className="pre">
                  <img src={pre} alt="" />
                  <span>국세청장</span>
                </div>
                <p>
                  검찰 근무 및 변호사 활동 중 공직자 비리, 기업비리 관련 수사 및
                  변호 활동을 주로 하였습니다. 최근에는 기업 감사 지원 업무를
                  수행하여 이 부분에 많은 경험과 역량이 쌓였습니다. 앞으로
                  법무법인 로백스의 다른 변호사님들과 협업하여 보다 적극적으로
                  규모있는 활동을 하겠습니다.
                </p>
                <div className="viewmore">
                  <img src={viewMore} alt="" />
                </div>
              </div>
              <div className="gap"></div>
              <div className="back">YSY</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="img-wrap">
                <img src={lawyer} alt="" />
              </div>
              <div className="text-wrap">
                <p className="job">변호사</p>
                <span className="name">유성열</span>
                <span className="name-2">(柳成烈)</span>
                <div className="pre">
                  <img src={pre} alt="" />
                  <span>국세청장</span>
                </div>
                <p>
                  검찰 근무 및 변호사 활동 중 공직자 비리, 기업비리 관련 수사 및
                  변호 활동을 주로 하였습니다. 최근에는 기업 감사 지원 업무를
                  수행하여 이 부분에 많은 경험과 역량이 쌓였습니다. 앞으로
                  법무법인 로백스의 다른 변호사님들과 협업하여 보다 적극적으로
                  규모있는 활동을 하겠습니다.
                </p>
                <div className="viewmore">
                  <Link to="/profile">
                    <img src={viewMore} alt="" />
                  </Link>
                </div>
              </div>
              <div className="gap"></div>
              <div className="back">YSY</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HiredSection;
