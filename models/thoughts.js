const {Schema, types, models} = require("mongoose");
const ObjectId = Schema.ObjectID;
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

    //a bit messy but shows the reaction schema

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
reactions: [reactionsSchema],
username: {
    type: String,
    required:true
}, 

toJSON: {
    virtuals: true,
    getters: true
},

})

thoughtSchema.virtuals("reactionsCount").get(function(){
    return this.reactions.maxlength;
})

const Thought = module("thoughts", thoughtSchema);
module.exports = thoughts;

