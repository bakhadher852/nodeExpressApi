// routes/courses.js
const express = require("express");
const router = express.Router();
const { authentication } = require("../middleware/authentication");
const { checkPermission } = require("../middleware/checkPermission");
const courseController = require("../controllers/courses");
/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get a list of courses.
 *     description: Retrieve a list of all courses.
 *     parameters:
 *       - in: query
 *         name: title
 *         description: Filter courses by title.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter courses by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: desc
 *         description: Filter courses by description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort courses by title or ID.
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
 *         description: A list of courses.
 *       500:
 *         description: Internal server error.
 */
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
  checkPermission("Courses", 1),
  courseController.list
);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course by ID.
 *     description: Retrieve a course by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Course ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested course.
 *       404:
 *         description: Course not found.
 *       400:
 *         description: Bad request.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("Courses", 2),
  courseController.getById
);
/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course.
 *     description: Create a new course with the provided title and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the course.
 *               desc:
 *                 type: string
 *                 description: The description of the course.
 *     responses:
 *       201:
 *         description: Course created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("Courses", 3),
  courseController.create
);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course by ID.
 *     description: Update an existing course with the provided title and description.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Course ID to update.
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
 *                 description: The updated title of the course.
 *               desc:
 *                 type: string
 *                 description: The updated description of the course.
 *     responses:
 *       200:
 *         description: Course updated successfully.
 *       404:
 *         description: Course not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("Courses", 4),
  courseController.update
);
/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course by ID.
 *     description: Delete an existing course by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Course ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course deleted successfully.
 *       404:
 *         description: Course not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,
  checkPermission("Courses", 5),
  courseController.delete
);
module.exports = router;
