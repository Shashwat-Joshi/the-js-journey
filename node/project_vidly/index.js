import Joi from "joi";
import express from "express";
const app = express();

app.use(express.json());

// Dummy local DB
let genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
];

// Test Route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Route to get list all genres
app.get("/api/genres", (req, res) => {
  res.send(genres);
});

// Route to add a new genre to the local DB
app.post("/api/genres", (req, res) => {
  // Validate body params
  const { error } = validateMovieObj(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // create genre obj to add
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };

  // Update the local DB
  genres.push(genre);

  // Respond for a successful creation of new genre
  res.send(genre);
});

// Route to update an existing genre
app.put("/api/genres/:id", (req, res) => {
  // Check if id exists
  const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Genre not found");

  // Validate body obj
  const { error } = validateMovieObj(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update obj
  genre.name = req.body.name;

  // Return message on success
  res.send(genre);
});

// Route to delete an existing genre
app.delete("/api/genres/:id", (req, res) => {
  // Search if the given id is there or not
  const genre = genres.find((genre) => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Genre not found");

  // Delete genre
  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  // Return success message
  res.send(genre);
});

// Validate a genre
function validateMovieObj(obj) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(obj);
}

// Entry point of application
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
