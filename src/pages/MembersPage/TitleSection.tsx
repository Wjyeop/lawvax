import { useEffect, useState } from "react";
import home from "../../assets/images/icons/home.png";
import searchIcon from "../../assets/images/LandingPageSearchIcon.png";
import { getMembersAutoList } from "../../api/getMembersAutoList";
import { useMembersWorkFieldStore } from "../../stores/membersWorkFieldStore";
import { useMemberStore } from "../../stores/memberStore";

const TitleSection = () => {
  const [preSearchTerm, setPreSearchTerm] = useState<string>("");
  const searchTerm = useMemberStore((state) => state.searchTerm);
  const setSearchTerm = useMemberStore((state) => state.setSearchTerm);
  const selectedWorkField = useMembersWorkFieldStore(
    (state) => state.selectedWorkField
  );
  const setSelectedWorkField = useMembersWorkFieldStore(
    (state) => state.setSelectedWorkField
  );

  const [searchAutoComplete, setSearchAutoComplete] = useState<string[][]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[][]>(
    []
  );

  useEffect(() => {
    const fetchAutoComplete = async () => {
      try {
        const data = await getMembersAutoList();
        setSearchAutoComplete(data);
      } catch (error) {
        console.error("구성원 페이지 자동완성 검색 중 에러 발생:", error);
      }
    };

    fetchAutoComplete();
  }, []);

  useEffect(() => {
    if (preSearchTerm) {
      const filtered = searchAutoComplete.filter(([name, position]) => {
        if (position === "변호사") {
          return name.includes(preSearchTerm);
        } else if (position === "고문") {
          return name === preSearchTerm;
        }
        return false;
      });
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [preSearchTerm, searchAutoComplete]);

  const handleSearch = () => {
    if (searchTerm) {
      setSearchTerm(preSearchTerm);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPreSearchTerm(suggestion);
    setFilteredSuggestions([]);
  };

  const toggleWorkField = (workField: string) => {
    // 같은 워크필드를 다시 클릭하면 취소 (null로 설정)
    if (selectedWorkField === workField) {
      setSelectedWorkField("");
    } else {
      setSelectedWorkField(workField);
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
        <p className="roman-title" style={{ fontSize: "2em" }}>
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
            value={preSearchTerm}
            onChange={(e) => setPreSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div>
            <img
              className="search-icon"
              src={searchIcon}
              alt="search-icon"
              onClick={handleSearch}
            />
          </div>
        </div>

        {filteredSuggestions.length > 0 && (
          <ul className="autocomplete-suggestions">
            {filteredSuggestions.map(([name, position], index) => (
              <li key={index} onClick={() => handleSuggestionClick(name)}>
                {name} ({position})
              </li>
            ))}
          </ul>
        )}

        <div className="search-category-wrap">
          <button
            className={
              selectedWorkField === "기업감사 / 내부통제" ? "active" : ""
            }
            onClick={() => toggleWorkField("기업감사 / 내부통제")}
          >
            기업감사 / 내부통제
          </button>
          <button
            className={selectedWorkField === "기술보호" ? "active" : ""}
            onClick={() => toggleWorkField("기술보호")}
          >
            기술보호
          </button>
          <button
            className={selectedWorkField === "금융 / 가상자산" ? "active" : ""}
            onClick={() => toggleWorkField("금융 / 가상자산")}
          >
            금융 / 가상자산
          </button>
          <button
            className={selectedWorkField === "건설 / 부동산" ? "active" : ""}
            onClick={() => toggleWorkField("건설 / 부동산")}
          >
            건설 / 부동산
          </button>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
