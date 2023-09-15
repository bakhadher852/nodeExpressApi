//models/accessControl.js
// const endPointMod = require("../models/endPoint");
// const roleMod = require("../models/role");
const DataTypes = require("sequelize");
const db = require("../config/database");

const AccessControl = db.define(
  "AccessControl",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EndpointId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);
// roleMod.belongsToMany(endPointMod, { through: AccessControl });
// endPointMod.belongsToMany(roleMod, { through: AccessControl });
AccessControl.sync({ alter: true });
module.exports = AccessControl;
