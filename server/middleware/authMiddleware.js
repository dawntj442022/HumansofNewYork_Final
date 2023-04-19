const jwt = require("jsonwebtoken");

// Middleware function to verify JWT token and authenticate user
function authMiddleware(req, res, next) {
  // Get token from header
  const token = req.header("Authorization");

  // Check if token is present
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Set user from payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

module.exports = authMiddleware;
