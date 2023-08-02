// models/courses.js
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
//If the table not exict it will creat it in DB
// course
//   .sync()
//   .then((result) => {
//     console.log("courses talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("courses talbel NOT added ", err);
//   });

module.exports = course;
