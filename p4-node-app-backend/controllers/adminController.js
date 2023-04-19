const bcrypt = require("bcrypt");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const Recipe = require("../models/recipeModel");
const User = require("../models/userModel");
const HttpError = require("../models/httpError");

config();

const secret = process.env.SECRET;

const adminController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({ deletedAt: "" }).populate("recipes");
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving users.");
    }
  },
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
};

module.exports = adminController;
