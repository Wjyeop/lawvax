import { useNavigate } from "react-router-dom";
import { useState } from "react";
import home from "../../assets/images/icons/home.png";
import searchIcon from "../../assets/images/LandingPageSearchIcon.png";

const TitleSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = () => {
    navigate(`/memberSearch?query=${searchTerm}`);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="title-section">
      <div className="process">
        <img src={home} alt="" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>구성원</span>
        <span className="search">{">"}</span>
        <span className="search">인물검색</span>
      </div>
      <div className="sub-title">
        <p className="roman-title" style={{ fontSize: "2.5em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            P
          </span>
          ROFESSIONAL
        </p>
      </div>
      <div className="search-bar-wrap">
        <div className="search-bar">
          <input
            type="text"
            placeholder="이름을 검색해주세요."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div>
            <img className="search-icon" src={searchIcon} alt="search-icon" />
          </div>
        </div>
        <div className="search-category-wrap">
          <button
            className={searchCategory === "기업감사" ? "active" : ""}
            onClick={() => setSearchCategory("기업감사")}
          >
            기업감사 / 내부통제
          </button>
          <button
            className={searchCategory === "기술보호" ? "active" : ""}
            onClick={() => setSearchCategory("기술보호")}
          >
            기술보호
          </button>
          <button
            className={searchCategory === "금융" ? "active" : ""}
            onClick={() => setSearchCategory("금융")}
          >
            금융 / 가상자산
          </button>
          <button
            className={searchCategory === "건설" ? "active" : ""}
            onClick={() => setSearchCategory("건설")}
          >
            건설 / 부동산
          </button>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
