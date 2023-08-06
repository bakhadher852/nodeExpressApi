// routes/units.js
const express = require("express");
const router = express.Router();
const unitsMod = require("../models/units");
const unitsController = require("../controllers/units");
// res.send("Router")

router.get("/", unitsController.list);
router.get("/:id", unitsController.getById);
router.post("/add", unitsController.create);
router.delete("/delete/:id", unitsController.delete);
router.put("/update/:id", unitsController.update);

module.exports = router;
