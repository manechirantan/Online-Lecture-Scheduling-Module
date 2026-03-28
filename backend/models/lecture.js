import mongoose from "mongoose";
let schema = mongoose.Schema;

const lectureSchema = new schema({
  instructorId: {
    type: schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  courseId: {
    type: schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  date: { type: String, required: true },
  batchName: String,
});

const Lecture = mongoose.model("Lecture", lectureSchema);

export default Lecture;
