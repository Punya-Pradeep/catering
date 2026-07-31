const Catering = require("../models/Catering");

const getCatering = async (req, res) => {
  try {
    const catering = await Catering.find()
      .populate("menuItems");

    res.json(catering);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCateringById = async (req, res) => {
  try {
    const catering = await Catering.findById(req.params.id)
      .populate("menuItems");

    if (!catering) {
      return res.status(404).json({
        message: "Catering package not found",
      });
    }

    res.json(catering);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createCatering = async (req, res) => {
  try {
    const catering = await Catering.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json(catering);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateCatering = async (req, res) => {
  try {
    const catering = await Catering.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!catering) {
      return res.status(404).json({
        message: "Catering package not found",
      });
    }

    res.json(catering);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCatering = async (req, res) => {
  try {
    const catering = await Catering.findByIdAndDelete(req.params.id);

    if (!catering) {
      return res.status(404).json({
        message: "Catering package not found",
      });
    }

    res.json({
      message: "Catering deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCatering,
  getCateringById,
  createCatering,
  updateCatering,
  deleteCatering,
};