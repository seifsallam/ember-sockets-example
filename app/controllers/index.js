import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cherryPickName: function() {
      this.socket.emit('cherryPickName');
    }
  },

  sockets: {
    cherryPickedName: function(name, age) {
      this.set('name', name);
      this.set('age', age);
    },

    connect: function() {
      console.log('EmberSockets has connected...');
    },

    disconnect: function() {
      console.log('EmberSockets has disconnected...');
    }
  },
  name: 'Adam',

  age: 16
});
