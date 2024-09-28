// 업무분야
import axiosInstance from "./axiosInstance";

export const getWorkField = async () => {
  try {
    const response = await axiosInstance.get(`/api/work-field`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("업무분야 조회 실패: " + error.message);
    } else {
      throw new Error("업무분야 조회 실패 : 알 수 없는 오류");
    }
  }
};
