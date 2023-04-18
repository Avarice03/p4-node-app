const Recipe = require("../models/recipeModel");
const HttpError = require("../models/httpError");

const recipeController = {
  getAllRecipes: async (req, res) => {
    try {
      const { category, cuisine } = req.query;
      if (category && cuisine) {
        const capitalizedCategory =
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        const capitalizedCuisine =
          cuisine.charAt(0).toUpperCase() + cuisine.slice(1).toLowerCase();
        const recipes = await Recipe.find({
          category: capitalizedCategory,
          cuisine: capitalizedCuisine,
          deletedAt: "",
        });
        res.json(recipes);
      } else if (category) {
        const capitalizedCategory =
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        const recipes = await Recipe.find({
          category: capitalizedCategory,
          deletedAt: "",
        });
        res.json(recipes);
      } else if (cuisine) {
        const capitalizedCuisine =
          cuisine.charAt(0).toUpperCase() + cuisine.slice(1).toLowerCase();
        const recipes = await Recipe.find({
          cuisine: capitalizedCuisine,
          deletedAt: "",
        });
        res.json(recipes);
      } else {
        const recipes = await Recipe.find({ deletedAt: "" });
        res.json(recipes);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipes.");
    }
  },
  getPublicRecipes: async (req, res) => {
    try {
      const publicRecipes = await Recipe.find({
        isPublic: true,
        deletedAt: "",
      });
      res.json(publicRecipes);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipes.");
    }
  },
  getSingleRecipe: async (req, res, next) => {
    try {
      const recipe = await Recipe.findOne({
        _id: req.params.recipeId,
        deletedAt: "",
      });
      if (!recipe) {
        return next(new HttpError("Recipe does not exist", 404));
      }
      res.json(recipe);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipe.");
    }
  },
  deleteSingleRecipe: async (req, res) => {
    try {
      const dateDeleted = new Date();
      const recipeToDelete = await Recipe.findOneAndUpdate(
        { _id: req.params.recipeId, deletedAt: "" },
        { deletedAt: dateDeleted }
      );
      if (!recipeToDelete) {
        return next(new HttpError("Recipe does not exist", 404));
      }
      res.send(`${recipeToDelete.name} recipe deleted.`);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error deleting recipe.");
    }
  },
};

module.exports = recipeController;
