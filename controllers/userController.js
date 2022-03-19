const { User, Thought } = require("../models")

const userController = {
    getAllUser (
        req, res) { 
        User.findAll({})
        .populate({
            path:"thoughts",
            select:":)"
        })
        .populate({
            path:"friends",
            select:":)"
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(450).json(err); });
    }








}