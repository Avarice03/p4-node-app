const HttpError = require("../models/httpError");
const User = require("../models/userModel");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({ deletedAt: "" }).populate("recipes");
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving users.");
    }
  },
  getSingleUser: async (req, res, next) => {
    try {
      const user = await User.findOne({
        _id: req.params.userId,
        deletedAt: "",
      }).populate("recipes");
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
      const userRecipes = await User.findOne({
        _id: req.params.userId,
        deletedAt: "",
      }).populate("recipes");
      if (!userRecipes) {
        return next(new HttpError("User does not exist", 404));
      }
      res.json(userRecipes.recipes);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving user recipes.");
    }
  },
  deleteSingleUser: async (req, res, next) => {
    try {
      const dateDeleted = new Date();
      const userToDelete = await User.findOneAndUpdate(
        { _id: req.params.userId, deletedAt: "" },
        { deletedAt: dateDeleted }
      );
      if (!userToDelete) {
        return next(new HttpError("User does not exist", 404));
      }
      res.send(`${userToDelete.userName} user deleted.`);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error deleting user.");
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
};

module.exports = userController;
