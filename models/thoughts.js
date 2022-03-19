const {Schema, types, models} = require("mongoose");

const dateFormated = require ("../utils/datesFormat");
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



}
)