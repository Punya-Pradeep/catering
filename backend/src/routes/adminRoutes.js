const express = require("express");

const {
  getAllBookings,
  getDashboardStats,
  getAllUsers,
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

router.use(protect, adminOnly);

router.get("/dashboard", getDashboardStats);
router.get("/users", getAllUsers);
router.get("/bookings", getAllBookings);

module.exports = router;