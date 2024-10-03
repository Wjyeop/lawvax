import axiosInstance from "./axiosInstance";

export const getCenterNewsLetter = async (center: string) => {
  try {
    const params: any = {
      center: center,
    };

    const response = await axiosInstance.get(
      `/v2/user/newsletter/list/center-page`,
      {
        params: params,
      }
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("센터 페이지 뉴스레터 검색 실패: " + error.message);
    } else {
      throw new Error("센터 페이지 뉴스레터 검색 실패: 알 수 없는 오류");
    }
  }
};
