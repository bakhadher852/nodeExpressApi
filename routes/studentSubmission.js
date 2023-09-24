// routes/studentSubmission.js
const express = require("express");
const router = express.Router();
const studentSubmissionController = require("../controllers/studentSubmission");
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
 * /studentSubmission:
 *   get:
 *     summary: Get a list of student submissions.
 *     description: Get a list of student submissions filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: content
 *         description: Filter student submissions by content.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter student submissions by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: desc
 *         description: Filter student submissions by description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort student submissions by content, ID, or description.
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
 *         description: List of student submissions retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,
  checkPermission("StudentSubmissions", 1),
  studentSubmissionController.list
);
/**
 * @swagger
 * /studentSubmission/{id}:
 *   get:
 *     summary: Get a student submission by ID.
 *     description: Get a student submission by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Student submission ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student submission retrieved successfully.
 *       404:
 *         description: Student submission not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("StudentSubmissions", 2),
  studentSubmissionController.getById
);
/**
 * @swagger
 * /studentSubmission:
 *   post:
 *     summary: Create a new student submission.
 *     description: Create a new student submission with the provided content.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the student submission.
 *     responses:
 *       201:
 *         description: Student submission created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("StudentSubmissions", 3),
  studentSubmissionController.create
);
/**
 * @swagger
 * /studentSubmission/{id}:
 *   put:
 *     summary: Update a student submission by ID.
 *     description: Update an existing student submission with the provided content.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Student submission ID to update.
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
 *               content:
 *                 type: string
 *                 description: The updated content of the student submission.
 *     responses:
 *       200:
 *         description: Student submission updated successfully.
 *       404:
 *         description: Student submission not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("StudentSubmissions", 4),
  studentSubmissionController.update
);
/**
 * @swagger
 * /studentSubmission/{id}:
 *   delete:
 *     summary: Delete a student submission by ID.
 *     description: Delete an existing student submission by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Student submission ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student submission deleted successfully.
 *       404:
 *         description: Student submission not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,
  checkPermission("StudentSubmissions", 5),
  studentSubmissionController.delete
);

module.exports = router;
