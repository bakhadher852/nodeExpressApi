// routes/lessonContents.js
const express = require("express");
const router = express.Router();
const lessonContentsMod = require("../models/lessonContents");
const lessonContentsController = require("../controllers/lessonContents");
// res.send("Router")

router.get("/", lessonContentsController.list);
router.get("/:id", lessonContentsController.getById);
router.post("/add", lessonContentsController.create);
router.delete("/delete/:id", lessonContentsController.delete);
router.put("/update/:id", lessonContentsController.update);

module.exports = router;
