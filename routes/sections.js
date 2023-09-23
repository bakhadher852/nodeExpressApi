// routes/sections.js
const express = require("express");
const router = express.Router();
const sectionsController = require("../controllers/sections");
//Endpoint table
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/
router.get("/", sectionsController.list);
router.get("/:id", sectionsController.getById);
router.post("/", sectionsController.create);
router.delete("/:id", sectionsController.delete);
router.put("/:id", sectionsController.update);

module.exports = router;
