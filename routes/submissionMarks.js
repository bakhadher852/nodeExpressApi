// routes/submissionMarks.js
const express = require("express");
const router = express.Router();
const submissionMarksController = require("../controllers/submissionMarks");
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/

router.get("/", submissionMarksController.list);
router.get("/:id", submissionMarksController.getById);
router.post("/add", submissionMarksController.create);
router.put("/update/:id", submissionMarksController.update);
router.delete("/delete/:id", submissionMarksController.delete);

module.exports = router;
