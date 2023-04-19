const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/userModel");

// POST v1/signup (User Signup)
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(3);
    const passwordHash = await bcrypt.hash(user.password, salt);
    user.password = passwordHash;
    user.deletedAt = "";
    user.isAdmin = false;
    user.recipes = [];
    await user.save();
    res.send(`User created`);
  } catch (error) {
    console.log(error);
    res.status(400).send("All fields are required");
  }
});

module.exports = router;
