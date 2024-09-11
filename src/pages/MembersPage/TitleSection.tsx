import { useNavigate } from "react-router-dom";
import { useState } from "react";
import home from "../../assets/images/icons/home.png";
import searchIcon from "../../assets/images/LandingPageSearchIcon.png";

const TitleSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

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
          <select className="category-select">
            <option value="category">업무분야 선택</option>
            <option value="category">기업감사/내부통제</option>
            <option value="category">기술보호</option>
            <option value="category">금융/가상자산</option>
            <option value="category">건설/부동산</option>
          </select>
          <input
            type="text"
            placeholder="성함을 입력해주세요."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div>
            <img className="search-icon" src={searchIcon} alt="search-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
