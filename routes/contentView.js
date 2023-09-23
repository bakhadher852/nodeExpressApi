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

router.get(
  "/",
  checkPermission("ContentViews", 1),
  contentViewsController.list
);
router.get(
  "/:id",
  checkPermission("ContentViews", 2),
  contentViewsController.getById
);
router.post(
  "/",
  checkPermission("ContentViews", 3),
  contentViewsController.create
);
router.put(
  "/:id",
  checkPermission("ContentViews", 4),
  contentViewsController.update
);
router.delete(
  "/:id",
  checkPermission("ContentViews", 5),
  contentViewsController.delete
);

module.exports = router;
