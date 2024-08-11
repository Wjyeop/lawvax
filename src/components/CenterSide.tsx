import React, { useState } from "react";
import { Link } from "react-router-dom";

const CenterSide: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="side-button-container"
      style={{ left: isHovered ? "0px" : "-245px" }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="section1">
        <button className="side-button">
          <Link to="/support-center">기업 감사/내부통제 지원센터</Link>
        </button>

        <button className="side-button">
          <Link to="/tech-center">기술 보호 센터</Link>
        </button>
      </div>
      <div className="section2" onMouseEnter={handleMouseEnter}>
        <div>CENTER</div>
      </div>
    </div>
  );
};

export default CenterSide;
