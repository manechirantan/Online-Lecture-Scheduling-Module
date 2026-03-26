import mongoose from "mongoose";
let schema = mongoose.Schema;

const instructorsSchema = new schema({
  name: String,
  email: String,
});
const Instructor = mongoose.model("Instructor", instructorsSchema);

export default Instructor;
