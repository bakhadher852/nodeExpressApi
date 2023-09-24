// routes/contentViews.js
const express = require("express");
const router = express.Router();
const contentViewsController = require("../controllers/contentView");
const { checkPermission } = require("../middleware/checkPermission");
const { authentication } = require("../middleware/authentication");
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
  checkPermission("ContentViews", 1),
  contentViewsController.list
);
router.get(
  "/:id",
  authentication,
  checkPermission("ContentViews", 2),
  contentViewsController.getById
);
router.post(
  "/",
  authentication,
  checkPermission("ContentViews", 3),
  contentViewsController.create
);
router.put(
  "/:id",
  authentication,
  checkPermission("ContentViews", 4),
  contentViewsController.update
);
router.delete(
  "/:id",
  authentication,
  checkPermission("ContentViews", 5),
  contentViewsController.delete
);

module.exports = router;
