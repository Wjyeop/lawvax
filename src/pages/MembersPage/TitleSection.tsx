import home from "../../assets/images/icons/home.png";
import searchIcon from "../../assets/images/LandingPageSearchIcon.png";

const TitleSection = () => {
  return (
    <section className="title-section">
      <div className="process">
        <img src={home} alt="" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>구성원</span>
      </div>
      <div className="sub-title">
        <p className="roman-title" style={{ fontSize: "2.5em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            H
          </span>
          IRED & <br />
          LAWYER
        </p>
      </div>
      <div className="search-bar-wrap">
        <div className="search-bar">
          <select className="category-select">
            <option value="category">업무분야선택</option>
            <option value="category">업무분야선택</option>
            <option value="category">업무분야선택</option>
          </select>
          <input
            type="text"
            placeholder="성함을 입력해주세요."
            className="search-input"
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
