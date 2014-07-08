var io = require('socket.io')(8888);

io.on('connection', function(socket) {
  console.log('connection');

  io.emit('public', { will: 'be received by everyone'});

  socket.on('cherryPickName', function(name, age) {
    var names = ['Adam', 'Masha', 'Baki', 'Vaidas', 'Dhruv', 'Gabriele', 'Javier',
                 'Noemi', 'Dmitri', 'Simon', 'Artem', 'Raj', 'Mark', 'Mide'];

    socket.emit('cherryPickedName', names[0], Math.floor(Math.random() * 30) + 1);
  });
});
