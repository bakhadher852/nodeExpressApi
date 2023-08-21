// routes/studentSubmission.js
const express = require("express");
const router = express.Router();
const studentSubmissionMod = require("../models/studentSubmission");
const studentSubmissionController = require("../controllers/studentSubmission");
// res.send("Router")

router.get("/", studentSubmissionController.list);
router.get("/:id", studentSubmissionController.getById);
router.post("/add", studentSubmissionController.create);
router.delete("/delete/:id", studentSubmissionController.delete);
router.put("/update/:id", studentSubmissionController.update);

module.exports = router;
