// routes/sections.js
const express = require("express");
const router = express.Router();
const sectionsController = require("../controllers/sections");
const { checkPermission } = require("../middleware/checkPermission");
const { authentication } = require("../middleware/authentication");
//Endpoint table
/*
id:      EndpointName:
1        getAll
2        Get
3        Create
4        Update
5        Delete
*/ /**
 * @swagger
 * /sections:
 *   get:
 *     summary: Get a list of sections.
 *     description: Get a list of sections filtered and sorted by query parameters.
 *     parameters:
 *       - in: query
 *         name: title
 *         description: Filter sections by title.
 *         schema:
 *           type: string
 *       - in: query
 *         name: id
 *         description: Filter sections by ID.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: desc
 *         description: Filter sections by description.
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         description: Sort sections by title, ID, or description.
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
 *         description: List of sections retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/",
  authentication,
  checkPermission("Sections", 1),
  sectionsController.list
);
/**
 * @swagger
 * /sections/{id}:
 *   get:
 *     summary: Get a section by ID.
 *     description: Get a section by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Section ID to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Section retrieved successfully.
 *       404:
 *         description: Section not found.
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/:id",
  authentication,
  checkPermission("Sections", 2),
  sectionsController.getById
);
/**
 * @swagger
 * /sections:
 *   post:
 *     summary: Create a new section.
 *     description: Create a new section with the provided title and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the section.
 *               desc:
 *                 type: string
 *                 description: The description of the section.
 *     responses:
 *       201:
 *         description: Section created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post(
  "/",
  authentication,
  checkPermission("Sections", 3),
  sectionsController.create
);
/**
 * @swagger
 * /sections/{id}:
 *   put:
 *     summary: Update a section by ID.
 *     description: Update an existing section with the provided title and description.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Section ID to update.
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
 *                 description: The updated title of the section.
 *               desc:
 *                 type: string
 *                 description: The updated description of the section.
 *     responses:
 *       200:
 *         description: Section updated successfully.
 *       404:
 *         description: Section not found or not updated.
 *       500:
 *         description: Internal server error.
 */
router.put(
  "/:id",
  authentication,
  checkPermission("Sections", 4),
  sectionsController.update
);
/**
 * @swagger
 * /sections/{id}:
 *   delete:
 *     summary: Delete a section by ID.
 *     description: Delete an existing section by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Section ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Section deleted successfully.
 *       404:
 *         description: Section not found or not deleted.
 *       500:
 *         description: Internal server error.
 */
router.delete(
  "/:id",
  checkPermission("Sections", 5),
  sectionsController.delete
);
module.exports = router;
