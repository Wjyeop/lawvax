import { useState } from "react";
import search from "../../assets/images/icons/search.png";
import { useNavigate } from "react-router-dom";
import { getLandingSearch } from "../../api/getLandingSearch";
import useSearchStore from "../../stores/searchStore"; // Zustand 스토어 임포트

const MainSection = () => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const { setSearchResults, setKeyword, keyword } = useSearchStore(); // Zustand 훅 사용

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

  // 검색 API 호출 후 Zustand에 저장하고 결과 페이지로 이동
  const handleSearch = async () => {
    console.log("검색된 키워드:", keyword);
    try {
      const searchResults = await getLandingSearch(keyword, true); // 검색 API 호출
      setSearchResults(searchResults); // Zustand에 검색 결과 저장
      navigate("/landing-search"); // 검색 결과 페이지로 이동
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  // Enter 키를 눌렀을 때 검색 실행
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
          <input
            type="text"
            placeholder="키워드를 입력해주세요."
            className="search-input"
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown} // Enter 키 입력 처리
          />
          <img
            className="search-icon"
            src={search}
            alt="search-icon"
            onClick={handleSearch} // 클릭 시 검색 실행
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
      </div>
    </div>
  );
};

export default MainSection;
