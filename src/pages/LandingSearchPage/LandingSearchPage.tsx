import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import img from "../../assets/images/img";
import { Link, useNavigate } from "react-router-dom";
import useSearchStore from "../../stores/searchStore";
import { getLandingSearch } from "../../api/getLandingSearch";

const LandingSearchPage = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const { searchResults, keyword, setSearchResults, setKeyword } =
    useSearchStore();
  const [tempKeyword, setTempKeyword] = useState(keyword);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };
  const handleBlur = () => {
    setTimeout(() => {}, 100);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, []);

  const handleSearch = async () => {
    try {
      setKeyword(tempKeyword.trim());
      const results = await getLandingSearch(tempKeyword.trim(), true);
      setSearchResults(results);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempKeyword(e.target.value);
  };

  const handleMoreClick = (section: string) => {
    navigate(`/landing-search-detail/${section}`);
  };

  return (
    <div className="landing-search-page">
      {/* 검색 바 */}
      <div className="process">
        <img src={img.icons.home} alt="" />
        <span>HOME</span>
        <span className="search">{">"}</span>
        <span className="search">{keyword ? keyword : "검색결과"}</span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="키워드를 입력해주세요."
          className="search-input"
          onBlur={handleBlur}
          value={tempKeyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <img
          className="search-icon"
          src={img.icons.search}
          alt="search-icon"
          onClick={handleSearch}
        />
      </div>

      {/* 구성원 섹션 */}

      {searchResults?.구성원?.length > 0 && (
        <div className="members-section">
          <div className="sub-title">
            <h1>구성원</h1>
          </div>
          <div className="members-wrap">
            {searchResults.구성원.map((lawyer: any, index: number) => (
              <div key={index} className="lawyer-item">
                <Link to={`/members/profile/${lawyer.id}`}>
                  <img src={lawyer.mainImg} alt={lawyer.nameKo} />
                </Link>
                <div className="text-wrap">
                  <p className="p1">
                    <span>{lawyer.nameKo}</span>
                  </p>
                  <p className="p2">{lawyer.position}</p>
                  <p className="p3">{lawyer.firstMainCareer}</p>
                  {lawyer.secondMainCareer && (
                    <p className="p3">{lawyer.secondMainCareer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {searchResults?.구성원?.length > 8 && (
            <button className="toggle-button" onClick={handleToggle}>
              {showAll ? "접기" : "더보기"}
              {showAll ? (
                <img src={img.icons.up} alt="" />
              ) : (
                <img src={img.icons.down} alt="" />
              )}
            </button>
          )}
        </div>
      )}

      {/* 업무분야 섹션 */}
      {searchResults?.업무분야?.length > 0 && (
        <div className="service-section">
          <div className="sub-title">
            <h1>업무분야</h1>
          </div>
          <div className="content">
            <ul>
              {searchResults.업무분야.map((field: string, index: number) => (
                <Link to={`/workfield/detail/${field}`}>
                  <li key={index}>{field}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 법인소식 섹션 */}
      {searchResults?.법인소식?.length > 0 && (
        <div className="news-section01">
          <div className="sub-title">
            <h1>
              법인소식
              <button
                className="more"
                onClick={() => handleMoreClick("법인소식")}
              >
                <img src={img.more} alt="" />
              </button>
            </h1>
          </div>
          <div className="content">
            {searchResults.법인소식.map((news: any, index: number) => (
              <div key={index} className="news-item">
                <h3 className="title">{news.title}</h3>
                <p className="content">{news.summary}</p>
                <p className="date">{news.createAt.slice(0, 10)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 언론보도 섹션 */}
      {searchResults?.언론보도?.length > 0 && (
        <div className="news-section02">
          <div className="sub-title">
            <h1>
              언론보도
              <button
                className="more"
                onClick={() => handleMoreClick("언론보도")}
              >
                <img src={img.more} alt="" />
              </button>
            </h1>
          </div>
          <div className="content">
            {searchResults.언론보도.map((news: any, index: number) => (
              <div key={index} className="news-item">
                <h3 className="title">{news.title}</h3>
                <p className="content">{news.summary}</p>
                <p className="date">{news.createAt.slice(0, 10)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 인재영입 섹션 */}
      {searchResults?.인재영입?.length > 0 && (
        <div className="news-section03">
          <div className="sub-title">
            <h1>
              인재영입
              <button
                className="more"
                onClick={() => handleMoreClick("인재영입")}
              >
                <img src={img.more} alt="" />
              </button>
            </h1>
          </div>
          <div className="content">
            {searchResults.인재영입.map((news: any, index: number) => (
              <div key={index} className="news-item">
                <h3 className="title">{news.title}</h3>
                <p className="content">{news.summary}</p>
                <p className="date">{news.createAt.slice(0, 10)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 뉴스레터 섹션 */}
      {searchResults?.뉴스레터?.length > 0 && (
        <div className="newsletter-section">
          <div className="sub-title">
            <h1>
              뉴스레터
              <button
                className="more"
                onClick={() => handleMoreClick("뉴스레터")}
              >
                <img src={img.more} alt="" />
              </button>
            </h1>
          </div>
          <div className="content">
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={4}
                spaceBetween={5}
                scrollbar={{ draggable: true }}
              >
                {searchResults.뉴스레터.map(
                  (newsletter: any, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="newsletter-content">
                        <div className="mark">
                          <span>{newsletter.category}</span>
                        </div>
                        <div className="title">
                          <span>{newsletter.title}</span>
                        </div>
                        <div className="bottom">
                          <span className="date">
                            {newsletter.createAt.slice(0, 10)}
                          </span>{" "}
                          <Link to="/newsletter">
                            <span className="more">자세히 보기</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      )}
      {
        // 검색 결과가 없을 때
        searchResults &&
          Object.keys(searchResults).every(
            (key) => searchResults[key].length === 0
          ) && (
            <div className="no-result">
              <h1>검색 결과가 없습니다.</h1>
            </div>
          )
      }
    </div>
  );
};

export default LandingSearchPage;
