import { Routes, Route, Link } from "react-router-dom";

import AddInstructor from "./components/AddInstructor";
import AddCourse from "./components/AddCourse";
import AddLecture from "./components/AddLecture";
import InstructorList from "./components/InstructorList";
import InstructorPanel from "./components/InstructorPanel";

import "./styles/style.css";

function App() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Admin</Link>
        <Link to="/instructor">Instructor</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2 style={{ textAlign: "center" }}>Admin Panel</h2>
              <div className="app-container">
                <AddInstructor />
                <AddCourse />
                <AddLecture />
                <InstructorList />
              </div>
            </>
          }
        />

        <Route
          path="/instructor"
          element={
            <>
              <h2 style={{ textAlign: "center" }}>Instructor Panel</h2>
              <InstructorPanel />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
