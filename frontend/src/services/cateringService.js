import { apiRequest } from "./api";

export const getCatering = () => apiRequest("/catering");

export const getCateringById = (id) => apiRequest(`/catering/${id}`);
