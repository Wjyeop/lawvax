import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/img";
import { newsData } from "../../const/newsList";

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("법인소식");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("");

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % newsData.length;
    setFadeState("fade-out");

    // 페이드 아웃이 끝나고 페이드 인을 실행
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState("fade-in");
    }, 300); // 여기서 500ms는 fade-out의 transition 시간과 일치시킵니다.
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
          <img src={img.news1} alt="News" />
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
          <div
            className={`text-wrap ${fadeState}`}
            // onTransitionEnd={handleTransitionEnd}
          >
            <p className="title">{newsData[currentIndex].title}</p>
            <p className="content">{newsData[currentIndex].content}</p>
            <Link to="/news">
              <button className="more">자세히 보기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
