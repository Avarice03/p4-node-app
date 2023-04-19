const Recipe = require("../models/recipeModel");
const User = require("../models/userModel");
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
  getSearchedRecipe: async (req, res, next) => {
    try {
      const { name } = req.query;
      const recipe = await Recipe.find({
        name: { $regex: name, $options: "i" },
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
  addSingleRecipe: async (req, res, next) => {
    try {
      // Check if user exists
      const user = await User.findById(req.params.userId);

      if (!user) {
        return next(new HttpError("User does not exist", 404));
      }

      // Recipe Content
      const recipe = new Recipe(req.body);

      if (!recipe.name) {
        return next(new HttpError("Recipe name is required", 400));
      }
      recipe.deletedAt = "";
      recipe.isPublic = req.body.isPublic || false;
      recipe.servings = req.body.servings || null;
      recipe.category = req.body.category || "";
      recipe.cuisine = req.body.cuisine || "";
      recipe.description = req.body.description || "";
      recipe.ingredients = req.body.ingredients || [];
      recipe.instructions = req.body.instructions || [];
      recipe.notes = req.body.notes || "";
      recipe.image = req.body.image || "";
      await recipe.save();

      // Access user
      user.recipes.push(recipe._id);
      await user.save();
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error adding recipe");
    }
  },
  updateSingleRecipe: async (req, res, next) => {
    try {
      const recipe = await Recipe.findByIdAndUpdate(
        req.params.recipeId,
        {
          isPublic: req.body.isPublic || false,
          servings: req.body.servings || null,
          category: req.body.category || "",
          cuisine: req.body.cuisine || "",
          description: req.body.description || "",
          ingredients: req.body.ingredients || [],
          instructions: req.body.instructions || [],
          notes: req.body.notes || "",
          image: req.body.image || "",
        },
        { new: true }
      );

      if (!recipe) {
        return next(new HttpError("Recipe does not exist", 404));
      }
      res.send(`${recipe.name} updated`);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error updating recipe.");
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
