// 업무분야 상세 > 구성원

import axiosInstance from "./axiosInstance";

export const getWorkFieldMembers = async (workField: string) => {
  try {
    const response = await axiosInstance.get(
      `/v2/user/lawyer/list/work-field-page`,
      {
        params: {
          isFirstPage: false,
          workFieldName: workField,
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("업무분야 상세 구성원 조회 실패: " + error.message);
    } else {
      throw new Error("업무분야 상세 구성원 조회 실패 : 알 수 없는 오류");
    }
  }
};
