// 구성원 상세 조회

import axiosInstance from "./axiosInstance";

export const getMembersDetail = async (lawyerId: number) => {
  try {
    const response = await axiosInstance.get(`/api/lawyer/${lawyerId}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("변호사 조회 실패: " + error.message);
    } else {
      throw new Error("변호사 조회 실패: 알 수 없는 오류");
    }
  }
};
