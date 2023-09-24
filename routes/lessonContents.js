// routes/lessonContents.js
const express = require("express");
const router = express.Router();
const lessonContentsController = require("../controllers/lessonContents");
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
  checkPermission("LessonContents", 1),
  lessonContentsController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("LessonContents", 2),
  lessonContentsController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("LessonContents", 3),
  lessonContentsController.create
);
router.put(
  "/:id",
  authentication,
  checkPermission("LessonContents", 4),
  lessonContentsController.update
);
router.delete(
  "/:id",
  authentication,
  checkPermission("LessonContents", 5),
  lessonContentsController.delete
);

module.exports = router;
