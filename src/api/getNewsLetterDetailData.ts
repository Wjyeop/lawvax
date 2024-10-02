import axiosInstance from "./axiosInstance";

export const getNewsLetterDetailData = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/v2/user/newsletter/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("뉴스레터 상세 페이지 검색 실패: " + error.message);
    } else {
      throw new Error("뉴스레터 상세 페이지 검색 실패: 알 수 없는 오류");
    }
  }
};
