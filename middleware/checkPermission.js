//middleware/checkPermission.js
const AccessControl = require("../models/accessControl");

const UsersMod = require("../models/users");

exports.checkPermission = (modelName, endPointId) => {
  return async (req, res, next) => {
    const verifiedtoken = req.verifiedtoken;

    const userData = await UsersMod.findByPk(verifiedtoken.id);
    const userRole = userData.roleId;

    try {
      const access = await AccessControl.findAll({
        where: {
          RoleId: userRole,
          Model: modelName,
          EndpointId: endPointId,
          allowed: true,
        },
      });

      if (access.length == 0) {
        return res.status(403).json({ message: "Access denied" });
      }

      next();
    } catch (error) {
      console.error("Error in checkPermission middleware:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};
