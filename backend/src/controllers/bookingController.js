const Booking = require("../models/Booking");
const Event = require("../models/Event");
const Catering = require("../models/Catering");
const generateBookingId = require("../utils/generateBookingId");

const createBooking = async (req, res) => {
  try {
    const {
      event,
      catering,
      eventDate,
      numberOfGuests,
    } = req.body;

    const selectedEvent = await Event.findById(event);

    if (!selectedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    let totalAmount = selectedEvent.price;

    if (catering) {
      const selectedCatering = await Catering.findById(catering);

      if (!selectedCatering) {
        return res.status(404).json({
          message: "Catering package not found",
        });
      }

      totalAmount +=
        selectedCatering.pricePerPerson * numberOfGuests;
    }

    const booking = await Booking.create({
      bookingId: generateBookingId(),
      user: req.user._id,
      event,
      catering,
      eventDate,
      numberOfGuests,
      totalAmount,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    })
      .populate("event")
      .populate("catering")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("user", "name email phone")
      .populate("event")
      .populate("catering");

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    if (
      req.user.role !== "admin" &&
      booking.user._id.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getBookingById,
  updateBookingStatus,
};