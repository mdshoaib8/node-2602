const EventEmitter = require('events');
const event = new EventEmitter();

function one(){
    console.log("Function - 1");
}

function two(){
    console.log("Function - 2");
}

function three(){
    console.log("Function - 3\n");
}

event.on("listener_1", one);
event.on("listener_1", two);
event.on("listener_1", three);

event.emit("listener_1");

event.removeListener("listener_1", two);

event.emit("listener_1");