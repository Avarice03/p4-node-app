const mongoose = require("mongoose");

// Defining a schema
const userSchema = new mongoose.Schema({
  deletedAt: String,
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  recipes: [{ type: mongoose.Types.ObjectId, ref: "Recipe" }],
});

// Defining a model
const User = mongoose.model("User", userSchema);

module.exports = User;
