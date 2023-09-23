// routes/lessons.js
const express = require("express");
const router = express.Router();
const lessonsController = require("../controllers/lessons");
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/

router.get("/", checkPermission("Lessons", 1), lessonsController.list);
router.get("/:id", checkPermission("Lessons", 2), lessonsController.getById);
router.post("/", checkPermission("Lessons", 3), lessonsController.create);
router.put("/:id", checkPermission("Lessons", 4), lessonsController.update);
router.delete("/:id", checkPermission("Lessons", 5), lessonsController.delete);

module.exports = router;
