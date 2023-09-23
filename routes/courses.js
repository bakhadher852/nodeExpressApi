// routes/courses.js
const express = require("express");
const router = express.Router();
const { authentication } = require("../middleware/authentication");
const { checkPermission } = require("../middleware/checkPermission");
const courseController = require("../controllers/courses");

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
  checkPermission("Courses", 1),
  courseController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("Courses", 2),
  courseController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("Courses", 3),
  courseController.create
);
router.delete(
  "/:id",
  authentication,
  checkPermission("Courses", 5),
  courseController.delete
);
router.put(
  "/:id",
  authentication,
  checkPermission("Courses", 4),
  courseController.update
);

module.exports = router;
