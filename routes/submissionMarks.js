// routes/submissionMarks.js
const express = require("express");
const router = express.Router();
const submissionMarksController = require("../controllers/submissionMarks");
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
 * /submissionMarks:
 *   get:
 *     summary: Get a list of submission marks.
 *     description: Get a list of submission marks filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: mark
 *         description: Filter submission marks by mark.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter submission marks by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: sort
 *         description: Sort submission marks by mark or ID.
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
 *         description: List of submission marks retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,
  checkPermission("SubmissionMarks", 1),
  submissionMarksController.list
);
/**
 * @swagger
 * /submissionMarks/{id}:
 *   get:
 *     summary: Get a submission mark by ID.
 *     description: Get a submission mark by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Submission mark ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Submission mark retrieved successfully.
 *       404:
 *         description: Submission mark not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("SubmissionMarks", 2),
  submissionMarksController.getById
);
/**
 * @swagger
 * /submissionMarks:
 *   post:
 *     summary: Create a new submission mark.
 *     description: Create a new submission mark with the provided mark.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mark:
 *                 type: string
 *                 description: The mark for the submission.
 *     responses:
 *       201:
 *         description: Submission mark created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("SubmissionMarks", 3),
  submissionMarksController.create
);
/**
 * @swagger
 * /submissionMarks/{id}:
 *   put:
 *     summary: Update a submission mark by ID.
 *     description: Update an existing submission mark with the provided mark.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Submission mark ID to update.
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
 *               mark:
 *                 type: string
 *                 description: The updated mark for the submission.
 *     responses:
 *       200:
 *         description: Submission mark updated successfully.
 *       404:
 *         description: Submission mark not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("SubmissionMarks", 4),
  submissionMarksController.update
);
/**
 * @swagger
 * /submissionMarks/{id}:
 *   delete:
 *     summary: Delete a submission mark by ID.
 *     description: Delete an existing submission mark by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Submission mark ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Submission mark deleted successfully.
 *       404:
 *         description: Submission mark not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,
  checkPermission("SubmissionMarks", 5),
  submissionMarksController.delete
);

module.exports = router;
