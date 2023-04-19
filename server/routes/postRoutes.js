const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

// Create post
router.post("/", authMiddleware, postController.createPost);

// Get all posts
router.get("/", postController.getAllPosts);

// Get single post by id
router.get("/:id", postController.getPostById);

// Update post by id
router.put("/:id", authMiddleware, postController.updatePostById);

// Delete post by id
router.delete("/:id", authMiddleware, postController.deletePostById);

module.exports = router;
