const Prediction = require("../models/Prediction");

const savePrediction = async (req, res) => {
  try {
    const prediction =
      await Prediction.create(req.body);

    res.status(201).json(prediction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPredictions = async (req, res) => {
  try {
    const predictions =
      await Prediction.find({
        userId: req.params.userId,
      }).sort({ createdAt: -1 });

    res.json(predictions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  savePrediction,
  getPredictions,
};