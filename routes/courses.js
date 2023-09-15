// routes/courses.js
const express = require("express");
const router = express.Router();
const CoursesMod = require("../models/courses");
const courseController = require("../controllers/courses");
// res.send("Router")

router.get("/", courseController.list);
router.get("/:id", courseController.getById);
router.post("/add", courseController.create);
router.delete("/delete/:id", courseController.delete);
router.put("/update/:id", courseController.update);

module.exports = router;
