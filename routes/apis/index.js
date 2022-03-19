const routes = require("express").Router();
const usersRoutes = require ("./users-routes");
const thoughtRoutes = require ('./thoughts-routes');
const { users } = require("../../models");
routes.use("./users", usersRoutes);
routes.use("/thoughts", thoughtRoutes);
module.exports = routes;
//adding whats needed to route