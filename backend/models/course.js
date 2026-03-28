import mongoose from "mongoose";
let schema = mongoose.Schema;

const courseSchema = new schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});
const Course = mongoose.model("Course", courseSchema);

export default Course;
