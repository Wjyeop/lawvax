import { lawyerList } from "../../const/lawyerList";
import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";
import { useState } from "react";

const Lawyersection = () => {
  const [selectedLawyerIndex, setSelectedLawyerIndex] = useState<number | null>(
    0
  );
  const [showAll, setShowAll] = useState(false);
  const visibleLawyers = showAll ? lawyerList : lawyerList.slice(0, 6);

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
            <img src={lawyer.img} alt="" />
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
