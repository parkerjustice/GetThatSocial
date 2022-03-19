const routes = require("express").router();
const routes = require("..");
const{ getAllThoughts,removingThought, getThoughtByID, addingReaction} = require("../../controllers/thoughtController");
routes.route('/')
.get(getAllThoughts);

