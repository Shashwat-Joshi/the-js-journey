import express from "express";
const app = express();
import home from "./routes/home.js";
import courses from "./routes/courses.js";
import MiddleWare from "./middleware/logger.js";

// MiddleWare
app.use(express.json());

// Custom Middleware
app.use(MiddleWare.log);
app.use(MiddleWare.auth);

app.use("/", home);
app.use("/api/courses", courses);

// Imp: In production the port can be dynamically assigned
// so we have to use environment variables
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
