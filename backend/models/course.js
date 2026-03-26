import mongoose from "mongoose";
let schema = mongoose.Schema;

const courseSchema = new schema({
  name: String,
  level: String,
  description: String,
  image: String,
});
const Course = mongoose.model("Course", courseSchema);

export default Course;
