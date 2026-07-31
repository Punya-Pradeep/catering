const express = require("express");

const {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEventById);

router.post("/", protect, adminOnly, createEvent);
router.put("/:id", protect, adminOnly, updateEvent);
router.delete("/:id", protect, adminOnly, deleteEvent);

module.exports = router;