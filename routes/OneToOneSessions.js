// routes/oneToOneSessions.js
const express = require("express");
const router = express.Router();
const oneToOneSessionsController = require("../controllers/OneToOneSessions");
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
 * /oneToOneSessions:
 *   get:
 *     summary: Get a list of one-to-one sessions.
 *     description: Get a list of one-to-one sessions filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Filter sessions by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: timestamp
 *         description: Filter sessions by timestamp.
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: subject
 *         description: Filter sessions by subject.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort sessions by timestamp or ID.
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
 *         description: List of one-to-one sessions retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,
  checkPermission("OneToOneSessions", 1),
  oneToOneSessionsController.list
);
/**
 * @swagger
 * /oneToOneSessions/{id}:
 *   get:
 *     summary: Get a one-to-one session by ID.
 *     description: Get a one-to-one session by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Session ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Session retrieved successfully.
 *       404:
 *         description: Session not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("OneToOneSessions", 2),
  oneToOneSessionsController.getById
);
/**
 * @swagger
 * /oneToOneSessions:
 *   post:
 *     summary: Create a new one-to-one session.
 *     description: Create a new one-to-one session with the provided timestamp, duration, subject, and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 description: The timestamp of the session.
 *               duration:
 *                 type: integer
 *                 description: The duration of the session in minutes.
 *               subject:
 *                 type: string
 *                 description: The subject of the session.
 *               description:
 *                 type: string
 *                 description: The description of the session.
 *     responses:
 *       201:
 *         description: Session created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("OneToOneSessions", 3),
  oneToOneSessionsController.create
);

/**
 * @swagger
 * /oneToOneSessions/{id}:
 *   put:
 *     summary: Update a one-to-one session by ID.
 *     description: Update an existing one-to-one session with the provided timestamp, duration, subject, and description.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Session ID to update.
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
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 description: The updated timestamp of the session.
 *               duration:
 *                 type: integer
 *                 description: The updated duration of the session in minutes.
 *               subject:
 *                 type: string
 *                 description: The updated subject of the session.
 *               description:
 *                 type: string
 *                 description: The updated description of the session.
 *     responses:
 *       200:
 *         description: Session updated successfully.
 *       404:
 *         description: Session not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("OneToOneSessions", 4),
  oneToOneSessionsController.update
);
/**
 * @swagger
 * /oneToOneSessions/{id}:
 *   delete:
 *     summary: Delete a one-to-one session by ID.
 *     description: Delete an existing one-to-one session by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Session ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Session deleted successfully.
 *       404:
 *         description: Session not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,
  checkPermission("OneToOneSessions", 5),
  oneToOneSessionsController.delete
);

module.exports = router;
