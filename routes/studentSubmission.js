// routes/studentSubmission.js
const express = require("express");
const router = express.Router();
const studentSubmissionController = require("../controllers/studentSubmission");
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/

router.get("/", studentSubmissionController.list);
router.get("/:id", studentSubmissionController.getById);
router.post("/add", studentSubmissionController.create);
router.put("/update/:id", studentSubmissionController.update);
router.delete("/delete/:id", studentSubmissionController.delete);

module.exports = router;
