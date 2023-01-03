// Even if you don't use this functions right away, a lot of built-in modules use them

const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// instance of our class

// on - listen for an event
// emit - emit that event

customEmitter.on("Response", (name, id) => { // the second parameter is the call back function
    console.log(`Data received: ${name} and ${id}`);
})

customEmitter.on("Response", () => { // the second parameter is the call back function
    console.log("Some other logic here");
})

// Order matters
customEmitter.emit("Response", "John", 34);