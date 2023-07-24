const { Client } = require("pg");

const connectionString = "postgres://postgres:12345@localhost:5432/bakhadherdb";

const client = new Client({
  connectionString: connectionString,
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL database");
  } catch (err) {
    console.error("Error connecting to database", err);
  }
}

connect();

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS Course (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    descr VARCHAR(50))
`;

// async function createTable() {
//   try {
//     await client.query(createTableQuery);
//     console.log("Table created successfully");
//   } catch (err) {
//     console.error("Error creating table", err);
//   }
// }

// createTable();

// async function insertData() {
//   try {
//     const insertQuery = `
//     INSERT INTO Course (id, title, descr)
//     VALUES (1, 'Math', 'mathSub'),
//            (2, 'English', 'englishSub');`;

//     await client.query(insertQuery);
//     console.log("Data inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data", err);
//   }
// }

// insertData();

// To fetchData from table
async function fetchData() {
  try {
    const result = await client.query("SELECT * FROM Course");
    console.log("Fetched data:", result.rows);
  } catch (err) {
    console.error("Error fetching data", err);
  }
}

fetchData();

// closeConnection;
// async function closeConnection() {
//   try {
//     await client.end();
//     console.log("Database connection closed");
//   } catch (err) {
//     console.error("Error closing database connection", err);
//   }
// }

// closeConnection();
