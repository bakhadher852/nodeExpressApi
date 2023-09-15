const db = require("../config/database");
const AccessControl = require("../models/accessControl");
const Role = require("../models/role");

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
1       /courses
2       /courses/:id
3       /courses/add
4       /courses/delete/:id
5       /courses/update/:id
*/

const accessControlSeedData = [
  {
    //admin
    Role: 1,
    EndpointId: 1, //courses list all
    permissions: "CRUD",
  },
  {
    //admin
    Role: 1,
    EndpointId: 2, //courses list all by id
    permissions: "CRUD",
  },
  {
    //admin
    Role: 1,
    EndpointId: 3, //courses/add
    permissions: "CRUD",
  },
  {
    //admin
    Role: 1,
    EndpointId: 4, //courses/delete/:id
    permissions: "CRUD",
  },
  {
    //admin
    Role: 1,
    EndpointId: 5, //courses/update/:id
    permissions: "CRUD",
  },
  ////////////contentManager//////////////
  {
    //contentManager
    Role: 2,
    EndpointId: 1, //courses list all
    permissions: "CRUD",
  },
  {
    //contentManager
    Role: 2,
    EndpointId: 2, //courses list all by id
    permissions: "CRUD",
  },
  {
    //contentManager
    Role: 2,
    EndpointId: 3, //courses/add
    permissions: "CRUD",
  },
  {
    //contentManager
    Role: 2,
    EndpointId: 4, //courses/delete/:id
    permissions: "CRUD",
  },
  {
    //contentManager
    Role: 2,
    EndpointId: 5, //courses/update/:id
    permissions: "CRUD",
  },
  /////////////teacher//////////////
  {
    //teacher
    Role: 3,
    EndpointId: 1, //courses list all
    permissions: "read",
  },
  {
    //teacher
    Role: 3,
    EndpointId: 2, //courses list all by id
    permissions: "read",
  },
  //////////////student/////////////
  {
    //teacher
    Role: 4,
    EndpointId: 1, //courses list all
    permissions: "read",
  },
  {
    //teacher
    Role: 4,
    EndpointId: 2, //courses list all by id
    permissions: "read",
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
