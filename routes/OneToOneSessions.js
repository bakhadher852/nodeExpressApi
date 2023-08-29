// routes/oneToOneSessions.js
const express = require("express");
const router = express.Router();
const oneToOneSessionsMod = require("../models/oneToOneSessions");
const oneToOneSessionsController = require("../controllers/OneToOneSessions");
// res.send("Router")

router.get("/", oneToOneSessionsController.list);
router.get("/:id", oneToOneSessionsController.getById);
router.post("/add", oneToOneSessionsController.create);
router.delete("/delete/:id", oneToOneSessionsController.delete);
router.put("/update/:id", oneToOneSessionsController.update);

module.exports = router;
