// models/lessonContents.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const lessonContents = db.define("lessonContents", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});
//If the table not exict it will creat it in DB
// lessonContents
//   .sync()
//   .then((result) => {
//     console.log("lessonContents talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("lessonContents talbel NOT added ", err);
//   });
lessonContents.sync();
module.exports = lessonContents;
