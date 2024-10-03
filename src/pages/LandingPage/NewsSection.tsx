import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/img";
import { getNewsLandingPage } from "../../api/newsLandingPage";

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("법인소식");
  const [currentIndex, setCurrentIndex] = useState(0); // 초기 index 상태
  const [fadeState, setFadeState] = useState(""); // 페이드 애니메이션 상태
  interface NewsItem {
    title: string;
    summary: string;
    mainImg: string;
    createAt: string;
    creatorName: string;
  }

  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  // activeTab이 변경될 때마다 뉴스 데이터를 가져오고 currentIndex를 0으로 설정
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsLandingPage(activeTab);
        setNewsData(data);
        setCurrentIndex(0); // 탭이 변경될 때 첫 번째 아이템을 보여주기 위해 currentIndex 초기화
      } catch (error) {
        console.error("뉴스 조회 중 에러 발생:", error);
      }
    };

    fetchNews();
  }, [activeTab]); // activeTab이 변경될 때마다 실행

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % newsData.length;
    setFadeState("fade-out");

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState("fade-in");
    }, 300);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + newsData.length) % newsData.length;
    setFadeState("fade-out");

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState("fade-in");
    }, 300);
  };

  return (
    <div className="news-section">
      <div className="title">
        <p className="blue">About Us</p>
        <div>
          <p style={{ fontSize: "2em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              N
            </span>
            EWS
            <Link to="/news">
              <button className="more">
                <img src={img.more} alt="More button" />
              </button>
            </Link>
          </p>
        </div>
      </div>

      <div className="theme-select">
        <button
          className={activeTab === "법인소식" ? "active" : ""}
          onClick={() => setActiveTab("법인소식")}
        >
          법인소식
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
      </div>

      <div className="content">
        <div className="img-section">
          {/* <img src={img.news1} alt="News" /> */}
          <img
            src={
              newsData[currentIndex]?.mainImg
                ? newsData[currentIndex]?.mainImg
                : img.news1
            }
            alt="News"
          />
        </div>
        <div className="text-section">
          <div className="nav">
            <button onClick={handlePrev}>
              <img src={img.icons.ArrowLeft} alt="Previous" />
            </button>
            <span>
              {currentIndex + 1} / {newsData.length}
            </span>
            <button onClick={handleNext}>
              <img src={img.icons.ArrowRight} alt="Next" />
            </button>
          </div>
          <div className={`text-wrap ${fadeState}`}>
            {newsData.length > 0 && (
              <>
                <p className="title">{newsData[currentIndex].title}</p>
                <p className="content">{newsData[currentIndex].summary}</p>
                <Link to="/news">
                  <button className="more">자세히 보기</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
