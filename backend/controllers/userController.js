const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const router = express.Router();

// Login page
router.get("/login", (req, res) => {
  res.render("user/login");
});

// Login logic
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).send("Invalid username or password");
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).send("Invalid username or password");
      return;
    }

    req.session.user = user;
    res.redirect("/humans");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Logout
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/user/login");
  });
});

module.exports = router;
