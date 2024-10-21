import axiosInstance from "./axiosInstance";

export const getMembersList = async (
  firstPage: boolean,
  name: string,
  workFieldName?: string
) => {
  try {
    const params: any = {
      isFirstPageOnlyLeader: firstPage,
      name: name,
      isFirstPage: false,
    };

    if (workFieldName) {
      params.workFieldName = workFieldName;
    }

    const response = await axiosInstance.get(
      `/api/v2/user/lawyer/list/lawyer-list-page`,
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
