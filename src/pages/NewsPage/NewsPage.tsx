import { useEffect, useState } from "react";
import home from "../../assets/images/icons/home.png";
import { Link } from "react-router-dom";
import img from "../../assets/images/img";
import { getNewsData } from "../../api/getNewsData";
import { useNewsStore } from "../../stores/newsStore";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState({
    totalCount: 0,
    newsList: [
      {
        id: 0,
        title: "",
        mainImg: "",
        createdAt: "",
      },
    ],
  });

  const selectedTab = useNewsStore((state) => state.selectedTab);
  const setSelectedTab = useNewsStore((state) => state.setSelectedTab);
  const setSelectedNewsId = useNewsStore((state) => state.setSelectedNewsId);

  const itemsPerPage = 9;
  const pagesPerGroup = 5;
  const totalPages = Math.ceil(newsData.totalCount / itemsPerPage);

  const [pageGroup, setPageGroup] = useState(1);
  const startPage = (pageGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsData(currentPage, selectedTab);
        setNewsData({
          totalCount: data.totalCount,
          newsList: data.newsList,
        });
      } catch (error) {
        console.error("뉴스 페이지 조회 중 에러 발생:", error);
      }
    };

    fetchNews();
  }, [currentPage, selectedTab]);

  const handleClickTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleSelectNews = (id: number) => {
    setSelectedNewsId(id);
  };

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevGroupClick = () => {
    if (pageGroup > 1) {
      setPageGroup(pageGroup - 1);
      setCurrentPage((pageGroup - 2) * pagesPerGroup + 1);
    }
  };

  const handleNextGroupClick = () => {
    if (endPage < totalPages) {
      setPageGroup(pageGroup + 1);
      setCurrentPage(pageGroup * pagesPerGroup + 1);
    }
  };

  const handleFirstClick = () => {
    setCurrentPage(1);
    setPageGroup(1);
  };

  const handleLastClick = () => {
    setCurrentPage(totalPages);
    setPageGroup(Math.ceil(totalPages / pagesPerGroup));
  };

  return (
    <div className="news-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>법인소식</span>
        <span>{">"}</span>
        <span className="search">{selectedTab}</span>
      </div>
      <div className="title">
        <div>
          <p className="about">About Us</p>
          <p style={{ fontSize: "2em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              N
            </span>
            EWS
          </p>
        </div>
      </div>
      <div className="theme-select">
        <button
          className={selectedTab === "Lawvax소식" ? "active" : ""}
          onClick={() => handleClickTab("Lawvax소식")}
        >
          Lawvax소식
        </button>
        <button
          className={selectedTab === "언론보도" ? "active" : ""}
          onClick={() => handleClickTab("언론보도")}
        >
          언론보도
        </button>
        <button
          className={selectedTab === "인재영입" ? "active" : ""}
          onClick={() => handleClickTab("인재영입")}
        >
          인재영입
        </button>
      </div>
      {newsData ? (
        <div className="news-grid">
          {newsData?.newsList.map((news, index) => (
            <div className="news-item" key={index}>
              <img src={`${news.mainImg}`} alt={news.title} />
              <div className="news-content">
                <p className="news-title">{news.title}</p>
                <div className="bottom">
                  <span className="news-date">
                    {news.createdAt.slice(0, 10)}
                  </span>
                  <span className="more">
                    <Link
                      to={`/news/post/${news.id}`}
                      onClick={() => handleSelectNews(news.id)}
                    >
                      자세히보기
                    </Link>{" "}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="news-grid">
          <div>뉴스가 없습니다.</div>
        </div>
      )}
      <div className="pagination">
        <img
          src={img.icons.left02}
          alt="First Page"
          onClick={handleFirstClick}
          style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
        />
        <img
          src={img.icons.left}
          alt="Previous Group"
          onClick={handlePrevGroupClick}
          style={{ cursor: pageGroup > 1 ? "pointer" : "not-allowed" }}
        />
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <span key={index}>
            <span
              className={`page-number ${currentPage === startPage + index ? "active" : ""}`}
              onClick={() => handleClick(startPage + index)}
            >
              {startPage + index}
            </span>
            {index < endPage - startPage && (
              <span className="separator">|</span>
            )}
          </span>
        ))}
        <img
          src={img.icons.right}
          alt="Next Group"
          onClick={handleNextGroupClick}
          style={{ cursor: endPage < totalPages ? "pointer" : "not-allowed" }}
        />
        <img
          src={img.icons.right02}
          alt="Last Page"
          onClick={handleLastClick}
          style={{
            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
          }}
        />
      </div>
    </div>
  );
};

export default NewsPage;
