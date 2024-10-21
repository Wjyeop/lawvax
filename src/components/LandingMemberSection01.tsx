import { useEffect, useState } from "react";
import { getMembersLandingPage } from "../api/getMembersLandingPage";

export const LandingMemberSection01: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [lawyers, setLawyers] = useState<any[]>([
    {
      mainImg: "",
      name: "",
      position: "",
      firstMainCareer: "",
    },
  ]); // 초기값을 빈 배열로 설정
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetChLawyers = async () => {
      try {
        const response = await getMembersLandingPage();
        // console.log(response);
        setLawyers(response || []); // 데이터를 가져왔을 때도 안전하게 빈 배열로 처리
        setIsLoading(false); // 로딩 완료 후 상태 변경
      } catch (error) {
        console.error("변호사 정보 조회 중 에러 발생:", error);
        setIsLoading(false); // 에러 발생 시 로딩 상태 해제
      }
    };

    fetChLawyers();
  }, []);

  useEffect(() => {
    if (!isLoading && lawyers.length > 0) {
      // lawyers가 정의되고 로딩이 완료되었을 때만 실행
      const interval = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % lawyers.length); // undefined 방지
          setFade(false);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isLoading, lawyers]);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때
  }

  if (lawyers.length === 0) {
    return <div>No lawyers available</div>; // lawyers 배열이 비어 있을 때
  }

  const currentLawyer = lawyers[currentIndex] || {
    name: "",
    position: "",
    firstMainCareer: "",
  }; // 안전한 기본값

  return (
    <div className="section01">
      <div className={`slider-content ${fade ? "fade" : ""}`}>
        <div className="img-wrap">
          <img src={currentLawyer.mainImg} alt="" />
        </div>
        <div className="text-wrap">
          <p className="job">{currentLawyer.position}</p>
          <p className="name">{currentLawyer.name}</p>
          <p className="class">{currentLawyer.firstMainCareer}</p>
        </div>
      </div>
    </div>
  );
};
