const apiRoute = require("./apis");
const routes = require("express").Router();
router.use('./apis', apiRoute);
router.use ((req,res)=> {
    res.status(404).send("Page Not Found Try Again")
})
module.exports= routes;