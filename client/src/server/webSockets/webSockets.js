var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, function(){
    console.log('listening to request on port 4000');
});

//serving src file
app.use(express.static('src'));

//setting up socket
var io = socket(server);

io.sockets.on('connection', function(socket){
    console.log("this");
    console.log('joining ' + room);
    io.socket.on('room', function(room) {
        socket.join(room);
    });
    
});


io.on('connection', socket => {
    console.log('made socket connection', socket.id);

   // var room = 'test';
   // receiving data sent and emitting to all sockets
    io.socket.on('chat', data =>{
        console.log('receiving ' + data.type);
        io.sockets.in('test').emit('chat', data);
    })
});

//server.listen(port);