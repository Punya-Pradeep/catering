import { apiRequest } from "./api";

const authHeader = () => ({
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
});

export const createBooking = (data) =>
  apiRequest("/bookings", {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(data),
  });

export const getMyBookings = () =>
  apiRequest("/bookings/my", { headers: authHeader() });

export const getBookingById = (id) =>
  apiRequest(`/bookings/${id}`, { headers: authHeader() });
