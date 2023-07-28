// config/database.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bakhadherdb", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});
//check connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to postgreSQL has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the postgreSQL database:", error);
  });

module.exports = sequelize;
