// models/users.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const user = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("student", "teacher"), // Define the possible roles
    defaultValue: "student",
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
user.sync();
module.exports = user;
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
