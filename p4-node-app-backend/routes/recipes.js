const express = require("express");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();

config();
const secret = process.env.SECRET;
const recipeController = require("../controllers/recipesController");

// GET v1/recipes/ (Get public recipes)
router.get("/", recipeController.getPublicRecipes);

// GET v1/recipes/:recipeId
router.get("/:recipeId", recipeController.getSingleRecipe);

router.use("/", (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verified = jwt.verify(token, secret);
    if (verified) {
      tokenExists = true;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
});


// GET v1/recipes/user (Get public and user recipes)
router.get("/user", recipeController.getPublicAndUserRecipes);

// GET v1/recipes/user/personal (Get user recipes only)
router.get("/user/personal", recipeController.getUserRecipes);

// POST v1/recipes/user
router.post("/user/", recipeController.addSingleRecipe);

// PUT v1/recipes/user/:recipeId
router.put("/user/:recipeId", recipeController.updateSingleRecipe);

// DELETE v1/recipes/user/:recipeId
router.delete("/user/:recipeId", recipeController.deleteSingleRecipe);

module.exports = router;
