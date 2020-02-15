var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, function(){
    console.log('listening to request on port 3000');
});

//serving src file
app.use(express.static('src'));

//setting up socket
var io = socket(server);

io.on('connection', socket => {
    console.log('made socket connection', socket.id);

   // receiving data sent and emitting to all sockets
    socket.on('chat', data =>{
        console.log(data.type);
        io.sockets.emit('chat', data);
    })
});

//server.listen(port);