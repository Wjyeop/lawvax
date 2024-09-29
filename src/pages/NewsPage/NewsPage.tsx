import { useState } from "react";
import { newsData } from "../../const/newsList";
import home from "../../assets/images/icons/home.png";
import { Link } from "react-router-dom";
import img from "../../assets/images/img";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("LawVax소식");

  const totalPages = Math.ceil(newsData.length / 9);
  const currentItems = newsData.slice((currentPage - 1) * 9, currentPage * 9);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstClick = () => {
    setCurrentPage(1);
  };

  const handleLastClick = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="news-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>법인소식</span>
        <span>{">"}</span>
        <span className="search">{activeTab}</span>
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
          className={activeTab === "LawVax소식" ? "active" : ""}
          onClick={() => setActiveTab("LawVax소식")}
        >
          LawVax소식
        </button>
        <button
          className={activeTab === "언론보도" ? "active" : ""}
          onClick={() => setActiveTab("언론보도")}
        >
          언론보도
        </button>
        <button
          className={activeTab === "인재영입" ? "active" : ""}
          onClick={() => setActiveTab("인재영입")}
        >
          인재영입
        </button>
        {/* <button
          className={activeTab === "수상" ? "active" : ""}
          onClick={() => setActiveTab("수상")}
        >
          수상
        </button> */}
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
        <img
          src={img.icons.left02}
          alt="First Page"
          onClick={handleFirstClick}
          style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
        />
        <img
          src={img.icons.left}
          alt=""
          onClick={handlePrevClick}
          style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
        />
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
        <img
          src={img.icons.right}
          alt=""
          onClick={handleNextClick}
          style={{
            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
          }}
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
