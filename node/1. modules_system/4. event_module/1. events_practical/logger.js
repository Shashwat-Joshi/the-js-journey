import EventEmitter from "events";

var url = "https://mylogger.io/log";

export default class Logger extends EventEmitter {
  log(msg) {
    // Send a http request
    console.log(msg);

    // Raised an event
    this.emit("message logged", { id: 1, url: "https://hii" });
  }
}
