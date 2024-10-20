import home from "../../assets/images/icons/home.png";
import share from "../../assets/images/icons/share.png";
import print from "../../assets/images/icons/print.png";
import newsBig from "../../assets/images/newsBig1.png";
import list from "../../assets/images/icons/list.png";
import { relatedNews } from "../../const/relatedNews";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const PostPage = () => {
  return (
    <div className="post-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>법인소식</span>
        <span>{">"}</span>
        <span>소식</span>
        <span>{">"}</span>
        <span>게시물</span>
      </div>
      <div className="title">
        <h1>[소식]글로벌 항공우주산업 학회 세미나 개최</h1>
      </div>
      <div className="section1">
        <span className="date">2024.06.24</span>
        <div>
          <img src={share} alt="" />
          <span>공유하기</span>
          <img src={print} alt="" />
          <span>인쇄하기</span>
        </div>
      </div>
      <div className="content">
        <img src={newsBig} alt="" />
        <p className="sub-title">
          21일 항공박물관에서 열린 글로벌항공우주산업학회 학술 세미나 참석자들이
          기념사진을 찍고 있다. {"<"}글로벌항공우주산업학회{">"}...
        </p>
        <p>
          글로벌항공우주산업학회(회장 신동춘)는 21일 서울시 강서구
          국립항공박물관에서 제14회 학술세미나를 개최했다.
          <br />
          '변동하는 환경에 대응하는 항공우주산업의 약진'을 주제로 열린 이번
          세미나에는 신동춘 학회장의 개회사에 이어 김영국 국토교통부
          항공정책실장(대행), 이대성 항공안전기술원장, 윤우 공군발전협회
          항공우주력연구원장, 박정이 밀리테크협회 회장, 정연석 항공정책연구소
          이사장의 축사가 이어졌다.
          <br />
          이번 세미나는 2개 세션으로 진행됐다.
        </p>
      </div>
      <div className="related-news">
        <Link to="/news">
          <div className="list">
            <img src={list} alt="" />
            <span>목록보기</span>
          </div>
        </Link>
        <h3>관련된 소식</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView={3}
        spaceBetween={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
      >
        {relatedNews?.map((news) => (
          <SwiperSlide>
            <div key={news.id} className="content">
              <img src={news.image} alt={news.title} />
              <div className="text-wrap">
                <h3 className="title">{news.title}</h3>
                <div className="bottom">
                  <span className="date">{news.date}</span>
                  <span className="more">자세히보기</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostPage;
