import { useState } from "react";
import searchIcon from "../../assets/images/LandingPageSearchIcon.png";

const MainSection = () => {
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
    setIsFocused(false); // 선택 후 추천 키워드 숨기기 (선택 사항)
  };

  const handleBlur = () => {
    // onBlur 이벤트가 바로 발생하지 않도록 지연을 줍니다.
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
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
          <select className="category-select">
            <option value="category">기업</option>
            <option value="category">금융</option>
            <option value="category">첨단</option>
          </select>
          <img className="search-icon" src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="키워드를 입력해주세요."
            className="search-input"
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="search-button" onClick={() => setKeyword("")}>
            X
          </button>

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
