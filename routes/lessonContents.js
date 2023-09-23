// routes/lessonContents.js
const express = require("express");
const router = express.Router();
const lessonContentsController = require("../controllers/lessonContents");
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
  checkPermission("LessonContents", 1),
  lessonContentsController.list
);
router.get(
  "/:id",
  checkPermission("LessonContents", 2),
  lessonContentsController.getById
);
router.post(
  "/",
  checkPermission("LessonContents", 3),
  lessonContentsController.create
);
router.put(
  "/:id",
  checkPermission("LessonContents", 4),
  lessonContentsController.update
);
router.delete(
  "/:id",
  checkPermission("LessonContents", 5),
  lessonContentsController.delete
);

module.exports = router;
