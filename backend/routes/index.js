import express from "express";
const router = express.Router();

import Instructor from "../models/insrtuctors.js";
import Course from "../models/course.js";
import Lecture from "../models/lecture.js";

router.post("/addinstructor", async (req, res) => {
  try {
    const data = new Instructor(req.body);
    await data.save();
    res.send("Instructor added");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

router.post("/addcourse", async (req, res) => {
  try {
    const data = new Course(req.body);
    await data.save();
    res.send("Course added");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

router.get("/courses", async (req, res) => {
  try {
    const data = await Course.find();
    res.json(data);
  } catch (err) {
    res.send("error");
  }
});

router.get("/instructors", async (req, res) => {
  try {
    const data = await Instructor.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

router.get("/lectures/:id", async (req, res) => {
  try {
    const data = await Lecture.find({
      instructorId: req.params.id,
    }).populate("courseId");
    res.json(data);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

router.post("/addlecture", async (req, res) => {
  try {
    const { instructorId, courseId, date } = req.body;
    const alreadyBooked = await Lecture.findOne({
      instructorId: instructorId,
      date: date,
    });

    if (alreadyBooked) {
      return res.send("Instructor has lecture on this date");
    }

    const newLecture = new Lecture({
      instructorId,
      courseId,
      date,
    });

    await newLecture.save();

    res.send("Lecture added");
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

export default router;
