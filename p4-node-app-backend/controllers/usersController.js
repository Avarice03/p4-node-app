const HttpError = require("../models/httpError");
const User = require("../models/userModel");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate("recipes");
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving users.");
    }
  },
  getSingleUser: async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId).populate("recipes");
      if (!user) {
        return next(new HttpError("User does not exist", 404));
      }
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving user.");
    }
  },
  getSingleUserRecipes: async (req, res) => {
    try {
      const userRecipes = await User.findById(req.params.userId).populate(
        "recipes"
      );
      if (!userRecipes) {
        return next(new HttpError("User does not exist", 404));
      }
      res.json(userRecipes.recipes);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving user recipes.");
    }
  },
  // addSingleUser: async (req, res) => {
  //   try {
  //     const user = new User(req.body);
  //     await user.save();
  //     res.send(task);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).send("Error adding user.");
  //   }
  // },
  // deleteSingleUser: async (req, res) => {
  //   try {
  //     const deletedUser = await User.findByIdAndDelete(req.params.id);
  //     res.send(`${deletedUser.name} user deleted`);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).send("Error deleting user.");
  //   }
  // },
};

module.exports = userController;
