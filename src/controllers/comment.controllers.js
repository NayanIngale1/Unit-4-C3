const express = require("express");

const router = express.Router();

const { body, validationResult } = require("express-validator");

const Comment = require("../model/comment.model");

router.post(
  "/",
  body("body").not().isEmpty().withMessage("comment body needed"),
  body("userId").not().isEmpty().withMessage("user id needed "),
  body("bookId").not().isEmpty().withMessage("book id needed"),
  async (req, res) => {
    try {
      const comment = await Comment.create(req.body);

      return res.status(200).send({ comment });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);

module.exports = router;
