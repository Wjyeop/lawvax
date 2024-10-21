import axiosInstance from "./axiosInstance";

export const getSearchNews = async (
  keyword: string,
  page: number,
  tab: string
) => {
  try {
    const response = await axiosInstance.get(`/api/v2/user/news/list/search-page`, {
      params: {
        search: keyword,
        page: page,
        category: tab,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("법인소식 페이지 검색 실패: " + error.message);
    } else {
      throw new Error("법인소식 페이지 검색 실패: 알 수 없는 오류");
    }
  }
};
