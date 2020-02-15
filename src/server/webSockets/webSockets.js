var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(3000, function(){
    console.log('listening to request on port 3000');
});

//serving src file
app.use(express.static('src'));

//setting up socket
var io = socket(server);

io.on('connection', function(){
    console.log('made socket connection');
})