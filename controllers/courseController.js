//controllers/courseController.js
const Course = require("./models/courses");

exports.list = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const course = await Course.create({ name, description });
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

exports.update = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { name, description } = req.body;
    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await course.update({ name, description });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

exports.delete = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await course.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};
