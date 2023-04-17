const express = require("express");
const router = express.Router();
const Human = require("../models/Human");

router.get("/", async (req, res) => {
  try {
    const humans = await Human.find({});
    res.render("humans/index", { humans });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/new", (req, res) => {
  res.render("humans/new");
});

router.post("/", async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const newHuman = new Human({ name, age, gender });
    await newHuman.save();
    res.redirect("/humans");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const human = await Human.findById(id);
    res.render("humans/show", { human });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const human = await Human.findById(id);
    res.render("humans/edit", { human });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender } = req.body;
    const human = await Human.findById(id);
    human.name = name;
    human.age = age;
    human.gender = gender;
    await human.save();
    res.redirect("/humans");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const human = await Human.findById(id);
    await human.remove();
    res.redirect("/humans");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
