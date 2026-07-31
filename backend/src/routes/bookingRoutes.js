const express = require("express");

const {
  createBooking,
  getMyBookings,
  getBookingById,
  updateBookingStatus,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", protect, createBooking);

router.get("/my", protect, getMyBookings);

router.get("/:id", protect, getBookingById);

router.patch(
  "/:id/status",
  protect,
  adminOnly,
  updateBookingStatus
);

module.exports = router;