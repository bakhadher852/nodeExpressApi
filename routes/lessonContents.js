// routes/lessonContents.js
const express = require("express");
const router = express.Router();
const lessonContentsController = require("../controllers/lessonContents");
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
 * /lessonContents:
 *   get:
 *     summary: Get a list of lesson contents.
 *     description: Get a list of lesson contents filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: title
 *         description: Filter lesson contents by title.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter lesson contents by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: desc
 *         description: Filter lesson contents by description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: type
 *         description: Filter lesson contents by type.
 *         schema:
 *           type: string
 *       - in: query
 *         name: content
 *         description: Filter lesson contents by content.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort lesson contents by title, ID, or description.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of lesson contents retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,
  checkPermission("LessonContents", 1),
  lessonContentsController.list
);
/**
 * @swagger
 * /lessonContents/{id}:
 *   get:
 *     summary: Get a lesson content by ID.
 *     description: Get a lesson content by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson content ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson content retrieved successfully.
 *       404:
 *         description: Lesson content not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("LessonContents", 2),
  lessonContentsController.getById
);
/**
 * @swagger
 * /lessonContents:
 *   post:
 *     summary: Create a new lesson content.
 *     description: Create a new lesson content with the provided title, type, description, and content.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the lesson content.
 *               type:
 *                 type: string
 *                 description: The type of the lesson content.
 *               desc:
 *                 type: string
 *                 description: The description of the lesson content.
 *               content:
 *                 type: string
 *                 description: The content of the lesson content.
 *     responses:
 *       201:
 *         description: Lesson content created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("LessonContents", 3),
  lessonContentsController.create
);
/**
 * @swagger
 * /lessonContents/{id}:
 *   put:
 *     summary: Update a lesson content by ID.
 *     description: Update an existing lesson content with the provided title, type, description, and content.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson content ID to update.
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
 *                 description: The updated title of the lesson content.
 *               type:
 *                 type: string
 *                 description: The updated type of the lesson content.
 *               desc:
 *                 type: string
 *                 description: The updated description of the lesson content.
 *               content:
 *                 type: string
 *                 description: The updated content of the lesson content.
 *     responses:
 *       200:
 *         description: Lesson content updated successfully.
 *       404:
 *         description: Lesson content not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("LessonContents", 4),
  lessonContentsController.update
);
/**
 * @swagger
 * /lessonContents/{id}:
 *   delete:
 *     summary: Delete a lesson content by ID.
 *     description: Delete an existing lesson content by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson content ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson content deleted successfully.
 *       404:
 *         description: Lesson content not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,
  checkPermission("LessonContents", 5),
  lessonContentsController.delete
);

module.exports = router;
