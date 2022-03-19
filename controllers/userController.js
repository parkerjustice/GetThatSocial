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

    }
}