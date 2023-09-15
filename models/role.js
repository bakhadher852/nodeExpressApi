// models/Role.js
// const endPointMod = require("../models/endPoint");
// const accessControlMod = require("../models/accessControl");
const DataTypes = require("sequelize");
const db = require("../config/database");
const Role = db.define("Role", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Role.belongsToMany(endPointMod, { through: accessControlMod });
// endPointMod.belongsToMany(Role, { through: accessControlMod });
Role.sync();

module.exports = Role;
