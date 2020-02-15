const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const sessions = require('./routes/api/sessions');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db)
    .then(()=> console.log("mongoDB connected."))
    .catch(err => console.log(err));


//use routes
app.use('/api/sessions', sessions);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started on port 5000'));