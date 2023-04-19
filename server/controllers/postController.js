const User = require("../models/User");

const userController = {};

userController.getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  res.json({ user });
};

userController.updateUserProfile = async (req, res) => {
  const { name } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name },
    { new: true }
  );

  res.json({ user });
};

module.exports = userController;
