import express from "express";
const router = express.Router();
import Joi from "joi";

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

// Accepting params and query

// router.get("/date/:month/:year", (req, res) => {
//   res.send(req.params);
// res.send(req.query);
// });

router.get("/:id", (req, res) => {
  const course = courses.find((course) => {
    return course.id === parseInt(req.params.id);
  });
  if (!course) {
    res.status(404).send("Course not found with given id");
  } else {
    res.send(course);
  }
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

export default router;
