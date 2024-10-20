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
import { useNewsStore } from "../../stores/newsStore";
import { useEffect, useState } from "react";
import { getNewsDetailData } from "../../api/getNewsDetailData";
import { getNewsDetailListData } from "../../api/getNewsDetailListData";

const NewsPostPage = () => {
  const { id } = useParams(); // URL에서 id 값을 가져옴
  const selectedTab = useNewsStore((state) => state.selectedTab); // 선택된 탭

  const [newsDetail, setNewsDetail] = useState({
    title: "",
    content: "",
    mainImg: "",
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

  useEffect(() => {
    const fetchNewsDetail = async () => {
      if (id) {
        const data = await getNewsDetailData(Number(id)); // URL에서 가져온 id를 사용
        setNewsDetail(data);
      }
    };

    const fetchRelatedNews = async () => {
      if (selectedTab) {
        const data = await getNewsDetailListData(String(selectedTab));
        setRelatedNews(data);
      }
    };

    fetchNewsDetail();
    fetchRelatedNews();
  }, [id, selectedTab]);

  return (
    <div className="post-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>법인소식</span>
        <span>{">"}</span>
        <span>{selectedTab}</span>
        <span>{">"}</span>
        <span>게시물</span>
      </div>
      <div className="title">
        <h1>{newsDetail.title}</h1>
      </div>
      <div className="section1">
        <span className="date">{newsDetail.createdAt.slice(0, 10)}</span>
        {/* <div>
          <img src={share} alt="공유하기" />
          <span>공유하기</span>
          <img src={print} alt="인쇄하기" />
          <span>인쇄하기</span>
        </div> */}
      </div>
      <div className="content">
        {/* <img src={img.newsBig1} alt={newsDetail.title} />
        <p className="sub-title">{newsDetail.title}</p> */}
        <p dangerouslySetInnerHTML={{ __html: newsDetail.content }}></p>
      </div>
      {relatedNews?.length > 0 && (
        <div>
          <div className="related-news">
            <div className="list">
              <Link to="/news">
                <img src={list} alt="목록보기" />
                <span>목록보기</span>
              </Link>
            </div>
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
            {relatedNews?.map((news, index) => (
              <SwiperSlide key={index}>
                <div className="content">
                  <img src={news.mainImg} alt={news.title} />
                  <div className="text-wrap">
                    <h3 className="title">{news.title}</h3>
                    <div className="bottom">
                      <span className="date">{news.createdAt}</span>
                      <Link to={`/news/post/${news.id}`}>
                        <span className="more">자세히보기</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default NewsPostPage;
