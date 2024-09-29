import axiosInstance from "./axiosInstance";

export const getNewsLandingPage = async (category: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/news?category=${category}&size=10&isVisible=true`
    );
    // console.log(response.data.newsList);
    return response.data.newsList;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("뉴스 조회 실패: " + error.message);
    } else {
      throw new Error("뉴스 조회 실패 : 알 수 없는 오류");
    }
  }
};
