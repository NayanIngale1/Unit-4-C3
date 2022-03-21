const express = require("express");

const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../model/user.model");

router.post(
  "/",
  body("firstName")
    .not()
    .isEmpty()
    .withMessage("First name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("First name is should between 3 and 30 "),
  body("lastName").custom((value) => {
    if (value) {
      if (value < 3 || value > 30) {
        throw new Error("last name s should between 3 and 30 ");
      }
      return true;
    }
  }),
  body("age")
    .not()
    .isEmpty()
    .withMessage("age is required")
    .custom((value) => {
      if (value < 1 || value > 150) {
        throw new Error("age should be between 1 and 150");
      }
      return true;
    }),
  body("email")
    .not()
    .isEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Enter A correct email")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Incoorect Email or Password");
      }
    }),
  body("profileImages")
    .not()
    .isEmpty()
    .withMessage("sould be at least one profile image"),
  async (req, res) => {
    try {
      const user = await User.create(req.body);

      return res.status(200).send({ user });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);

module.exports = router;
