// routes/lessonContents.js
const express = require("express");
const router = express.Router();
const lessonContentsController = require("../controllers/lessonContents");
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/

router.get("/", lessonContentsController.list);
router.get("/:id", lessonContentsController.getById);
router.post("/add", lessonContentsController.create);
router.put("/update/:id", lessonContentsController.update);
router.delete("/delete/:id", lessonContentsController.delete);

module.exports = router;
