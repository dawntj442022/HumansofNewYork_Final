const express = require("express");
const router = express.Router();

// Import all route files
const postsRouter = require("./posts");
const usersRouter = require("./users");
const authRouter = require("./server/routes/auth");

// Route middleware
router.use("/posts", postsRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

// Default route
router.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = router;
