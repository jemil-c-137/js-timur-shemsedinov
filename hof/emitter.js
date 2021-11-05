const events = require("events");

const emitter = new events.EventEmitter();

emitter.on('new City', () => {
  console.log('Event emitted');
})

emitter.on('data', (array) => {
  console.log(array.reduce((a,b) => a + b))
})

emitter.emit('new City')
emitter.emit('data', [5,10,7,11])