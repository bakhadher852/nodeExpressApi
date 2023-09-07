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
