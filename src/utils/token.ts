export const saveToken = (token: string) => {
  localStorage.setItem("access-token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("access-token");
};

export const removeToken = () => {
  localStorage.removeItem("access-token");
};

export const getLocalAdminToken = () => {
  return localStorage.getItem("admin-token");
};

export const getSessionAdminToken = () => {
  return sessionStorage.getItem("admin-token");
};

export const saveLocalAdminToken = (token: any) => {
  return localStorage.setItem("admin-token", token);
};

export const saveSessionAdminToken = (token: any) => {
  return sessionStorage.setItem("admin-token", token);
};

export const removeLocalAdminToken = () => {
  return localStorage.removeItem("admin-token");
};

export const removeSessionAdminToken = () => {
  return sessionStorage.removeItem("admin-token");
};
