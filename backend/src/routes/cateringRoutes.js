const express = require("express");

const {
  getCatering,
  getCateringById,
  createCatering,
  updateCatering,
  deleteCatering,
} = require("../controllers/cateringController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", getCatering);
router.get("/:id", getCateringById);

router.post("/", protect, adminOnly, createCatering);
router.put("/:id", protect, adminOnly, updateCatering);
router.delete("/:id", protect, adminOnly, deleteCatering);

module.exports = router;