const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register user
router.post("/register", authController.register);

// Login user
router.post("/login", authController.login);

// Get authenticated user
router.get("/me", authMiddleware, authController.getAuthenticatedUser);

module.exports = router;
