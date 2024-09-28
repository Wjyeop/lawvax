import { useEffect, useState } from "react";
import img from "../assets/images/img";

const lawyers = [
  {
    job: "변호사",
    name: "김변호사",
    class: "변호사 1급",
    imgSrc: "이미지 URL 1",
  },
  {
    job: "변호사",
    name: "이변호사",
    class: "변호사 2급",
    imgSrc: "이미지 URL 2",
  },
  {
    job: "변호사",
    name: "박변호사",
    class: "변호사 3급",
    imgSrc: "이미지 URL 3",
  },
];

export const LandingMemberSection01: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % lawyers.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentLawyer = lawyers[currentIndex];

  return (
    <div className="section01">
      <div className={`slider-content ${fade ? "fade" : ""}`}>
        <div className="img-wrap">
          <img src={img.lawyer4} alt="" />
        </div>
        <div className="text-wrap">
          <p className="job">{currentLawyer.job}</p>
          <p className="name">{currentLawyer.name}</p>
          <p className="class">{currentLawyer.class}</p>
        </div>
      </div>
    </div>
  );
};
