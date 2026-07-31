const User = require("../models/User");
const Event = require("../models/Event");
const Catering = require("../models/Catering");
const Booking = require("../models/Booking");

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("event", "name location")
      .populate("catering", "name")
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const events = await Event.countDocuments();
    const catering = await Catering.countDocuments();
    const bookings = await Booking.countDocuments();

    const revenueResult = await Booking.aggregate([
      {
        $match: {
          status: {
            $in: ["confirmed", "completed"],
          },
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const revenue =
      revenueResult.length > 0
        ? revenueResult[0].total
        : 0;

    res.json({
      users,
      events,
      catering,
      bookings,
      revenue,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllBookings,
  getDashboardStats,
  getAllUsers,
};