const express = require("express");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();

config();

const secret = process.env.SECRET;

const userController = require("../controllers/usersController");

// User authentication
router.use("/", (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verified = jwt.verify(token, secret);
    if (verified) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401);
  }
});

// GET v1/users/ (Get user details)
router.get("/", userController.getSingleUser);

// PUT v1/users/ (Update user details)
router.put("/", userController.updateSingleUser);

// DELETE v1/users/ (Soft Delete user)
router.delete("/", userController.deleteSingleUser);

module.exports = router;
