import axiosInstance from "./axiosInstance";

export const getMembersDetail = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/api/v2/user/lawyer/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("구성원 페이지 검색 실패: " + error.message);
    } else {
      throw new Error("구성원 페이지 검색 실패: 알 수 없는 오류");
    }
  }
};
