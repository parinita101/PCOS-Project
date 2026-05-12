const Profile = require("../models/Profile");

const saveProfile = async (req, res) => {
  try {
    const { userId, age, height, weight, bmi } =
      req.body;

    const existingProfile =
      await Profile.findOne({ userId });

    if (existingProfile) {
      existingProfile.age = age;
      existingProfile.height = height;
      existingProfile.weight = weight;
      existingProfile.bmi = bmi;

      await existingProfile.save();

      return res.json(existingProfile);
    }

    const profile = await Profile.create({
      userId,
      age,
      height,
      weight,
      bmi,
    });

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      userId: req.params.userId,
    });

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveProfile,
  getProfile,
};