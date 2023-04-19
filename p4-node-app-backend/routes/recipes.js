const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipesController");

// GET v1/recipes
router.get("/", recipeController.getAllRecipes);

// GET v1/recipes/public
router.get("/public", recipeController.getPublicRecipes);

// GET v1/recipes/search?
router.get("/search", recipeController.getSearchedRecipe);

// GET v1/recipes/:recipeId
router.get("/:recipeId", recipeController.getSingleRecipe);

// POST v1/recipes/:userId/
router.post("/:userId", recipeController.addSingleRecipe);

// PUT v1/recipes/:recipeId/
router.put("/:recipeId", recipeController.updateSingleRecipe);

// DELETE v1/recipes/:recipeId
router.delete("/:recipeId", recipeController.deleteSingleRecipe);

module.exports = router;