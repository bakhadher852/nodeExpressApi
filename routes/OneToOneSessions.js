// routes/oneToOneSessions.js
const express = require("express");
const router = express.Router();
const oneToOneSessionsController = require("../controllers/OneToOneSessions");
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
  checkPermission("OneToOneSessions", 1),
  oneToOneSessionsController.list
);
router.get(
  "/:id",
  checkPermission("OneToOneSessions", 2),
  oneToOneSessionsController.getById
);
router.post(
  "/",
  checkPermission("OneToOneSessions", 3),
  oneToOneSessionsController.create
);
router.put(
  "/:id",
  checkPermission("OneToOneSessions", 4),
  oneToOneSessionsController.update
);
router.delete(
  "/:id",
  checkPermission("OneToOneSessions", 5),
  oneToOneSessionsController.delete
);

module.exports = router;
