// routes/oneToOneSessions.js
const express = require("express");
const router = express.Router();
const oneToOneSessionsController = require("../controllers/OneToOneSessions");
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
  checkPermission("OneToOneSessions", 1),
  oneToOneSessionsController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("OneToOneSessions", 2),
  oneToOneSessionsController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("OneToOneSessions", 3),
  oneToOneSessionsController.create
);
router.put(
  "/:id",
  authentication,
  checkPermission("OneToOneSessions", 4),
  oneToOneSessionsController.update
);
router.delete(
  "/:id",
  authentication,
  checkPermission("OneToOneSessions", 5),
  oneToOneSessionsController.delete
);

module.exports = router;
