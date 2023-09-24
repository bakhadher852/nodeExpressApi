// models/lessons.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const lessons = db.define("lessons", {
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
// lessons
//   .sync()
//   .then((result) => {
//     console.log("=====>lessons talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("=====>lessons talbel NOT added ", err);
//   });
lessons.sync();
module.exports = lessons;
