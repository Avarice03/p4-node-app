const express = require("express");
const router = express.Router();

const userController = require("../controllers/usersController");

// GET v1/users
router.get("/", userController.getAllUsers);

// GET v1/users/:userId
router.get("/:userId", userController.getSingleUser);

// GET v1/users/:userId/recipes
router.get("/:userId/recipes", userController.getSingleUserRecipes);

// DELETE v1/users/:userId
router.delete("/:userId", userController.deleteSingleUser);

module.exports = router;