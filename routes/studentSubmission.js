// routes/studentSubmission.js
const express = require("express");
const router = express.Router();
const studentSubmissionController = require("../controllers/studentSubmission");
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
  checkPermission("StudentSubmissions", 1),
  studentSubmissionController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("StudentSubmissions", 2),
  studentSubmissionController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("StudentSubmissions", 3),
  studentSubmissionController.create
);
router.put(
  "/:id",
  authentication,
  checkPermission("StudentSubmissions", 4),
  studentSubmissionController.update
);
router.delete(
  "/:id",
  authentication,
  checkPermission("StudentSubmissions", 5),
  studentSubmissionController.delete
);

module.exports = router;
