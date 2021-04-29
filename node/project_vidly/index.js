import express from "express";
const app = express();
import genres from "./routes/genres.js";

app.use(express.json());
app.use("/api/genres", genres);

// Entry point of application
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
