const accessControlMod = require("./models/accessControl");
const endPointMod = require("./models/endPoint");
const roleMod = require("./models/role");
const DataTypes = require("sequelize");
const db = require("./config/database");
const { authentication } = require("./middleware/authentication");

module.exports = {
  endPointMod,
  accessControlMod,
  DataTypes,
  roleMod,
  authentication,
  db,
};
//const {  } = require("../all-imports");
