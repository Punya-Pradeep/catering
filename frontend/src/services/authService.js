import { apiRequest } from "./api";

export const loginUser = (credentials) =>
  apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

export const registerUser = (data) =>
  apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
