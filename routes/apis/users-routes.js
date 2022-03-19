const routes = require("exppress").Router();
const { get, route } = require("..");
const {getAllUser,removingUser, getUserByID,addingFriends  } = require("../../controllers/userController");
routes.route("/")
.get(getAllUser);

routes.route("/:ID")
.get(getUserByID)
.remove(removingUser);

routes.route("/:usersID/friends/:friendsID")
.post(addingFriends);
module.exports = routes;
//routing to the user ID