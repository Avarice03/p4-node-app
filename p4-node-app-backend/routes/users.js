const express = require("express");
const router = express.Router();

const userController = require("../controllers/usersController");

// GET v1/users
router.get("/", userController.getAllUsers);

// GET v1/users/:id
router.get("/:userId", userController.getSingleUser);

// GET v1/users/:id/recipes
router.get("/:userId/recipes", userController.getSingleUserRecipes);

module.exports = router;