import axiosInstance from "./axiosInstance";

export const getMembersAutoList = async () => {
  try {
    const response = await axiosInstance.get(`/v2/user/lawyer/auto-complete`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("구성원 페이지 자동완성 검색 실패: " + error.message);
    } else {
      throw new Error("구성원 페이지 자동완성 검색 실패: 알 수 없는 오류");
    }
  }
};
