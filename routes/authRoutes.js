const { Router } = require("express");
const AuthService = require("../services/authService");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    try {
      // TODO: Implement login action (get the user if it exist with entered credentials)

      const { firstName, lastName, email, phoneNumber, password } = req.body;

      const data = { firstName, lastName, email, phoneNumber, password };
      const result = AuthService.login(data);
      if (result) {
        res.data = result;
        res.status(200).json({ message: "Logged in!" });
      } else {
        res.status(400).json({ message: "Failed to log in" });
      }
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

module.exports = router;
