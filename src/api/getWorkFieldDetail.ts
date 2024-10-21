// 업무분야 상세

import axiosInstance from "./axiosInstance";

export const getWorkFieldDetail = async (workField: string) => {
  try {
    const response = await axiosInstance.get(`/api/v2/user/work-field/detail`, {
      params: {
        workField: workField,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("업무분야 상세 조회 실패: " + error.message);
    } else {
      throw new Error("업무분야 상세 조회 실패 : 알 수 없는 오류");
    }
  }
};
