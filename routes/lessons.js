// routes/lessons.js
const express = require("express");
const router = express.Router();
const lessonsMod = require("../models/lessons");
const lessonsController = require("../controllers/lessons");
// res.send("Router")

router.get("/", lessonsController.list);
router.get("/:id", lessonsController.getById);
router.post("/add", lessonsController.create);
router.delete("/delete/:id", lessonsController.delete);
router.put("/update/:id", lessonsController.update);

module.exports = router;
