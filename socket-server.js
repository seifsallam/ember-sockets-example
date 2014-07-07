var io = require('socket.io').listen(8888);

console.log('foo');

/**
 * @on connection
 */
io.sockets.on('connection', function (socket) {
  console.log('connection');

  /**
   * @on cherryPickName
   * Updates the content when the `applyFilterByWord` event has been received.
   */
  socket.on('cherryPickName', function(name, age) {
    var names = ['Adam', 'Masha', 'Baki', 'Vaidas', 'Dhruv', 'Gabriele', 'Javier',
                 'Noemi', 'Dmitri', 'Simon', 'Artem', 'Raj', 'Mark', 'Mide'];

    socket.emit('cherryPickedName', names[0], Math.floor(Math.random() * 30) + 1);
  });
});
