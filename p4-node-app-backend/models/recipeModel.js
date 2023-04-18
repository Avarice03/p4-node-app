const mongoose = require("mongoose");

// Defining a schema
const recipeSchema = new mongoose.Schema({
    name: String,
  });
  // Defining a model
  const Recipe = mongoose.model("Recipe", recipeSchema, "recipes");
  
  
module.exports = Recipe;
  