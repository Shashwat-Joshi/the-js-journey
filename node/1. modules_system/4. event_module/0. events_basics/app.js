const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("message logged", (arg) => {
  console.log("listener called", arg);
});

// Raised an event
emitter.emit("message logged", { id: 1, url: "https://hii" });

emitter.emit("message logged", { id: 2, url: "https://hey" });
