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
/**
 * @swagger
 * /contentView:
 *   get:
 *     summary: Get a list of content views.
 *     description: Get a list of content views filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: title
 *         description: Filter content views by title.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter content views by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: desc
 *         description: Filter content views by description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort content views by title, ID, or description.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of content views retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,
  checkPermission("ContentViews", 1),
  contentViewsController.list
);

/**
 * @swagger
 * /contentView/{id}:
 *   get:
 *     summary: Get a content view by ID.
 *     description: Get a content view by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Content view ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Content view retrieved successfully.
 *       404:
 *         description: Content view not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("ContentViews", 2),
  contentViewsController.getById
);

/**
 * @swagger
 * /contentView:
 *   post:
 *     summary: Create a new content view.
 *     description: Create a new content view with the provided title and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the content view.
 *               desc:
 *                 type: string
 *                 description: The description of the content view.
 *     responses:
 *       201:
 *         description: Content view created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("ContentViews", 3),
  contentViewsController.create
);

/**
 * @swagger
 * /contentView/{id}:
 *   put:
 *     summary: Update a content view by ID.
 *     description: Update an existing content view with the provided title and description.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Content view ID to update.
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the content view.
 *               desc:
 *                 type: string
 *                 description: The updated description of the content view.
 *     responses:
 *       200:
 *         description: Content view updated successfully.
 *       404:
 *         description: Content view not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("ContentViews", 4),
  contentViewsController.update
);
/**
 * @swagger
 * /contentView/{id}:
 *   delete:
 *     summary: Delete a content view by ID.
 *     description: Delete an existing content view by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Content view ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Content view deleted successfully.
 *       404:
 *         description: Content view not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,
  checkPermission("ContentViews", 5),
  contentViewsController.delete
);

module.exports = router;
