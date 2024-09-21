// src/components/LawyerListConsole.tsx
import { useEffect } from "react";
import { getMembers } from "../api/members"; // 변호사 목록 API 가져오기

const Test = () => {
  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const lawyerList = await getMembers(1); // 변호사 목록 API 호출
        console.log("변호사 목록:", lawyerList); // 콘솔에 변호사 목록 출력
      } catch (error) {
        console.error("변호사 목록 조회 중 에러 발생:", error);
      }
    };

    fetchLawyers(); // 컴포넌트 마운트 시 API 호출
  }, []);

  return null;
};

export default Test;
