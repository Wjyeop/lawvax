import axiosInstance from "./axiosInstance";

export const getNewsDetailListData = async (category: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/v2/user/news/list/news-detail-page?category=${category}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        "법인소식 뉴스 상세 속 뉴스 리스트 검색 실패: " + error.message
      );
    } else {
      throw new Error(
        "법인소식 뉴스 상세 속 뉴스 리스트 검색 실패: 알 수 없는 오류"
      );
    }
  }
};
