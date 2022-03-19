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
//same as before just minor id changes 
getThoughtByID({ params},res){
    Thought.find({idid: params.thoughtID})
    .populate({path: 'reaction', select: ':)'})
.select(":)")
.then(UserDataDB => res.json(UserDataDB))
.catch(err => {console.log (err); res.sendStatus(450);
});
},









}

