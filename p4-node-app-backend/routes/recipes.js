const express = require("express");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();

config();
const secret = process.env.SECRET;
const recipeController = require("../controllers/recipesController");

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

// GET v1/recipes/ (Get public and user recipes)
router.get("/", recipeController.getPublicAndUserRecipes);

// GET v1/recipes/user (Get user recipes only)
router.get("/user", recipeController.getUserRecipes);

// GET v1/recipes/search?
router.get("/search", recipeController.getSearchedRecipe);

// GET v1/recipes/:recipeId
router.get("/:recipeId", recipeController.getSingleRecipe);

// POST v1/recipes/
router.post("/", recipeController.addSingleRecipe);

// PUT v1/recipes/
router.put("/:recipeId", recipeController.updateSingleRecipe);

// DELETE v1/recipes/
router.delete("/:recipeId", recipeController.deleteSingleRecipe);

module.exports = router;
