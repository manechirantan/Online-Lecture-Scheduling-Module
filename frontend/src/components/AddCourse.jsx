import { useState } from "react";
import API from "../api";
import "../styles/style.css";

export default function AddCourse() {
  const [form, setForm] = useState({
    name: "",
    level: "",
    description: "",
    image: "",
  });

  const handleSubmit = async () => {
    try {
      await API.post("/addcourse", form);
      alert("Course added");
      setForm({
        name: "",
        level: "",
        description: "",
        image: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <h3>Add Course</h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Level"
        value={form.level}
        onChange={(e) => setForm({ ...form, level: e.target.value })}
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
