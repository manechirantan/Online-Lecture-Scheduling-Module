import { useEffect, useState } from "react";
import API from "../api";

export default function InstructorList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/instructors").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h3>All Instructors</h3>
      {data.map((i) => (
        <div key={i._id}>
          {i.name} - {i.email}
        </div>
      ))}
    </div>
  );
}