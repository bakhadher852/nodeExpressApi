// routes/oneToOneSessions.js
const express = require("express");
const router = express.Router();
const oneToOneSessionsController = require("../controllers/OneToOneSessions");
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/

router.get("/", oneToOneSessionsController.list);
router.get("/:id", oneToOneSessionsController.getById);
router.post("/add", oneToOneSessionsController.create);
router.put("/update/:id", oneToOneSessionsController.update);
router.delete("/delete/:id", oneToOneSessionsController.delete);

module.exports = router;
