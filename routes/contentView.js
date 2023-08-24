// routes/contentViews.js
const express = require("express");
const router = express.Router();
// const contentViewsMod = require("../models/contentView");
const contentViewsController = require("../controllers/contentView");
// res.send("Router")

router.get("/", contentViewsController.list);
router.get("/:id", contentViewsController.getById);
router.post("/add", contentViewsController.create);
router.delete("/delete/:id", contentViewsController.delete);
router.put("/update/:id", contentViewsController.update);

module.exports = router;
