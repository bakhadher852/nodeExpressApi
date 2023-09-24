// routes/units.js
const express = require("express");
const router = express.Router();
const unitsController = require("../controllers/units");
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
 * /units:
 *   get:
 *     summary: Get a list of units.
 *     description: Get a list of units filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: title
 *         description: Filter units by title.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter units by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: desc
 *         description: Filter units by description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort units by title, ID, or description.
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
 *         description: List of units retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,

  checkPermission("Units", 1),
  unitsController.list
);

/**
 * @swagger
 * /units/{id}:
 *   get:
 *     summary: Get a unit by ID.
 *     description: Get a unit by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Unit ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Unit retrieved successfully.
 *       404:
 *         description: Unit not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,

  checkPermission("Units", 2),
  unitsController.getById
);
/**
 * @swagger
 * /units:
 *   post:
 *     summary: Create a new unit.
 *     description: Create a new unit with the provided title and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the unit.
 *               desc:
 *                 type: string
 *                 description: The description of the unit.
 *     responses:
 *       201:
 *         description: Unit created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,

  checkPermission("Units", 3),
  unitsController.create
);

/**
 * @swagger
 * /units/{id}:
 *   put:
 *     summary: Update a unit by ID.
 *     description: Update an existing unit with the provided title and description.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Unit ID to update.
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
 *                 description: The updated title of the unit.
 *               desc:
 *                 type: string
 *                 description: The updated description of the unit.
 *     responses:
 *       200:
 *         description: Unit updated successfully.
 *       404:
 *         description: Unit not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,

  checkPermission("Units", 4),
  unitsController.update
);
/**
 * @swagger
 * /units/{id}:
 *   delete:
 *     summary: Delete a unit by ID.
 *     description: Delete an existing unit by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Unit ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Unit deleted successfully.
 *       404:
 *         description: Unit not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  authentication,

  checkPermission("Units", 5),
  unitsController.delete
);
module.exports = router;
