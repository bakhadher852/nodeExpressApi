// routes/users.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", userController.listUsers);
router.post("/login", userController.login);
router.post("/signup", userController.signup);

router.post("/reset-password", userController.resetPassword);
router.post("/reset-password/:resetToken", userController.resetToken);

router.delete("/delete/:id", userController.deleteUser);
router.put("/update/:id", userController.updateUser);
module.exports = router;
