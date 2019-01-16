/**
 *          Event loop
 * NodeJs is single threaded ,but can support concurrency
 * by concepts of event loop and callbacks.
 * Node API being asynchronous and sngle threaded ,they use
 * async function calls to maintain concurrency
 * 
 * As soon as the node server starts , it simply initiates its variables, declares
 * functions and then simply waits for the events to occur.
 * In an event-driven application ,there is generally a main loop that listens
 * for events, and then triggers an callback function when one of those events is detected.
 * When event get fired, its listener function starts executing.
 * NodeJs has multiple in-built events available through events module
 * and EvenEmitter class which are used to bind events and event-listeners.
 * 
 * 
 * EventEmitters --->[][]Events[][] -->()EventLoop() --> {EventHandler}
 */

//import event module
var events = require('events');

//create an Event Emitter object
var eventEmitter = new events.EventEmitter();

//create and event handler 
var eventHandler = function connected() {
    console.log("eventHandler runs");
}

//bind the eventEmitter with eventhandler
eventEmitter.on('connection', eventHandler);

//fire the event
eventEmitter.emit('connection');

console.log("Program ended");

/**
 * Although events look quite similar to callbacks, 
 * the difference lies in the fact that callback functions 
 * are called when an asynchronous function returns its result,
 *  whereas event handling works on the observer pattern. 
 * The functions that listen to events act as Observers.
 */
