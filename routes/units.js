// routes/units.js
const express = require("express");
const router = express.Router();
const unitsController = require("../controllers/units");
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

  checkPermission("Units", 1),
  unitsController.list
);
router.get(
  "/:id",
  authentication,

  checkPermission("Units", 2),
  unitsController.getById
);
router.post(
  "/",
  authentication,

  checkPermission("Units", 3),
  unitsController.create
);
router.put(
  "/:id",
  authentication,

  checkPermission("Units", 4),
  unitsController.update
);
router.delete(
  "/:id",
  authentication,

  checkPermission("Units", 5),
  unitsController.delete
);
module.exports = router;
