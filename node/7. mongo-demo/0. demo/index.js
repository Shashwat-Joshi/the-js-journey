import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Connection to MongoDb failed..", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

// Creating objects
async function createCourse() {
  const course = new Course({
    name: "Angular course",
    author: "Shashwat Joshi",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

// Querying documents
async function getCourses() {
  const courses = await Course.find({
    author: "Shashwat Joshi",
    isPublished: true,
  });
  console.log(courses);
}

getCourses();
