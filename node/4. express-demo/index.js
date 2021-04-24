import express from "express";
const app = express();

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

// Imp: In production the port can be dynamically assigned
// so we have to use environment variables
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
