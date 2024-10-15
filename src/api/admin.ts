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
  const response = await adminInstance.get(
    `${BASE_URL}/api/v2/admin/lawyer?position=${position}`
  );

  return response;
};

export const getPeopleCount = async () => {
  const response = await adminInstance.get(
    `${BASE_URL}/api/v2/admin/lawyer/stats`
  );

  return response;
};

export const getPeopleItem = async (id: any) => {
  const response = await adminInstance.get(
    `${BASE_URL}/api/v2/admin/lawyer/${id}`
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

export const updatePeople = async (id: string | undefined, data: any) => {
  const response = await adminInstance.put(
    `${BASE_URL}/api/v2/admin/lawyer/${id}`,
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

export const updatePeopleOrder = async (data: number[]) => {
  const response = await adminInstance.put(
    `${BASE_URL}/api/v2/admin/lawyer/sort`,
    data
  );

  return response;
};

export const getPostList = async (
  page: number,
  category: string,
  searchValue?: string
) => {
  const response = await adminInstance.get(
    `${BASE_URL}/api/v2/admin/news?page=${page}&category=${category}&search=${searchValue}`
  );

  return response;
};

export const getPostCount = async () => {
  const response = await adminInstance.get(
    `${BASE_URL}/api/v2/admin/news/stats`
  );

  return response;
};

export const deletePost = async (id: number) => {
  const response = await adminInstance.delete(
    `${BASE_URL}/api/v2/admin/news/${id}`
  );

  return response;
};
