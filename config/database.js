// config/database.js

const { Sequelize } = require("sequelize");

// Add the correct connection URL for your PostgreSQL database
const sequelize = new Sequelize(
  "postgres://default:WKP5w0hTzDdI@ep-lingering-moon-39015399-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb",
  {
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

// Check the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to PostgreSQL has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the PostgreSQL database:", error.stack);
  });

// Function to create the database if it doesn't exist
async function createDatabase() {
  try {
    await sequelize.sync(); // Use this for initial database creation.
    console.log("Database created successfully!");
  } catch (error) {
    console.error("Error creating database:", error);
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
