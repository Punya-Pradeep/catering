import { apiRequest } from "./api";

export const getEvents = () => apiRequest("/events");

export const getEventById = (id) => apiRequest(`/events/${id}`);
