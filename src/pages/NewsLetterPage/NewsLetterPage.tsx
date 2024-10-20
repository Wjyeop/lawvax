import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home from "../../assets/images/icons/home.png";
import img from "../../assets/images/img";
import { getNewsLetterData } from "../../api/getNewsLetterData";

const NewsLetterPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsLetterData, setNewsLetterData] = useState({
    totalCount: 0,
    newsletterList: [
      {
        id: 0,
        title: "",
        createdAt: "",
      },
    ],
  });

  const itemsPerPage = 8; // 한 페이지당 8개의 뉴스레터 항목
  const pagesPerGroup = 5;
  const totalPages = Math.ceil(newsLetterData.totalCount / itemsPerPage);

  const [pageGroup, setPageGroup] = useState(1);
  const startPage = (pageGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  useEffect(() => {
    const fetchNewsLetter = async () => {
      try {
        const data = await getNewsLetterData(currentPage);
        setNewsLetterData({
          totalCount: data.totalCount,
          newsletterList: data.newsletterList,
        });
      } catch (error) {
        console.error("뉴스레터 데이터 조회 중 에러 발생:", error);
      }
    };

    fetchNewsLetter();
  }, [currentPage]);

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
    <div className="newsletter-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>뉴스레터</span>
      </div>

      <div className="title">
        <p className="roman-title" style={{ fontSize: "2em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            N
          </span>
          EWS <br />
          LETTER
        </p>
      </div>

      {/* 뉴스레터 카드 래퍼 */}
      <div className="card-wrap">
        {newsLetterData.newsletterList.length > 0 ? (
          newsLetterData?.newsletterList.slice(0, 4).map((news, index) => (
            <div className="newsletter-content" key={index}>
              <div className="mark">
                <span>회계 법률</span>
              </div>
              <div className="title">
                <span>{news.title}</span>
              </div>
              <div className="bottom">
                <span className="date">{news.createdAt.slice(0, 10)}</span>
                <Link to={`/newsletter/post/${news.id}`}>
                  <span className="more">자세히 보기</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>뉴스레터가 없습니다.</p>
        )}
      </div>

      {/* 뉴스레터 리스트 래퍼 */}
      <div className="list-wrap">
        {newsLetterData.newsletterList.length > 4
          ? newsLetterData.newsletterList.slice(4, 8).map((news, index) => (
              <div className="list" key={index}>
                <div className="top">
                  <div className="mark">
                    <span>회계 법률</span>
                  </div>
                  <span>{news.createdAt.slice(0, 10)}</span>
                </div>
                <div className="bottom">
                  <span>{news.title}</span>
                </div>
              </div>
            ))
          : null}
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

export default NewsLetterPage;
