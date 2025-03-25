const express = require("express");
const route = express.Router();
const route2 = express.Router();
const userController = require("../controllers/userController.js");

route
  .route("/:id")
  .get(userController.view)
  .post(userController.insert)
  .put(userController.update)
  .delete(userController.delete);

module.exports = {
  route,
};
