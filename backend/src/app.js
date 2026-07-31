const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const cateringRoutes = require("./routes/cateringRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Catering Event Management API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/catering", cateringRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);

module.exports = app;