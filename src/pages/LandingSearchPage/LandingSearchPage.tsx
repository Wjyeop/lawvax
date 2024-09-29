import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import img from "../../assets/images/img";
import { Link } from "react-router-dom";
import useSearchStore from "../../stores/searchStore";
import { getLandingSearch } from "../../api/getLandingSearch";

const LandingSearchPage = () => {
  const [showAll, setShowAll] = useState(false);
  const { searchResults, keyword, setSearchResults, setKeyword } =
    useSearchStore();
  const [tempKeyword, setTempKeyword] = useState(keyword);

  useEffect(() => {
    console.log("검색된 키워드:", keyword);
    console.log("검색 결과:", searchResults);
  }, [searchResults, keyword]);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };
  const handleBlur = () => {
    setTimeout(() => {}, 100);
  };

  const handleSearch = async () => {
    if (!tempKeyword.trim()) return;
    try {
      setKeyword(tempKeyword); // 임시 검색어를 실제 검색어로 설정
      const results = await getLandingSearch(tempKeyword, true);
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
    setTempKeyword(e.target.value); // 임시 검색어 업데이트
  };

  return (
    <div className="landing-search-page">
      {/* 검색 바 */}
      <div className="process">
        <img src={img.icons.home} alt="" />
        <span>HOME</span>
        <span className="search">{">"}</span>
        <span className="search">{keyword}</span>
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
                <img src={lawyer.mainImg} alt={lawyer.nameKo} />
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
            <h1>
              업무분야
              <Link to="/landing-search-detail">
                <button className="more">
                  <img src={img.more} alt="" />
                </button>
              </Link>
            </h1>
          </div>
          <div className="content">
            <ul>
              {searchResults.업무분야.map((field: string, index: number) => (
                <li key={index}>{field}</li>
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
              <Link to="/landing-search-detail">
                <button className="more">
                  <img src={img.more} alt="" />
                </button>
              </Link>
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
              <Link to="/landing-search-detail">
                <button className="more">
                  <img src={img.more} alt="" />
                </button>
              </Link>
            </h1>
          </div>
          <div className="content">
            {searchResults.언론보도.map((news: any, index: number) => (
              <div key={index} className="news-item">
                <h3 className="title">{news.title}</h3>
                <p className="content">{news.summary}</p>
                <p className="date">{news.createAt}</p>
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
              <Link to="/landing-search-detail">
                <button className="more">
                  <img src={img.more} alt="" />
                </button>
              </Link>
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
              <Link to="/landing-search-detail">
                <button className="more">
                  <img src={img.more} alt="" />
                </button>
              </Link>
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
