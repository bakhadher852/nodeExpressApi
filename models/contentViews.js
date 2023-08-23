// models/contentViews.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const contentViews = db.define("contentViews", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  timestamp: {
    type: DataTypes.timestamp,
    allowNull: false,
  },
});
//If the table not exict it will creat it in DB
// contentViews
//   .sync()
//   .then((result) => {
//     console.log("contentViews talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("contentViews talbel NOT added ", err);
//   });
contentViews.sync();
module.exports = contentViews;
