const { Client } = require("pg");

const connectionString = "postgres://postgres:12345@localhost:5432/bakhadherdb";

const client = new Client({
  connectionString: connectionString,
});

async function connect() {
  try {
    await client.connect();
    console.log("=====>Connected to PostgreSQL database");
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
//     console.log("=====>Table created successfully");
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
//     console.log("=====>Data inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data", err);
//   }
// }

// insertData();

// To fetchData from table
async function fetchData() {
  try {
    const result = await client.query("SELECT * FROM Course");
    console.log("=====>Fetched data:", result.rows);
  } catch (err) {
    console.error("Error fetching data", err);
  }
}

fetchData();

// closeConnection;
// async function closeConnection() {
//   try {
//     await client.end();
//     console.log("=====>Database connection closed");
//   } catch (err) {
//     console.error("Error closing database connection", err);
//   }
// }

// closeConnection();

// CURD operations:

// Create (Insert) Operation:

async function insertData() {
  try {
    const insertQuery = `
    INSERT INTO Course (id, title, descr)
    VALUES (Course.length=1, 'Math', 'mathSub'),
           (Course.length=1, 'English', 'englishSub');`;

    await client.query(insertQuery);
    console.log("=====>Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data", err);
  }
}
insertData();

// Read (Retrieve) Operation:
async function fetchData() {
  try {
    const result = await client.query("SELECT * FROM Course");
    console.log("=====>Fetched data:", result.rows);
  } catch (err) {
    console.error("Error fetching data", err);
  }
}

fetchData();

async function getCourseById(id) {
  try {
    const selectQuery = `
        SELECT * FROM Course
        WHERE id = 1;
      `;

    const result = await client.query(selectQuery, [id]);
    if (result.rows.length === 0) {
      console.log("=====>Course not found");
    } else {
      console.log("=====>Course with ID", id, ":", result.rows[0]);
    }
  } catch (err) {
    console.error("Error fetching course", err);
  }
}
// Update Operation:
async function updateCourse(id, title, descr) {
  try {
    const updateQuery = `
        UPDATE Course
        SET title = Arabic, descr = Arabic course
        WHERE id = 1
      `;

    await client.query(updateQuery, [title, description, id]);
    console.log("=====>Course updated successfully");
  } catch (err) {
    console.error("Error updating course", err);
  }
}
// Delete Operation:
async function deleteCourse(id) {
  try {
    const deleteQuery = `
        DELETE FROM Course
        WHERE id = 1;
      `;

    await client.query(deleteQuery, [id]);
    console.log("=====>Course deleted successfully");
  } catch (err) {
    console.error("Error deleting course", err);
  }
}

// Assume we have already connected to the database and client is available.

// Create a new course
insertData();

// Get all courses
fetchData();

// Get a specific course by ID
getCourseById(1);

// Update a course
updateCourse(1, "Math", "mathSub");

// Delete a course
deleteCourse(1);
