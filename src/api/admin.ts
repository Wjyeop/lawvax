import adminInstance from "./adminInstance";
const BASE_URL = "https://lvx.co.kr";
// const BASE_URL = "http://192.168.1.16:8000";

interface Account {
  identifier: string;
  password: string;
}

export const tryLogin = async (account: Account) => {
  const response = await adminInstance.post(
    `${BASE_URL}/api/v2/admin/account/sign-in`,
    account
  );

  return response;
};

export const getPeopleList = async (position: string, name?: string) => {
  try {
    const response = await adminInstance.get(
      `${BASE_URL}/api/v2/admin/lawyer?position=${position}`
    );

    return response;
  } catch (error: any) {
    throw new Error("구성원 불러오기: " + (error as Error).message);
  }
};

export const getPeopleCount = async () => {
  const response = await adminInstance.get(
    `${BASE_URL}/api/v2/admin/lawyer/stats`
  );

  return response;
};

export const deletePeople = async (id: number) => {
  const response = await adminInstance.delete(
    `${BASE_URL}/api/v2/admin/lawyer/${id}`
  );

  return response;
};

export const createPeople = async (data: any) => {
  const response = await adminInstance.post(
    `${BASE_URL}/api/v2/admin/lawyer`,
    data
  );

  return response;
};

export const createImage = async (file: any) => {
  const response = await adminInstance.post(
    `${BASE_URL}/api/v2/admin/images`,
    file
  );

  return response;
};

export const getWorkCategory = async (field: string) => {
  const response = await adminInstance.get(
    `${BASE_URL}/api/v2/admin/work-field?workField=${field}`
  );

  return response;
};

export const updateWorkCategory = async (field: string, data: any) => {
  const response = await adminInstance.patch(
    `${BASE_URL}/api/v2/admin/work-field?workFieldName=${field}`,
    data
  );

  return response;
};
