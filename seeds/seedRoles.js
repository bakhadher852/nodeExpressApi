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
    const existingRoles = await Role.findAll();

    if (existingRoles.length === 0) {
      await Role.bulkCreate(rolesData);
      console.log("=====>Roles seeded successfully");
    } else {
      console.log("=====>Roles already exist, no need to seed.");
    }
  } catch (error) {
    console.error("Error seeding roles:", error);
  } finally {
    process.exit();
  }
});
