/** EventEmitter
 * Node.js has multiple in-built events available through events module and EventEmitter class 
 * which are used to bind events and event-listener.
 * All obejects which emit events are the instance of events.EventEmitter class
 * EventEmitter class lies in the events modules
 */

 //Example

 //import event modules
 var events = require('events');

 //create eventEmitter object
 var eventEmitter = new events.EventEmitter();

 //create listener
 var listener1 = function connected(){
     console.log('listener 1 executed.');
 }
 var listener2 = function connected(){
    console.log('listener 1 executed.');
}

//bind listener to events
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

//create counter which counts the number of listenere listening 
//to connection event.
var count = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

//fire event
eventEmitter.emit('connection');
console.log(count+"(s) listening to connection");

//remove an event
eventEmitter.removeListener('connection',listener2);
console.log("Listener2 is removed");

count = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
//fire event
eventEmitter.emit('connection');
console.log(count+"(s) listening to connection");


console.log("Program Ended");

/**
 * when and eventEmiiter instance face any error , it emit
 * 'error' event , when a new listener is added, 'newListener'
 * event is fired and when a listener is removed an removedListener
 * is fired
 * 
 * EventEmitter provides multiple properties like on and emit 
 * on property is used to bind and event with listener
 * emit property is to fire and event
 */