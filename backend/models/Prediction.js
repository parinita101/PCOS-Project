const mongoose = require("mongoose");

const predictionSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
        required: true,
      },
      age: Number,
      weight: Number,
      cycleLength: Number,
      result: Number,
      probability: Number,
    },
    { timestamps: true }
  );

module.exports =
  mongoose.model(
    "Prediction",
    predictionSchema
  );