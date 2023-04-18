const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipesController");

// GET v1/recipes
router.get("/", recipeController.getAllRecipes);

// GET v1/recipes/public
router.get("/public", recipeController.getPublicRecipes);

// GET v1/recipes/:id
router.get("/:recipeId", recipeController.getSingleRecipe);

// DELETE v1/recipes/:id
router.delete("/:recipeId", recipeController.deleteSingleRecipe);

module.exports = router;