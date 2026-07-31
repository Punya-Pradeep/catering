const mongoose = require("mongoose");

const cateringSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    pricePerPerson: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    menuItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
      },
    ],

    available: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Catering", cateringSchema);