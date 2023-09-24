// models/submissionMarks.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const submissionMarks = db.define("submissionMarks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mark: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
//If the table not exict it will creat it in DB
// submissionMarks
//   .sync()
//   .then((result) => {
//     console.log("=====>submissionMarks talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("=====>submissionMarks talbel NOT added ", err);
//   });
submissionMarks.sync();
module.exports = submissionMarks;
