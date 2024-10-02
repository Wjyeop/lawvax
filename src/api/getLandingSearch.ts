import axiosInstance from "./axiosInstance";

export const getLandingSearch = async (
  search: string,
  isFirstPage: boolean = true
) => {
  try {
    const response = await axiosInstance.get(`/api/search`, {
      params: {
        search: search,
        is_first_page: isFirstPage,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("랜딩페이지 검색 실패: " + error.message);
    } else {
      throw new Error("랜딩페이지 검색 실패: 알 수 없는 오류");
    }
  }
};
