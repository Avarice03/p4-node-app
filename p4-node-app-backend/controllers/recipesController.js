const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const Recipe = require("../models/recipeModel");
const User = require("../models/userModel");
const HttpError = require("../models/httpError");

config();
const secret = process.env.SECRET;

const recipeController = {
  getPublicRecipes: async (req, res) => {
    try {
      const { category, cuisine } = req.query;
      const publicRecipes = await Recipe.find({
        isPublic: true,
        deletedAt: "",
      });
      if (category && cuisine) {
        const filteredRecipes = publicRecipes.filter(
          (recipe) =>
            recipe.category.toLowerCase() === category.toLowerCase() &&
            recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
        );
        res.json(filteredRecipes);
      } else if (category) {
        const filteredRecipes = publicRecipes.filter(
          (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
        );
        res.json(filteredRecipes);
      } else if (cuisine) {
        const filteredRecipes = publicRecipes.filter(
          (recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
        );
        res.json(filteredRecipes);
      } else {
        res.json(publicRecipes);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipes.");
    }
  },
  getPublicAndUserRecipes: async (req, res, next) => {
    try {
      const { category, cuisine } = req.query;
      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(token, secret);
      const user = await User.findById({ _id: payload._id, deletedAt: "" });
      if (!user) {
        return next(new HttpError("User does not exist", 404));
      }
      const allRecipes = await Recipe.find({
        deletedAt: "",
      });
      const recipes = allRecipes.filter(
        (recipe) =>
          recipe.isPublic === true ||
          user.recipes.includes(recipe._id.toString())
      );
      if (category && cuisine) {
        const filteredRecipes = recipes.filter(
          (recipe) =>
            recipe.category.toLowerCase() === category.toLowerCase() &&
            recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
        );
        res.json(filteredRecipes);
      } else if (category) {
        const filteredRecipes = recipes.filter(
          (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
        );
        res.json(filteredRecipes);
      } else if (cuisine) {
        const filteredRecipes = recipes.filter(
          (recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
        );
        res.json(filteredRecipes);
      } else {
        res.json(recipes);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipes.");
    }
  },
  getUserRecipes: async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secret);
    try {
      const { category, cuisine } = req.query;
      const userRecipes = await User.findOne({
        _id: payload._id,
        deletedAt: "",
      }).populate("recipes");
      if (!userRecipes) {
        return next(new HttpError("User does not exist", 404));
      }
      if (category && cuisine) {
        const filteredRecipes = userRecipes.recipes.filter(
          (recipe) =>
            recipe.category.toLowerCase() === category.toLowerCase() &&
            recipe.cuisine.toLowerCase() === cuisine.toLowerCase() &&
            recipe.deletedAt === ""
        );
        res.json(filteredRecipes);
      } else if (category) {
        const filteredRecipes = userRecipes.recipes.filter(
          (recipe) =>
            recipe.category.toLowerCase() === category.toLowerCase() &&
            recipe.deletedAt === ""
        );
        res.json(filteredRecipes);
      } else if (cuisine) {
        const filteredRecipes = userRecipes.recipes.filter(
          (recipe) =>
            recipe.cuisine.toLowerCase() === cuisine.toLowerCase() &&
            recipe.deletedAt === ""
        );
        res.json(filteredRecipes);
      } else {
        const filteredRecipes = userRecipes.recipes.filter(
          (recipe) => recipe.deletedAt === ""
        );
        res.json(filteredRecipes);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving user recipes.");
    }
  },
  getSingleRecipe: async (req, res, next) => {
    try {
      const token = req.headers.authorization
        ? req.headers.authorization.split(" ")[1]
        : "";
      if (token.length) {
        const payload = jwt.verify(token, secret);
        const user = await User.findById({ _id: payload._id });
        if (!user) {
          return next(new HttpError("User does not exist", 404));
        }
        const recipe = await Recipe.findOne({
          _id: req.params.recipeId,
          deletedAt: "",
        });
        const recipeExists = user.recipes.includes(req.params.recipeId);
        if (recipeExists || recipe.isPublic) {
          res.json(recipe);
        } else {
          return next(new HttpError("Recipe does not exist", 404));
        }
      } else {
        const recipe = await Recipe.findOne({
          _id: req.params.recipeId,
          deletedAt: "",
          isPublic: true,
        });
        res.json(recipe);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving recipe.");
    }
  },
  addSingleRecipe: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(token, secret);
      // Check if user exists
      const user = await User.findById({ _id: payload._id });

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
      recipe.image =
        req.body.image ||
        "https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png";
      await recipe.save();

      // Access user
      user.recipes.push(recipe._id);
      await user.save();
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error adding recipe");
    }
  },
  updateSingleRecipe: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(token, secret);
      const user = await User.findById({ _id: payload._id });
      if (!user) {
        return next(new HttpError("User does not exist", 404));
      }
      const recipeExists = user.recipes.some(
        (recipeId) => recipeId.toString() === req.params.recipeId
      );
      if (!req.body.name) {
        return next(new HttpError("Recipe name is required", 400));
      }
      if (recipeExists) {
        const recipe = await Recipe.findByIdAndUpdate(
          req.params.recipeId,
          {
            isPublic: req.body.isPublic,
            name: req.body.name,
            servings: req.body.servings,
            category: req.body.category,
            cuisine: req.body.cuisine,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            notes: req.body.notes,
            image: req.body.image,
          },
          { new: true }
        );
        res.send(`${recipe.name} updated`);
      } else {
        return next(new HttpError("Recipe does not exist", 404));
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error updating recipe.");
    }
  },
  deleteSingleRecipe: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(token, secret);
      const user = await User.findById({ _id: payload._id });
      if (!user) {
        return next(new HttpError("User does not exist", 404));
      }
      const recipeExists = user.recipes.some(
        (recipeId) => recipeId.toString() === req.params.recipeId
      );
      if (recipeExists) {
        const dateDeleted = new Date();
        const recipeToDelete = await Recipe.findOneAndUpdate(
          { _id: req.params.recipeId, deletedAt: "" },
          { deletedAt: dateDeleted }
        );
        if (!recipeToDelete) {
          return next(new HttpError("Recipe does not exist", 404));
        }
        res.send(`${recipeToDelete.name} recipe deleted.`);
      } else {
        return next(new HttpError("Recipe does not exist", 404));
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error deleting recipe.");
    }
  },
};

module.exports = recipeController;
