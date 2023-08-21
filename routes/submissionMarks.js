// routes/submissionMarks.js
const express = require("express");
const router = express.Router();
const submissionMarksMod = require("../models/submissionMarks");
const submissionMarksController = require("../controllers/submissionMarks");
// res.send("Router")

router.get("/", submissionMarksController.list);
router.get("/:id", submissionMarksController.getById);
router.post("/add", submissionMarksController.create);
router.delete("/delete/:id", submissionMarksController.delete);
router.put("/update/:id", submissionMarksController.update);

module.exports = router;
