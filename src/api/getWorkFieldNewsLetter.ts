// 업무분야 상세 > 뉴스레터

import axiosInstance from "./axiosInstance";

export const getWorkFieldNewsLetter = async (workField: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/v2/user/newsletter/list/work-field-page`,
      {
        params: {
          work_field: workField,
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("업무분야 상세 뉴스레터 조회 실패: " + error.message);
    } else {
      throw new Error("업무분야 상세 뉴스레터 조회 실패 : 알 수 없는 오류");
    }
  }
};
