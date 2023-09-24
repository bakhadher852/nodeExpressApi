// config/database.js

const { Sequelize } = require("sequelize");
//add the IP adress for postgrest in docker
const sequelize = new Sequelize("postgres", "postgres", "12345", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

//check connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "=====>Connection to postgreSQL has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the postgreSQL database:", error);
  });

//this code to create database if not exist

async function createDatabase() {
  try {
    await sequelize.sync({ alter: true });
    console.log("=====>Database created successfully!");
  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    // sequelize.close(); // Close the connection when done.
  }
}

createDatabase();

module.exports = sequelize;

//For docker PostgreSQL DB
// module.exports={
//   booksPostgresURI:`postgres://postgres:postgres@172.17.0.2:5432/postgres`
// }
// const dbconfig = require("../config/databaseconfig");

// //Creating DB connection
// const sequelize = new Sequelize(dbconfig.booksPostgresURI, {
//   dialect: "postgres",
// });
