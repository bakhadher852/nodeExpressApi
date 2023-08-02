// router/courseRouter
const express = require("express");
const courseController = require("./controllers/courseController");
var router = express.Router();

// Routes
router.get("/courses", courseController.list);
router.post("/courses", courseController.create);
router.put("/courses/:id", courseController.update);
router.delete("/courses/:id", courseController.delete);

module.exports = router;
