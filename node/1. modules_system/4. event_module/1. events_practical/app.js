import EventEmitter from "events";

import Logger from "./logger.js";
const logger = new Logger();

// Register a listener
logger.on("message logged", (arg) => {
  console.log("listener called", arg);
});

logger.log("Hello this is Shashwat");
