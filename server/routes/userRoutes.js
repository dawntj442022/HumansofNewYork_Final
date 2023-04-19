const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Create user
router.post("/", userController.createUser);

// Get all users
router.get("/", authMiddleware, userController.getAllUsers);

// Get single user by id
router.get("/:id", authMiddleware, userController.getUserById);

// Update user by id
router.put("/:id", authMiddleware, userController.updateUserById);

// Delete user by id
router.delete("/:id", authMiddleware, userController.deleteUserById);

module.exports = router;
