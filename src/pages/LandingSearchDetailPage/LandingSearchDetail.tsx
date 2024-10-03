import { useEffect, useState } from "react";
import img from "../../assets/images/img";
import useSearchStore from "../../stores/searchStore";
import { useParams } from "react-router-dom";
import { getSearchNews } from "../../api/getSearchNews";
import { getSearchNewsLetter } from "../../api/getSearchNewsLetter";

const LandingSearchDetailPage = () => {
  const section = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { keyword } = useSearchStore();
  const [data, setData] = useState<any[]>([]);

  const totalPages = Array.isArray(data) ? Math.ceil(data.length / 7) : 1;
  const currentItems = Array.isArray(data)
    ? data.slice((currentPage - 1) * 7, currentPage * 7)
    : [];

  useEffect(() => {
    if (section.section === "법인소식") {
      const fetchNewsData = async () => {
        try {
          const newsData = await getSearchNews(
            keyword,
            currentPage,
            "Lawvax소식"
          );
          setData(newsData);
        } catch (error) {
          console.error("Lawvax소식 페이지 검색 실패:", error);
        }
      };
      fetchNewsData();
    }

    if (section.section === "언론보도") {
      const fetchNewsData = async () => {
        try {
          const newsData = await getSearchNews(
            keyword,
            currentPage,
            "언론보도"
          );
          setData(newsData.newsList);
        } catch (error) {
          console.error("언론보도 페이지 검색 실패:", error);
        }
      };
      fetchNewsData();
    }

    if (section.section === "인재영입") {
      const fetchNewsData = async () => {
        try {
          const newsData = await getSearchNews(
            keyword,
            currentPage,
            "인재영입"
          );
          setData(newsData);
        } catch (error) {
          console.error("인재영입 페이지 검색 실패:", error);
        }
      };
      fetchNewsData();
    }

    if (section.section === "뉴스레터") {
      const fetchNewsLetterData = async () => {
        try {
          const newsLetterData = await getSearchNewsLetter(
            keyword,
            currentPage
          );
          setData(newsLetterData);
        } catch (error) {
          console.error("뉴스레터 페이지 검색 실패:", error);
        }
      };
      fetchNewsLetterData();
    } // eslint-disable-next-line
  }, [section]);

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
    <div className="landing-search-detail-page">
      <div className="process">
        <img src={img.icons.home} alt="" />
        <span>HOME</span>
        {keyword && <span className="search">{">"}</span>}
        {keyword && <span className="search">{keyword}</span>}{" "}
        <span className="search">{">"}</span>
        <span className="search">{section.section}</span>
      </div>
      <div className="sub-title">
        <h1>{section.section}</h1>
      </div>
      <div className="content-wrap">
        {currentItems.slice(0, 7).map((news, index) => (
          <div key={index} className="news-item">
            <h3 className="title">{news.title}</h3>
            <p className="content">{news.summary}</p>
            <p className="date">{news.createAt?.slice(0, 10)}</p>
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

export default LandingSearchDetailPage;
