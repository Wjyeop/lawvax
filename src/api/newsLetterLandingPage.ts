import axiosInstance from "./axiosInstance";

export const getNewsLetterLandingPage = async () => {
  try {
    const response = await axiosInstance.get(
      `/api/newsletter?size=${20}&isVisible=true&isDraft=false`
    );
    // console.log(response.data.newsletterList);
    return response.data.newsletterList;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("뉴스레터 조회 실패: " + error.message);
    } else {
      throw new Error("뉴스레터 조회 실패 : 알 수 없는 오류");
    }
  }
};
