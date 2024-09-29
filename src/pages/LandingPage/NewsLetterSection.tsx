import more from "../../assets/images/more.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsLetterLandingPage } from "../../api/newsLetterLandingPage";

const NewsLetterSection = () => {
  interface NewsLetterItem {
    title: string;
    summary: string;
    mainImg: string;
    createAt: string;
    creatorName: string;
  }

  const [newsLetterData, setNewsLetterData] = useState<NewsLetterItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsLetterLandingPage();
        setNewsLetterData(data);
      } catch (error) {
        console.error("뉴스 조회 중 에러 발생:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="newsletter-section">
      <div className="title">
        <div>
          <p style={{ fontSize: "2em" }}>
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
          {newsLetterData.length > 0 &&
            newsLetterData.map((_, index) => (
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
