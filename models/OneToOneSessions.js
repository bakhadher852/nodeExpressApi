// models/oneToOneSessions.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const oneToOneSessions = db.define("oneToOneSessions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  duration: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//If the table not exict it will creat it in DB
// oneToOneSessions
//   .sync()
//   .then((result) => {
//     console.log("oneToOneSessions talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("oneToOneSessions talbel NOT added ", err);
//   });
oneToOneSessions.sync();
module.exports = oneToOneSessions;
