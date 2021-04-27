import express from "express";
const app = express();
import Joi from "joi";
import MiddleWare from "./logger.js";
import helmet from "helmet";
import morgan from "morgan";

// MiddleWare
app.use(express.json());
app.use(helmet());

if (app.get("env") === "development") {
  app.use(morgan("dev"));
  console.log("Morgan enabled....");
}

// Custom Middleware
// app.use(MiddleWare.log);
// app.use(MiddleWare.auth);

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World from Shashwat");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// Accepting params and query

// app.get("/date/:month/:year", (req, res) => {
//   res.send(req.params);
// res.send(req.query);
// });

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((course) => {
    return course.id === parseInt(req.params.id);
  });
  if (!course) {
    res.status(404).send("Course not found with given id");
  } else {
    res.send(course);
  }
});

app.post("/api/courses", (req, res) => {
  // const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  // Lookup the course if not exists return 404
  const course = courses.find((course) => {
    return course.id === parseInt(req.params.id);
  });
  if (!course) return res.status(404).send("Course not found with given id");

  // Validate
  const { error } = validateCourse(req.body);

  // if not valid return 400
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // Update and return course
  course.name = req.body.name;
  res.send(course);
});

// Validation logic
function validateCourse(courseObj) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(courseObj);
}

app.delete("/api/courses/:id", (req, res) => {
  // Lookup the course if not exists return 404
  const course = courses.find((course) => {
    return course.id === parseInt(req.params.id);
  });
  if (!course) return res.status(404).send("Course not found with given id");

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // Return the response
  res.send(course);
});

// Imp: In production the port can be dynamically assigned
// so we have to use environment variables
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
