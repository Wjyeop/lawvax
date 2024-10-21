import axiosInstance from "./axiosInstance";

export const getMembersLandingPage = async () => {
  try {
    const response = await axiosInstance.get(
      `/api/v2/user/lawyer/list/landing-page`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("랜딩 페이지 전체 구성원 검색 실패: " + error.message);
    } else {
      throw new Error("랜딩 페이지 전체 구성원 : 알 수 없는 오류");
    }
  }
};
