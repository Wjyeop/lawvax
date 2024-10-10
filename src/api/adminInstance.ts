import axios from "axios";
import { getLocalAdminToken, getSessionAdminToken } from "../utils/token";

const baseURL = "http://13.124.200.80:8000";

const adminInstance = axios.create({
  baseURL,
  headers: {
    "access-token": "",
  },
});

adminInstance.interceptors.request.use(
  async (config) => {
    let token;
    token = getSessionAdminToken();

    if (!token) {
      token = getLocalAdminToken();
    }

    if (token) {
      config.headers["access-token"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default adminInstance;
