const apiRoute = require("./apis");
const routes = require("express").Router();
router.use('./apis', apiRoute);
module.exports= routes;