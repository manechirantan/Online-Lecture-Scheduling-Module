import mongoose from "mongoose";
let schema = mongoose.Schema;

const instructorsSchema = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
const Instructor = mongoose.model("Instructor", instructorsSchema);

export default Instructor;
