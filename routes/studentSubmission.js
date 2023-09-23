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

router.get(
  "/",
  checkPermission("StudentSubmissions", 1),
  studentSubmissionController.list
);
router.get(
  "/:id",
  checkPermission("StudentSubmissions", 2),
  studentSubmissionController.getById
);
router.post(
  "/",
  checkPermission("StudentSubmissions", 3),
  studentSubmissionController.create
);
router.put(
  "/:id",
  checkPermission("StudentSubmissions", 4),
  studentSubmissionController.update
);
router.delete(
  "/:id",
  checkPermission("StudentSubmissions", 5),
  studentSubmissionController.delete
);

module.exports = router;
