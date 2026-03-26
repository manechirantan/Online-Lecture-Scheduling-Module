import { useState } from "react";
import API from "../api";
import "../styles/style.css";

export default function AddInstructor() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async () => {
    try {
      await API.post("/addinstructor", form);
      alert("Instructor added");
      setForm({ name: "", email: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <h3>Add Instructor</h3>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
