const express = require("express");

const app = express();

const userController = require("./controllers/user.controllers");

const commentController = require("./controllers/comment.controllers");
app.user(express.json());

app.use("/users", userController);
app.use("/comments", commentController);

module.exports = app;
