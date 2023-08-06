// routes/sections.js
const express = require("express");
const router = express.Router();
const sectionsMod = require("../models/sections");
const sectionsController = require("../controllers/sections");
// res.send("Router")

router.get("/", sectionsController.list);
router.get("/:id", sectionsController.getById);
router.post("/add", sectionsController.create);
router.delete("/delete/:id", sectionsController.delete);
router.put("/update/:id", sectionsController.update);

module.exports = router;
