const mongoose = require("mongoose");

// Defining a schema
const recipeSchema = new mongoose.Schema({
    deletedAt: String,
    isPublic: Boolean,
    name: {type: String, required: true},
    servings: Number,
    category: String,
    cuisine: String,
    description: String,
    ingredients: Array,
    instructions: Array,
    notes: String,
    image: String
  });
  // Defining a model
  const Recipe = mongoose.model("Recipe", recipeSchema, "recipes");
  
  
module.exports = Recipe;
  