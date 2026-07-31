const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);