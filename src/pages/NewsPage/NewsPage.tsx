import { useState } from "react";
import { newsData } from "../../const/newsList";
import home from "../../assets/images/icons/home.png";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(newsData.length / 9);
  const currentItems = newsData.slice((currentPage - 1) * 9, currentPage * 9);

  return (
    <div className="news-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>법인소식</span>
        <span>{">"}</span>
        <span className="search">소식</span>
      </div>
      <div className="title">
        <div>
          <p className="about">About Us</p>
          <p style={{ fontSize: "2.5em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              N
            </span>
            EWS
          </p>
        </div>
      </div>
      <div className="theme-select">
        <button className="active">소식</button>
        <button>언론보도</button>
        <button>인재영입</button>
        <button>수상</button>
      </div>
      <div className="news-grid">
        {currentItems.map((news, index) => (
          <div className="news-item" key={index}>
            <img src={`${news.imgSrc}`} alt={news.title} />
            <div className="news-content">
              <p className="news-title">{news.title}</p>
              <div className="bottom">
                <span className="news-date">{news.date}</span>
                <span className="more">
                  <Link to="/news/post">자세히보기</Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <span key={index}>
            <span
              className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </span>
            {index < totalPages - 1 && <span className="separator">|</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
