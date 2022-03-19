const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlendcoded({}))
const PORT = process.env.PORT || 3001;

await mongoose.connect('mongodb://localhost/GetThatSocial'),
 {
    useNewUrlParser: true,
    userUnifiedTopology: true

}

mongoose.set("debug", true);
app.listen(PORT, ()=> console.log('Now connected on localhost:${PORT}'));

//https://www.npmjs.com/package/mongoose link that was used for help