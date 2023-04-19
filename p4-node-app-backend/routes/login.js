const express = require("express");
const { config } = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

config();

const secret = process.env.SECRET;
const User = require("../models/userModel");
const HttpError = require("../models/httpError");

// POST v1/login (User Login)
router.post("/", async (req, res, next) => {
  try {
    const { userName, passwordInput } = req.body;
    const user = await User.findOne({ userName: userName, deletedAt: "" });

    if (!user) {
      return next(new HttpError("User does not exist", 404));
    }
    const hasAccess = await bcrypt.compare(passwordInput, user.password);
    const { password, ...payload } = user._doc;
    if (hasAccess) {
      const token = jwt.sign(payload, secret, {
        expiresIn: "60m",
      });
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;