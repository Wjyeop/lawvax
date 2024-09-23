import axiosInstance from "./axiosInstance";

export const membersLandingPage = async () => {
  try {
    const response = await axiosInstance.get(
      `/api/lawyer?size=10&isVisible=true`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("구성원 조회 실패: " + error.message);
    } else {
      throw new Error("구성원 조회 실패 : 알 수 없는 오류");
    }
  }
};
