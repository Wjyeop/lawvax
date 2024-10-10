import axios from "axios";
import adminInstance from "./adminInstance";

const BASE_URL = "http://13.124.200.80:8000";

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

export const getPeopleList = async (position = "전체", name?: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v2/admin/lawyer?position=${position}`
    );

    return response;
  } catch (error: any) {
    throw new Error("구성원 불러오기: " + (error as Error).message);
  }
};

export const getPeopleCount = async () => {
  try {
    const response = await adminInstance.get(
      `${BASE_URL}/api/v2/admin/lawyer/stats`
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};
