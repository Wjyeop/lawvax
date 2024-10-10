import axios from "axios";
import { getToken, saveToken, removeToken } from "../utils/token";
import { refreshToken } from "./auth";

const baseURL = "http://13.124.200.80:8000";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();

    if (token) {
      config.headers["access-token"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      try {
        const newToken = await refreshToken();
        saveToken(newToken);
        originalRequest.headers["access-token"] = newToken;
        return axiosInstance(originalRequest);
      } catch (e) {
        console.error("토큰 갱신 실패");
        removeToken();
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
