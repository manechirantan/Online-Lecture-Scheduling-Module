import mongoose from "mongoose";
let schema = mongoose.Schema;

const lectureSchema = new schema({
  instructorId: {
    type: schema.Types.ObjectId,
    ref: "Instructor",
  },
  courseId: {
    type: schema.Types.ObjectId,
    ref: "Course",
  },
  date: String,
  batchName: String,
});

const Lecture = mongoose.model("Lecture", lectureSchema);

export default Lecture;
