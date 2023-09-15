//models/endPoint.js

const DataTypes = require("sequelize");
const db = require("../config/database");
const Endpoint = db.define("Endpoint", {
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
  // Add any other properties you need for your endpoints
});
Endpoint.sync();
module.exports = Endpoint;
