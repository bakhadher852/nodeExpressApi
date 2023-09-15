//models/access.js

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

    //permissions (a field to specify the permissions, e.g., read, write, delete)
    permissions: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { timestamps: false }
);
AccessControl.sync();
module.exports = AccessControl;
