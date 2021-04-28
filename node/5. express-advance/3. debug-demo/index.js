import express from "express";
const app = express();
import morgan from "morgan";
import debug from "debug";
const startupDebugger = debug("app:startup");
const dbDebugger = debug("app:db");

if (app.get("env") == "development") {
  app.use(morgan("dev"));
  startupDebugger("Morgan enabled...");
}

dbDebugger("Db connected...");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
