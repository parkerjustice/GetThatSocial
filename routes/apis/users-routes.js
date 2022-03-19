const routes = require("exppress").Router();
const { get } = require("..");
const {getAllUser,removingUser, getUserByID,addingFriends  } = require("../../controllers/userController");
routes.route("/")
.get(getAllUser);