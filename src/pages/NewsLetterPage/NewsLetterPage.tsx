import { Link } from "react-router-dom";
import home from "../../assets/images/icons/home.png";
import { newsLetter } from "../../const/newLetter";
import { useState } from "react";
import icons from "../../assets/images/icons/icons";

const NewsLetterPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(newsLetter.newsList.length / 8);
  // const currentItems = newsLetter.newsList.slice(
  //   (currentPage - 1) * 8,
  //   currentPage * 8
  // );

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
    <div className="newsletter-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>뉴스레터</span>
      </div>
      <div className="title">
        <p className="roman-title" style={{ fontSize: "2.5em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            N
          </span>
          EWS <br />
          LETTER
        </p>
      </div>
      <div className="card-wrap">
        {newsLetter.newsList.slice(0, 4).map((news, index) => (
          <div className="newsletter-content" key={index}>
            <div className="mark">
              <span>회계 법률</span>
            </div>
            <div className="title">
              <span>{news.title}</span>
            </div>
            <div className="bottom">
              <span className="date">{news.createAt.slice(0, 10)}</span>
              <Link to="/newsletter/post">
                <span className="more">자세히 보기</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="list-wrap">
        {newsLetter.newsList.slice(4, 8).map((news, index) => (
          <div className="list" key={index}>
            <div className="top">
              <div className="mark">
                <span>회계 법률</span>
              </div>
              <span>{news.createAt.slice(0, 10)}</span>
            </div>
            <div className="bottom">
              <span>{news.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <img
          src={icons.left02}
          alt="First Page"
          onClick={handleFirstClick}
          style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
        />
        <img
          src={icons.left}
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
          src={icons.right}
          alt=""
          onClick={handleNextClick}
          style={{
            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
          }}
        />
        <img
          src={icons.right02}
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

export default NewsLetterPage;
