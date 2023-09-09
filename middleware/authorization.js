// middleware/authorization.js
const jwt = require("jsonwebtoken");
const UsersMod = require("../models/users");

//----------------------------------------authorization----------------------------------------------------*//

exports.authorization = async function (req, res, next) {
  try {
    const verifiedtoken = req.verifiedtoken;

    const userData = await UsersMod.findByPk(verifiedtoken.id);
    const userRole = userData.role;

    let tokenRole = verifiedtoken.role;

    if (tokenRole !== userRole) {
      return res.status(401).send({
        message:
          "Access DeniedYou dont have correct privilege to perform this operation",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({
      message: "Something is wrong In authorization",
    });
  }
};
