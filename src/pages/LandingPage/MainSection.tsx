import { useState } from "react";
import search from "../../assets/images/icons/search.png";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const recommendedKeywords = [
    "형사",
    "기업",
    "금융",
    "법률",
    "IT",
    "지식재산권",
    "국제",
    "소송",
    "형사 사건",
    "계약법",
    "부동산",
    "환경법",
    "노동법",
    "조세법",
    "상속법",
    "형사 고소",
    "회사법",
    "보험법",
    "지적 재산권",
    "국제 분쟁",
  ];

  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
    setIsFocused(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  const handleSearch = () => {
    navigate("/landing-search");
    console.log("검색된 키워드:", keyword);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  console.log("keyword", keyword);

  return (
    <div className="main-section">
      <div className="main-content">
        <h1 className="main-title">
          <span className="highlight">Difference. Experience.</span>
        </h1>
        <p className="main-subtitle">
          법률 리스크 예방 및 대응을 위한
          <br /> 기업 금융 IT 분야 로펌
        </p>
        <div className="search-bar">
          {/* <select className="category-select">
            <option value="category">업무분야 선택</option>
            <option value="category">기업감사/내부통제</option>
            <option value="category">기술보호</option>
            <option value="category">금융/가상자산</option>
            <option value="category">건설/부동산</option>
          </select> */}

          <input
            type="text"
            placeholder="키워드를 입력해주세요."
            className="search-input"
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <img
            className="search-icon"
            src={search}
            alt="search-icon"
            onClick={handleSearch}
          />

          {isFocused && (
            <div className="keyword-recommendation">
              {recommendedKeywords.map((item, index) => (
                <span
                  key={index}
                  className="keyword-item"
                  onMouseDown={() => handleKeywordClick(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        <p className="bottom-text">영상</p>
      </div>
    </div>
  );
};

export default MainSection;
