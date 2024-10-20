import home from "../../assets/images/icons/home.png";
// import share from "../../assets/images/icons/share.png";
// import print from "../../assets/images/icons/print.png";
import list from "../../assets/images/icons/list.png";
import { Link, useParams } from "react-router-dom"; // useParams 사용
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { getNewsLetterDetailData } from "../../api/getNewsLetterDetailData"; // 뉴스레터 상세 데이터 API
import { getNewsLetterDetailListData } from "../../api/getNewsLetterDetailListData";

const NewsLetterPostPage = () => {
  const { id } = useParams(); // URL에서 id 값을 가져옴

  const [newsLetterDetail, setNewsLetterDetail] = useState({
    title: "",
    content: "",
    createdAt: "",
  });

  const [relatedNews, setRelatedNews] = useState([
    {
      id: 0,
      title: "",
      createdAt: "",
      mainImg: "",
    },
  ]);

  // 뉴스레터 상세 데이터와 관련 뉴스레터 데이터를 가져옴
  useEffect(() => {
    const fetchNewsLetterDetail = async () => {
      if (id) {
        const data = await getNewsLetterDetailData(Number(id)); // URL에서 가져온 id를 사용
        setNewsLetterDetail(data);
      }
    };

    const fetchRelatedNews = async () => {
      const data = await getNewsLetterDetailListData();
      setRelatedNews(data);
    };

    fetchNewsLetterDetail();
    fetchRelatedNews();
  }, [id]);

  return (
    <div className="post-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>뉴스레터</span>
        <span>{">"}</span>
        <span>게시물</span>
      </div>
      <div className="title">
        <h1>{newsLetterDetail.title}</h1>
      </div>
      <div className="section1">
        <span className="date">{newsLetterDetail.createdAt.slice(0, 10)}</span>
        {/* 공유하기 및 인쇄하기 버튼 */}
        {/* <div>
          <img src={share} alt="공유하기" />
          <span>공유하기</span>
          <img src={print} alt="인쇄하기" />
          <span>인쇄하기</span>
        </div> */}
      </div>
      <div className="content">
        {/* 뉴스레터 상세 내용 출력 */}
        <p dangerouslySetInnerHTML={{ __html: newsLetterDetail.content }}></p>
      </div>

      {relatedNews?.length > 0 ? (
        <div>
          <div className="related-news">
            <div className="list">
              <Link to="/newsletter">
                <img src={list} alt="목록보기" />
                <span>목록보기</span>
              </Link>
            </div>
            <h3>관련된 뉴스레터</h3>
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
            {relatedNews?.map((news, index) => (
              <SwiperSlide key={index}>
                <div className="content">
                  <img src={news.mainImg} alt={news.title} />
                  <div className="text-wrap">
                    <h3 className="title">{news.title}</h3>
                    <div className="bottom">
                      <span className="date">
                        {news.createdAt.slice(0, 10)}
                      </span>
                      <Link to={`/newsletter/post/${news.id}`}>
                        <span className="more">자세히보기</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div>
          <div className="related-news">
            <div className="list">
              <Link to="/newsletter">
                <img src={list} alt="목록보기" />
                <span>목록보기</span>
              </Link>
            </div>
            <h3>관련된 뉴스레터</h3>
          </div>
          <div>관련된 뉴스레터가 없습니다.</div>
        </div>
      )}
    </div>
  );
};

export default NewsLetterPostPage;
