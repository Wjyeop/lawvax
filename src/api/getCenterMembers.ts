import axiosInstance from "./axiosInstance";

export const getCenterMembers = async (center: string) => {
  try {
    const params: any = {
      isFirstPage: false,
      center: center,
      field: "all",
    };

    const response = await axiosInstance.get(
      `/api/v2/user/lawyer/list/center-page`,
      {
        params: params,
      }
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("구성원 페이지 검색 실패: " + error.message);
    } else {
      throw new Error("구성원 페이지 검색 실패: 알 수 없는 오류");
    }
  }
};
