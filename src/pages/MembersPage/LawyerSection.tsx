import lawyer1 from "../../assets/images/hiredSample.png";
import { lawyerList } from "../../const/lawyerList";
import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";
import { useState } from "react";

const Lawyersection = () => {
  const [selectedLawyerIndex, setSelectedLawyerIndex] = useState<number | null>(
    0
  );
  const [showAll, setShowAll] = useState(false);
  const visibleLawyers = showAll ? lawyerList : lawyerList.slice(0, 6); // 처음엔 6명만 표시

  const handleClick = (index: number) => {
    setSelectedLawyerIndex(index);
  };

  const handleToggle = () => {
    setShowAll((prevState) => !prevState); // 상태 토글
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
            <div className="img-wrap">
              <img src={lawyer1} alt={lawyer.name} />
            </div>
            {selectedLawyerIndex === index && (
              <div className="text-wrap">
                {/* <p className="title">{lawyer.title}</p> */}
                <p className="name">{lawyer.name}</p>
              </div>
            )}
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
