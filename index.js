var express = require('express');
var socket = require('socket.io');

// App setup
var app  = express();
var server = app.listen(3333,function(){
    console.log("Server UP ON PORT: 3333");
});

// Static Routes
app.use(express.static('public'));

// Socket Setup
var io = socket(server);

io.on('connection',function(socket){
    console.log("WS Connected - " + socket.id);
    socket.on('acmedia', function(data){

        io.sockets.emit('acmedia',data);
    });
});
