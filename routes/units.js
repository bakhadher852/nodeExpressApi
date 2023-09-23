// routes/units.js
const express = require("express");
const router = express.Router();
const unitsController = require("../controllers/units");
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/

router.get("/", checkPermission("Units", 1), unitsController.list);
router.get("/:id", checkPermission("Units", 2), unitsController.getById);
router.post("/", checkPermission("Units", 3), unitsController.create);
router.put("/:id", checkPermission("Units", 4), unitsController.update);
router.delete("/:id", checkPermission("Units", 5), unitsController.delete);
module.exports = router;
