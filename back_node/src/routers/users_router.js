const express = require("express");
const user_controller = require("./../controllers/users_controller");
const routeUsers = express.Router();

routeUsers.get("/user", user_controller.GET_USUARIOS);
routeUsers.post("/user", user_controller.CREATE_USUARIOS);
routeUsers.put("/user/:id", user_controller.UPDATE_USUARIOS);
routeUsers.delete("/user/:id", user_controller.DELETE_USUARIOS);

module.exports = routeUsers;