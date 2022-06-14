const { Router } = require("express");
const UserService = require("../services/userService");
const {
  createUserValid,
  updateUserValid,
} = require("../middlewares/user.validation.middleware");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

// TODO: Implement route controllers for user

router.get("/api/users", function (req, res, next) {
  const allUsers = UserService.getAll();
  res.status(200).json(allUsers);
});

router.get("/api/users/:id", function (req, res, next) {
  const userId = req.params.id;
  const user = UserService.search(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: "Failed to find a user." });
  }
});

router.post("/api/users", function (req, res, next) {
  const userData = req.body;
  const result = UserService.create(userData);
  if (result) {
    res.status(200).json({ message: "User created." });
  } else {
    res.status(400).json({ message: "Failed to create user." });
  }
});

router.put("/api/users/:id", function (req, res, next) {
  const userId = req.params.id;
  const dataToUpdate = req.body;
  const result = UserService.update(userId, dataToUpdate);
  if (result) {
    res.status(200).json({ message: "Data updated." });
  } else {
    res.status(400).json({ message: "Failed to update data." });
  }
});

router.delete("/api/users/:id", function (req, res, next) {
  const userId = req.params.id;
  const result = UserService.delete(userId);
  if (result) {
    res.status(200).json({ message: "User deleted." });
  } else {
    res.status(400).json({ message: "Failed to delete user." });
  }
});

module.exports = router;
