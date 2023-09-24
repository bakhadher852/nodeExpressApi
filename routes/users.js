// routes/users.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users.
 *     description: Get a list of all users.
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get("/", userController.listUsers);
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user.
 *     description: Log in a user with username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful.
 *       400:
 *         description: Username does not exist.
 *       401:
 *         description: Password is incorrect.
 *       422:
 *         description: Invalid request body.
 *       500:
 *         description: Internal server error.
 */
router.post("/login", userController.login);
/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Sign up user.
 *     description: Sign up a new user with username, email, password, and roleId.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               roleId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       400:
 *         description: Username or email already exists.
 *       422:
 *         description: Invalid email or email already exists.
 *       500:
 *         description: Signup error.
 */
router.post("/signup", userController.signup);
/**
 * @swagger
 * /users/reset-password:
 *   post:
 *     summary: Request password reset.
 *     description: Request a password reset for a user by email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset email sent successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Error sending password reset email.
 */
router.post("/reset-password", userController.resetPassword);
/**
 * @swagger
 * /users/reset-password/{resetToken}:
 *   post:
 *     summary: Reset password.
 *     description: Reset the password for a user with a valid reset token.
 *     parameters:
 *       - in: path
 *         name: resetToken
 *         description: Reset token received in the password reset email.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset successful.
 *       404:
 *         description: Invalid or expired reset token.
 *       500:
 *         description: Error initiating password reset.
 */
router.post("/reset-password/:resetToken", userController.resetToken);
/**
 * @swagger
 * /users/update/{id}:
 *   put:
 *     summary: Update user.
 *     description: Update an existing user's username, email, or password.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to update.
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
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       404:
 *         description: User not found.
 *       422:
 *         description: Email or username already exists.
 *       500:
 *         description: Internal server error.
 */
router.put("/update/:id", userController.updateUser);
/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Delete user.
 *     description: Delete an existing user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */

router.delete("/delete/:id", userController.deleteUser);
module.exports = router;
