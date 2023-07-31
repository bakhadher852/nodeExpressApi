// routes/tempRouter.js
const express = require("express");
const router = express.Router();
const mod = require("../models/mod");
// res.send("Router")
router.get("/", (req, res) =>
  mod
    .findAll()
    .then((mods) => {
      const courseData = mods.map((course) => ({
        id: course.dataValues.id,
        title: course.dataValues.title,
        desc: course.dataValues.desc,
      }));
      res.json(courseData);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
);

router.get("/get/:id", (req, res) => {
  const { id } = req.params; // Get the course ID from the URL parameter

  mod
    .findByPk(id)
    .then((course) => {
      if (!course) {
        return res.status(404).send({
          message: "Course Not Found",
        });
      }
      res.json(course);
    })
    .catch((error) => res.status(400).send(error));
});

router.post("/add", (req, res) => {
  const { title, desc } = req.body; // Assuming you are receiving the data in the request body

  // Post request
  mod
    .create({
      title: title,
      desc: desc,
    })
    .then((newCourse) => {
      console.log("New course added:", newCourse);
      console.log("===========req", req, "================");
      res.sendStatus(201); // Send a 201 status code to indicate successful creation
    })
    .catch((err) => {
      console.error("Error adding new course:", err);
      res.sendStatus(500); // Send a 500 status code for internal server error
    });
});

// New route for updating a course by ID
router.put("/update/:id", (req, res) => {
  const { id } = req.params; // Get the course ID from the URL parameter
  const { title, desc } = req.body; // Get the updated data from the request body

  mod
    .update(
      {
        title: title,
        desc: desc,
      },
      {
        where: { id: id },
      }
    )
    .then((result) => {
      if (result[0] === 1) {
        console.log("Course updated successfully");
        res.sendStatus(200);
      } else {
        console.log("Course not found or not updated");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error updating course:", err);
      res.sendStatus(500);
    });
});

// New route for deleting a course by ID
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params; // Get the course ID from the URL parameter

  mod
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      if (result === 1) {
        console.log("Course deleted successfully");
        res.sendStatus(200);
      } else {
        console.log("Course not found or not deleted");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error deleting course:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
