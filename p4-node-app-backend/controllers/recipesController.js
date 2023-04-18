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
        });
        res.json(recipes);
      } else if (category) {
        const capitalizedCategory =
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        const recipes = await Recipe.find({ category: capitalizedCategory });
        res.json(recipes);
      } else if (cuisine) {
        const capitalizedCuisine =
          cuisine.charAt(0).toUpperCase() + cuisine.slice(1).toLowerCase();
        const recipes = await Recipe.find({ cuisine: capitalizedCuisine });
        res.json(recipes);
      } else {
        const recipes = await Recipe.find();
        res.json(recipes);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipes.");
    }
  },
  getPublicRecipes: async (req, res) => {
    try {
      const publicRecipes = await Recipe.find({ isPublic: true });
      res.json(publicRecipes);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipes.");
    }
  },
  getSingleRecipe: async (req, res) => {
    try {
      const recipe = await Recipe.findOne({ _id: req.params.id });
      res.json(recipe);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipe.");
    }
  },
};

module.exports = recipeController;
