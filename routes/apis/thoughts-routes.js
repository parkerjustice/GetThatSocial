const routes = require("express").router();
const routes = require("..");
const{ getAllThoughts,removingThought, getThoughtByID, addingReaction} = require("../../controllers/thoughtController");
routes.route('/')
.get(getAllThoughts);

routes.route("/:ID")
.get(getThoughtByID)
.remove(removingThought);

routes.rout("/:thoughtsID/reactions")
.post(addingReaction);

