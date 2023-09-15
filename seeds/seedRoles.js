// seedRoles.js
const db = require("../config/database");
const Role = require("../models/role");

const rolesData = [
  { name: "admin" },
  { name: "contentManager" },
  { name: "teacher" },
  { name: "student" },
];

db.sync().then(async () => {
  try {
    await Role.bulkCreate(rolesData);

    console.log("Roles seeded successfully");
  } catch (error) {
    console.error("Error seeding roles:", error);
  } finally {
    process.exit();
  }
});
