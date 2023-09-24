// routes/lessons.js
const express = require("express");
const router = express.Router();
const lessonsController = require("../controllers/lessons");
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
  checkPermission("Lessons", 1),
  lessonsController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("Lessons", 2),
  lessonsController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("Lessons", 3),
  lessonsController.create
);
router.put(
  "/:id",
  authentication,
  checkPermission("Lessons", 4),
  lessonsController.update
);
router.delete(
  "/:id",
  authentication,
  checkPermission("Lessons", 5),
  lessonsController.delete
);

module.exports = router;
