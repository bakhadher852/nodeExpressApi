// routes/contentViews.js
const express = require("express");
const router = express.Router();
const contentViewsController = require("../controllers/contentView");
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/

router.get("/", contentViewsController.list);
router.get("/:id", contentViewsController.getById);
router.post("/add", contentViewsController.create);
router.delete("/delete/:id", contentViewsController.delete);
router.put("/update/:id", contentViewsController.update);

module.exports = router;
