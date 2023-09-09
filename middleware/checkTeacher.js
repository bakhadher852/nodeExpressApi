// middleware/checkTeacher.js
const UsersMod = require("../models/users");
const db = require("../config/database");
exports.TeacherAccessOnly = async function (req, res, next) {
  try {
    const verifiedtoken = req.verifiedtoken;
    const user = await UsersMod.findOne({
      where: { username: verifiedtoken.username },
    });

    if (user.role !== "teacher") {
      return res.status(401).send({
        message:
          "Access Denied. You must be a teacher to perform this operation",
      });
    }

    next();
  } catch (error) {
    res.status(401).send({
      message:
        "Something is wrong with your access role. Please check back again after some time",
    });
  }
};
