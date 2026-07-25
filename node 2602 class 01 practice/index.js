// Import EventEmitter class from events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const event = new EventEmitter();

// Register event listeners for the "trigger" event
event.once("trigger", () => {
    console.log("✅ Task - 1 is completed.");
})

event.on("trigger", () => {
    console.log("✅ Task - 2 is completed.");
})

event.on("trigger", () => {
    console.log("✅ Task - 3 is completed.");
})

event.on("trigger", () => {
    console.log("✅ Task - 4 is completed.");
})

event.on("trigger", (check) => {
    console.log(check);
})

// Emit the "trigger" event multiple times
event.emit("trigger", "\n🔴 Check 'Task - 2, 3, & 4' one more time.\n");
event.emit("trigger", "\n🟢 Everything is working fine, no issues found.\n");