const db = require("../config/database"); // Replace with your database configuration
const Endpoint = require("../models/endPoint"); // Import the Endpoint model

// Define seed data
const endpointSeedData = [
  {
    name: "getAll",
  },
  {
    name: "Get",
  },
  {
    name: "Create",
  },
  {
    name: "Update",
  },
  {
    name: "Delete",
  },
];

// Function to seed data into the Endpoint table
const seedEndpointTable = async () => {
  try {
    // Synchronize the model with the database (if needed)
    await Endpoint.sync();

    // Insert seed data into the table
    await Endpoint.bulkCreate(endpointSeedData);

    console.log("Endpoint table seeded successfully");
  } catch (error) {
    console.error("Error seeding the Endpoint table:", error);
  }
};

// Run the seed function
seedEndpointTable();
