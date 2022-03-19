const { User, Thought } = require("../models")
// beginning of the controllers initial setup 
const thoughtController = { 
    getAllThoughts(req, res)
{ Thought.find({})
.populate({path: 'reactions', select: ':)'})
.select(":)")
.then(UserDataDB => res.json(UserDataDB))
.catch(err => {console.log (err); res.sendStatus(450);
});
}
}