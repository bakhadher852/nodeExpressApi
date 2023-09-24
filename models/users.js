// models/users.js

const DataTypes = require("sequelize");
const db = require("../config/database");
const roleMod = require("../models/role");
const user = db.define("users", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
  resetToken: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

//If the table not exict it will creat it in DB
// course
//   .sync()
//   .then((result) => {
//     console.log("=====>courses talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("=====>courses talbel NOT added ", err);
//   });
user.sync({ alter: true });
user.belongsTo(roleMod, { foreignKey: "roleId" });
module.exports = user;
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
