import { useEffect, useState } from "react";
import API from "../api";
import "../styles/style.css";

export default function AddLecture() {
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    instructorId: "",
    courseId: "",
    date: "",
    batchName: "",
  });

  useEffect(() => {
    API.get("/instructors").then((res) => setInstructors(res.data));
    API.get("/courses").then((res) => setCourses(res.data));
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await API.post("/addlecture", form);
      alert(res.data);
      setForm({
        instructorId: "",
        courseId: "",
        date: "",
        batchName: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <h3>Add Lecture</h3>

      <select
        value={form.instructorId}
        onChange={(e) => setForm({ ...form, instructorId: e.target.value })}
      >
        <option value="">Select Instructor</option>
        {instructors.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>

      <select
        value={form.courseId}
        onChange={(e) => setForm({ ...form, courseId: e.target.value })}
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input
        placeholder="Batch Name"
        value={form.batchName}
        onChange={(e) => setForm({ ...form, batchName: e.target.value })}
      />

      <button onClick={handleSubmit}>Assign Lecture</button>
    </div>
  );
}