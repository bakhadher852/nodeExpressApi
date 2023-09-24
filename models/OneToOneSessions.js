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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//If the table not exict it will creat it in DB
// oneToOneSessions
//   .sync()
//   .then((result) => {
//     console.log("=====>oneToOneSessions talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("=====>oneToOneSessions talbel NOT added ", err);
//   });
oneToOneSessions.sync();
module.exports = oneToOneSessions;

// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
