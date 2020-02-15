const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socket = require('socket.io');

// const socket = io.connect('http://localhost:4000');

const sessions = require('./routes/api/sessions');
const users = require('./routes/api/users');

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log('server started on port 5000'));

//Bodyparser middleware
app.use(bodyParser.json());
app.use(express.static('src'));

//DB config
const db = require('./config/keys').mongoURI;
const io = socket(server);

//connect to mongo
mongoose.connect(db)
    .then(()=> console.log("mongoDB connected."))
    .catch(err => console.log(err));


//use routes
app.use('/api/sessions', sessions);
app.use('/api/users', users);

io.sockets.on('connection', function(socket){
    socket.on('room', function(room){
        console.log('joining '  + room);
        socket.join(room);
    });
});

io.on('connection', socket =>{
    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    });
});
    