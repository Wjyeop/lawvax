import searchIcon from "../../assets/images/LandingPageSearchIcon.png";
import CenterSide from "../../components/CenterSide";

const MainSection = () => {
  return (
    <div className="landing-page">
      <CenterSide />

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
            <option value="category">카테고리</option>
            <option value="category">카테고리</option>
            <option value="category">카테고리</option>
          </select>
          <img className="search-icon" src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="키워드를 입력해주세요."
            className="search-input"
          />
          <button className="search-button">X</button>
        </div>
        <p className="bottom-text">영상</p>
      </div>
    </div>
  );
};

export default MainSection;
