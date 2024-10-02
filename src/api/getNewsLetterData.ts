import axiosInstance from "./axiosInstance";

export const getNewsLetterData = async (page: number) => {
  try {
    const response = await axiosInstance.get(
      `/v2/user/newsletter/list/newsletter-list-page`,
      {
        params: {
          page: page,
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("뉴스레터 페이지 검색 실패: " + error.message);
    } else {
      throw new Error("뉴스레터 페이지 검색 실패: 알 수 없는 오류");
    }
  }
};
