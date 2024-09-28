import axiosInstance from "./axiosInstance";

export const getWorkFieldDetail = async (fieldName: string) => {
  try {
    const response = await axiosInstance.get(`/api/work-field`, {
      params: {
        workFieldName: "형사",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("업무분야 상세 조회 실패: " + error.message);
    } else {
      throw new Error("업무분야 상세 조회 실패: 알 수 없는 오류");
    }
  }
};
