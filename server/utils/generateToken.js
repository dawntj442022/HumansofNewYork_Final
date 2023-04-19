const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("./models/User");

// Generate a JWT token for the given user
exports.generateToken = async (user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  // Save token to the user document
  user.tokens.push({ token });
  await user.save();

  return token;
};

// Middleware function to verify a JWT token
exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: decoded.id, "tokens.token": token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Unauthorized" });
  }
};
