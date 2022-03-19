const { Schema, model } = require("mongoose");
const usersSchema= new Schema ({
        username: {
            type: String,
            unique: true,
            required:{ true: "Provide your username here"},
            trim: true,
        },

        email: {
            type: {string},
            unique: true,
            require: {true: "provide email"}, 
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
}})

        thoughts: [
            {type: Schema.Types.ObjectID,
                ref: "Thoughts"
            }
        ],

        friends [ 
            {
                type: Schema.Types.ObjectID,
                ref: "User"
            }
        ]

