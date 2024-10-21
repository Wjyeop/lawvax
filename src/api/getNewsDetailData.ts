import axiosInstance from "./axiosInstance";

export const getNewsDetailData = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/api/v2/user/news/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("법인소식 뉴스 상세 검색 실패: " + error.message);
    } else {
      throw new Error("법인소식 뉴스 상세 검색 실패: 알 수 없는 오류");
    }
  }
};
