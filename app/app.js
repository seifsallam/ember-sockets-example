import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var Socket = EmberSockets.extend({
  host: '0.0.0.0',
  port: 8888,
  controllers: ['index']
});


var App = Ember.Application.extend({
  modulePrefix: 'ember-sockets-example', // TODO: loaded via config
  Resolver: Resolver,
  Socket: Socket
});

loadInitializers(App, 'ember-sockets-example');

export default App;
