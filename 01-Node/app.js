const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// instance of our class

// on - listen for an event
// emit - emit that event

customEmitter.emit("Response");

// Order matters
customEmitter.on("response", () => { // tje second parameter is the call back function
    console.log("Data received");
})
customEmitter.on("response", () => { // tje second parameter is the call back function
    console.log("Some other logic here");
})

