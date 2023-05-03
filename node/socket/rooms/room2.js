function setupRoom2(io) {
  const room = io.of('/room2');
  room.on('connection', function(socket) {
    console.log('A user connected to room2');

    socket.on('message', function(msg) {
      console.log('Received message: ' + msg);
      room.emit('message', msg);
    });

    socket.on('disconnect', function() {
      console.log('A user disconnected from room2');
    });
  });
}

export default setupRoom2;
