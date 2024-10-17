import axios from "axios";
import { saveToken, removeToken } from "../utils/token";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = async (identifier: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/account/sign-in`, {
      identifier,
      password,
    });
    const token = response.data.token;
    saveToken(token);
    return token;
  } catch (error: any) {
    throw new Error("로그인 실패: " + (error as Error).message);
  }
};

export const refreshToken = async () => {
  removeToken();
  return await login("lawvax", "lawvax1!");
};
