import axiosInstance from "./axiosInstance";

export const getSearchNewsLetter = async (keyword: string, page: number) => {
  try {
    const response = await axiosInstance.get(
      `/v2/user/newsletter/list/search-page`,
      {
        params: {
          search: keyword,
          page: page,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("검색페이지 뉴스레터 검색 실패: " + error.message);
    } else {
      throw new Error("검색페이지 뉴스레터 검색 실패: 알 수 없는 오류");
    }
  }
};
