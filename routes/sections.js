// routes/sections.js
const express = require("express");
const router = express.Router();
const sectionsController = require("../controllers/sections");
const { checkPermission } = require("../middleware/checkPermission");
const { authentication } = require("../middleware/authentication");
//Endpoint table
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/
router.get(
  "/",
  authentication,
  checkPermission("Sections", 1),
  sectionsController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("Sections", 2),
  sectionsController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("Sections", 3),
  sectionsController.create
);
router.put(
  "/:id",
  authentication,
  checkPermission("Sections", 4),
  sectionsController.update
);
router.delete(
  "/:id",
  checkPermission("Sections", 5),
  sectionsController.delete
);
module.exports = router;
