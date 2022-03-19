const {Schema, types, models} = require("mongoose");

const reactionsSchema = new Schema(
    {
        reactionsBody:{ type: String,
        required: "Show reaction",
    maxlength:280
},
reactionsID: {
    type: Schema.Types.ObjectID,
    default:() => new Types.ObjectID()
},
username: {
    type: String,
    required: "Provide the user to continue"
},

},
{toJSON:{
    getters:true}})

const thoughtSchema = new Schema ()




