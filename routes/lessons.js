// routes/lessons.js
const express = require("express");
const router = express.Router();
const lessonsController = require("../controllers/lessons");
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
 * /lessons:
 *   get:
 *     summary: Get a list of lessons.
 *     description: Get a list of lessons filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: title
 *         description: Filter lessons by title.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter lessons by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: desc
 *         description: Filter lessons by description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort lessons by title, ID, or description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         description: Page number for pagination.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: pageSize
 *         description: Number of items per page.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of lessons retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,
  checkPermission("Lessons", 1),
  lessonsController.list
);
/**
 * @swagger
 * /lessons/{id}:
 *   get:
 *     summary: Get a lesson by ID.
 *     description: Get a lesson by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson retrieved successfully.
 *       404:
 *         description: Lesson not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("Lessons", 2),
  lessonsController.getById
);
/**
 * @swagger
 * /lessons:
 *   post:
 *     summary: Create a new lesson.
 *     description: Create a new lesson with the provided title and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the lesson.
 *               desc:
 *                 type: string
 *                 description: The description of the lesson.
 *     responses:
 *       201:
 *         description: Lesson created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("Lessons", 3),
  lessonsController.create
);
/**
 * @swagger
 * /lessons/{id}:
 *   put:
 *     summary: Update a lesson by ID.
 *     description: Update an existing lesson with the provided title and description.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson ID to update.
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
 *                 description: The updated title of the lesson.
 *               desc:
 *                 type: string
 *                 description: The updated description of the lesson.
 *     responses:
 *       200:
 *         description: Lesson updated successfully.
 *       404:
 *         description: Lesson not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("Lessons", 4),
  lessonsController.update
);
/**
 * @swagger
 * /lessons/{id}:
 *   delete:
 *     summary: Delete a lesson by ID.
 *     description: Delete an existing lesson by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson deleted successfully.
 *       404:
 *         description: Lesson not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,
  checkPermission("Lessons", 5),
  lessonsController.delete
);

module.exports = router;
