import { useEffect, useState } from "react";
import API from "../api";

export default function InstructorPanel() {
  const [id, setId] = useState("");
  const [lectures, setLectures] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    API.get("/instructors").then((res) => setInstructors(res.data));
  }, []);

  const fetchLectures = async () => {
    if (!id) {
      alert("Select instructor first");
      return;
    }

    try {
      const res = await API.get(`/lectures/${id}`);
      setLectures(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <h3>Instructor Panel</h3>

      <select onChange={(e) => setId(e.target.value)}>
        <option>Select Instructor</option>
        {instructors.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>

      <button onClick={fetchLectures}>Load</button>

      {lectures?.map((lec) => (
        <div key={lec._id} className="list-item">
          <strong>{lec.courseId?.name}</strong>
          <br />
          <small>{lec.date}</small>
        </div>
      ))}
    </div>
  );
}