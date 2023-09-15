// Middleware for authorization
function authorize(role, endpointString, accessLevel) {
  return async (req, res, next) => {
    const user = req.user; // Assuming you have user data stored in req.user
    const permission = await Permission.findOne({
      where: {
        roleId: user.roleId,
        endpointId: endpoint.id,
        accessLevel,
      },
    });

    if (!permission) {
      return res.status(403).json({ error: "Access denied" });
    }

    next();
  };
}
//----------------------------
const express = require("express");
const router = express.Router();
const { authorize } = require("./authorizationMiddleware");

// Read-only access for students
router.get("/courses", authorize("student", "/courses", "read"), (req, res) => {
  // Your course retrieval logic here
});

// Full access for admins
router.post("/courses", authorize("admin", "/courses", "write"), (req, res) => {
  // Your course creation logic here
});

router.put(
  "/courses/:id",
  authorize("admin", "/courses", "write"),
  (req, res) => {
    // Your course update logic here
  }
);

router.delete(
  "/courses/:id",
  authorize("admin", "/courses", "delete"),
  (req, res) => {
    // Your course deletion logic here
  }
);

module.exports = router;
