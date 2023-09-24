// routes/submissionMarks.js
const express = require("express");
const router = express.Router();
const submissionMarksController = require("../controllers/submissionMarks");
const { checkPermission } = require("../middleware/checkPermission");
const { authentication } = require("../middleware/authentication");
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
  authentication,
  checkPermission("SubmissionMarks", 1),
  submissionMarksController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("SubmissionMarks", 2),
  submissionMarksController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("SubmissionMarks", 3),
  submissionMarksController.create
);
router.put(
  "/:id",
  authentication,
  checkPermission("SubmissionMarks", 4),
  submissionMarksController.update
);
router.delete(
  "/:id",
  authentication,
  checkPermission("SubmissionMarks", 5),
  submissionMarksController.delete
);

module.exports = router;
