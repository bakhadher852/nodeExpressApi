// models/Role.js
const DataTypes = require("sequelize");
const db = require("../config/database");

// const Role = db.define("Role", {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// Role.sync({ alter: true });

// //----------------------------

// //models/endPoint.js

// const Endpoint = db.define("Endpoint", {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   // Add any other properties you need for your endpoints
// });
// Endpoint.sync({ alter: true });

//----------------------------
//models/AccessControl.js

const AccessControl = db.define(
  "AccessControl",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EndpointId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);
// Role.belongsToMany(Endpoint, { through: AccessControl });
// Endpoint.belongsToMany(Role, { through: AccessControl });
AccessControl.sync({ alter: true });

//------seedAccessControl----------------------

//role table:
/*
id     role
1       admin
2       contentManager
3       teacher
4       student
*/

//Endpoint table
/*
id      EndpointName
1       getAll
2       Get
3       Create
4       Update
5       Delete
*/

// Define the seed data
const accessControlSeedData = [
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, // Courses getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, // Courses Get
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, // Courses Create
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, // Courses Update
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, // Courses Delete
    Model: "Courses",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  {
    RoleId: 2, // Admin
    EndpointId: 1, // Courses getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // Admin
    EndpointId: 2, // Courses Get
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // Admin
    EndpointId: 3, // Courses Create
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // Admin
    EndpointId: 4, // Courses Update
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // Admin
    EndpointId: 5, // Courses Delete
    Model: "Courses",
    allowed: true,
  },
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // Admin
    EndpointId: 1, // Courses getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 3, // Admin
    EndpointId: 2, // Courses Get
    Model: "Courses",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 4, // Courses getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 4, // Admin
    EndpointId: 2, // Courses Get
    Model: "Courses",
    allowed: true,
  },
];

// Function to seed data into the AccessControl table
const seedAccessControlTable = async () => {
  try {
    await AccessControl.bulkCreate(accessControlSeedData);

    console.log("AccessControl table seeded successfully");
  } catch (error) {
    console.error("Error seeding the AccessControl table:", error);
  }
};

// Run the seed function
seedAccessControlTable();

//delete all rows in AccessControl
// AccessControl.destroy({ where: {} });
