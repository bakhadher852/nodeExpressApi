// models/units.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const units = db.define("units", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//If the table not exict it will creat it in DB
// units
//   .sync()
//   .then((result) => {
//     console.log("units talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("units talbel NOT added ", err);
//   });
units.sync();
module.exports = units;
