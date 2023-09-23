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
    const existingData = await Endpoint.findAll();

    if (existingData.length === 0) {
      // If no data exists, then seed the table
      await Endpoint.sync();
      await Endpoint.bulkCreate(endpointSeedData);
      console.log("Endpoint table seeded successfully");
    } else {
      console.log("Endpoint table already contains data. Skipping seeding.");
    }
  } catch (error) {
    console.error("Error seeding the Endpoint table:", error);
  }
};

// Run the seed function
seedEndpointTable();
