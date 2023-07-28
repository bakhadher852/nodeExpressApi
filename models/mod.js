// models/mod.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const course = db.define("courses", {
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
// course
//   .sync()
//   .then((result) => {
//     console.log("courses talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("courses talbel NOT added ", err);
//   });

module.exports = course;
