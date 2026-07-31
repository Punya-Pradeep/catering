const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    vegetarian: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MenuItem", menuItemSchema);