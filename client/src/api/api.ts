import api from './axios';

/* AUTH */
export interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  phone: string;
}
export interface LoginUserData {
  email: string;
  password: string;
}

export const registerUser = (data: RegisterUserData) => api.post("/auth/register", data);

export const loginUser = (data: LoginUserData) => api.post("/auth/login", data);
export const logoutUser = () => api.post("/auth/logout");
export const getProfile = () => api.get("/auth/profile");

/* NEWSLETTER */
export const subscribeNewsletter = async (email: string) =>
  await api.post("/newsletter/subscribe", { email });