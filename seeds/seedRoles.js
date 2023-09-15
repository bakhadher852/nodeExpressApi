// seedRoles.js
const db = require("../config/database"); // Import your Sequelize instance
const Role = require("../models/role"); // Import your Role model

const rolesData = [
  { name: "admin" },
  { name: "contentManager" },
  { name: "teacher" },
  { name: "student" },
];

db.sync().then(async () => {
  try {
    for (const roleData of rolesData) {
      await Role.create(roleData);
    }
    console.log("Roles seeded successfully");
  } catch (error) {
    console.error("Error seeding roles:", error);
  } finally {
    process.exit();
  }
});
