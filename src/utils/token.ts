export const saveToken = (token: string) => {
  localStorage.setItem("access-token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("access-token");
};

export const removeToken = () => {
  localStorage.removeItem("access-token");
};
