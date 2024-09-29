import { lawyerList } from "../../const/lawyerList";
import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Lawyersection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  const [selectedLawyerIndex, setSelectedLawyerIndex] = useState<number | null>(
    0
  );
  const [showAll, setShowAll] = useState(false);
  const visibleLawyers = showAll
    ? lawyerList
    : isMobile
      ? lawyerList.slice(0, 4) // 모바일에서는 4개만 표시
      : lawyerList.slice(0, 6); // 데스크탑에서는 6개만 표시

  const handleClick = (index: number) => {
    setSelectedLawyerIndex(index);
  };

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <section className="lawyer-section">
      <div className="grid-wrap">
        {visibleLawyers.map((lawyer, index) => (
          <div
            key={index}
            className={`lawyer-item ${selectedLawyerIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            <Link to="/profile">
              <img src={lawyer.img} alt="" />
            </Link>
            <div className="text-wrap">
              <p className="p1">
                <span>{lawyer.name}</span>
                <span> {lawyer.name2}</span>
              </p>
              <p className="p2">{lawyer.title}</p>
              {lawyer.mark.map((mark, index) => (
                <p key={index} className="p3">
                  {mark}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="toggle-button" onClick={handleToggle}>
        {showAll ? "접기" : "더보기"}
        {showAll ? <img src={up} alt="" /> : <img src={down} alt="" />}
      </button>
    </section>
  );
};

export default Lawyersection;
