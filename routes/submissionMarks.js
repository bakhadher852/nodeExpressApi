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

router.get(
  "/",
  checkPermission("SubmissionMarks", 1),
  submissionMarksController.list
);
router.get(
  "/:id",
  checkPermission("SubmissionMarks", 2),
  submissionMarksController.getById
);
router.post(
  "/",
  checkPermission("SubmissionMarks", 3),
  submissionMarksController.create
);
router.put(
  "/:id",
  checkPermission("SubmissionMarks", 4),
  submissionMarksController.update
);
router.delete(
  "/:id",
  checkPermission("SubmissionMarks", 5),
  submissionMarksController.delete
);

module.exports = router;
