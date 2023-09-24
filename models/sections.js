// models/sections.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const sections = db.define("sections", {
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
// sections
//   .sync()
//   .then((result) => {
//     console.log("=====>sections talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("=====>sections talbel NOT added ", err);
//   });
sections.sync();
module.exports = sections;
