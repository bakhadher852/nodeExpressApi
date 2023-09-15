// models/Role.js

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

Role.sync();

module.exports = Role;
