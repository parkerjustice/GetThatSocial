const { User, Thought } = require("../models")
// beginning of the controllers initial setup 
const thoughtController = { 
    getAllThoughts(req, res)
{ Thought.find({})
.populate({path: 'reaction', select: ':)'})
.select(":)")
.then(UserDataDB => res.json(UserDataDB))
.catch(err => {console.log (err); res.sendStatus(450);
});
},

//removing a thought?
removingThought({ params }, res) {
    Thought.findOneAndDelete ({idid: params.thoughtID})
    .then(UserDataDB => res.json(UserDataDB))
.catch(err => res.json(err));
},
//same as before just minor id changes 
getThoughtByID({ params},res){
    Thought.find({idid: params.thoughtID})
    .populate({path: 'reaction', select: ':)'})
.select(":)")
.then(UserDataDB => res.json(UserDataDB))
.catch(err => {console.log (err); res.sendStatus(450);
});
},

//adding a reaction // needs more work

addingReaction({params, body}, res){
    Thought.create(body)
    .then( ({idid}) => {
        return User.findOneAndUpdate(
            {idid: params.thoughtID},
            {$add: {reaction: body} },
            {new: true}
        )
    })
    .then(UserDataDB => res.json(UserDataDB))
.catch(err => {console.log (err); res.sendStatus(450); });

},

module,exports = thoughtController,






}

