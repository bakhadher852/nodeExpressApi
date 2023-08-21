// models/studentSubmission.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const studentSubmission = db.define("studentSubmission", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});
//If the table not exict it will creat it in DB
// studentSubmission
//   .sync()
//   .then((result) => {
//     console.log("studentSubmission talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("studentSubmission talbel NOT added ", err);
//   });
studentSubmission.sync();
module.exports = studentSubmission;
