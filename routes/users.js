// routes/users.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", userController.listUsers);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.delete("/delete/:id", userController.deleteUser);
// router.put("/update/:id", userController.update);
module.exports = router;