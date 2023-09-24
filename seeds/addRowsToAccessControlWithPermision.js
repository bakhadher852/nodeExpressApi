// models/Role.js
const DataTypes = require("sequelize");
const db = require("../config/database");

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
  //////////////////////## Courses End Point##/////////////////////////////

  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "Courses",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  {
    RoleId: 2, // contentManager
    EndpointId: 1, //  getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 2, //  Get
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 3, //  Create
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 4, //  Update
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 5, //  Delete
    Model: "Courses",
    allowed: true,
  },
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 1, //  getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "Courses",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "Courses",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "Courses",
    allowed: true,
  },
  //////////////////////## Sections End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "Sections",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  {
    RoleId: 2, // contentManager
    EndpointId: 1, //  getAll
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 2, //  Get
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 3, //  Create
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 4, //  Update
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 5, //  Delete
    Model: "Sections",
    allowed: true,
  },
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 1, //  getAll
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "Sections",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student1
    EndpointId: 4, //  getAll
    Model: "Sections",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "Sections",
    allowed: true,
  },
  //////////////////////## Units End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "Units",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  {
    RoleId: 2, // contentManager
    EndpointId: 1, //  getAll
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 2, //  Get
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 3, //  Create
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 4, //  Update
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 5, //  Delete
    Model: "Units",
    allowed: true,
  },
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 1, //  getAll
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "Units",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "Units",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "Units",
    allowed: true,
  },
  //////////////////////## Lessons End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "Lessons",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  {
    RoleId: 2, // contentManager
    EndpointId: 1, //  getAll
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 2, //  Get
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 3, //  Create
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 4, //  Update
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 5, //  Delete
    Model: "Lessons",
    allowed: true,
  },
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 1, //  getAll
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "Lessons",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "Lessons",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "Lessons",
    allowed: true,
  },
  //////////////////////## LessonContents End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "LessonContents",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  {
    RoleId: 2, // contentManager
    EndpointId: 1, //  getAll
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 2, //  Get
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 3, //  Create
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 4, //  Update
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 2, // contentManager
    EndpointId: 5, //  Delete
    Model: "LessonContents",
    allowed: true,
  },
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 1, //  getAll
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "LessonContents",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "LessonContents",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "LessonContents",
    allowed: true,
  },
  //////////////////////## ContentViews End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "ContentViews",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "ContentViews",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "ContentViews",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "ContentViews",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "ContentViews",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  /*No access */
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 1, //  getAll
    Model: "ContentViews",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "ContentViews",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "ContentViews",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "ContentViews",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 3, //  Create
    Model: "ContentViews",
    allowed: true,
  },
  //////////////////////## StudentSubmissions End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "StudentSubmissions",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  /*No access */
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 1, //  getAll
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "StudentSubmissions",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 3, //  Create
    Model: "StudentSubmissions",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 4, //  Update
    Model: "StudentSubmissions",
    allowed: true,
  },
  //////////////////////## SubmissionMarks End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "SubmissionMarks",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  /*No access */
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 4, //  getAll
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 3, //  Create
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 4, //  Update
    Model: "SubmissionMarks",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "SubmissionMarks",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "SubmissionMarks",
    allowed: true,
  },
  //////////////////////## OneToOneSessions End Point##/////////////////////////////
  /////////////////admin///////////////////
  {
    RoleId: 1, // Admin
    EndpointId: 1, //  getAll
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 2, //  Get
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 3, //  Create
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 4, //  Update
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 1, // Admin
    EndpointId: 5, //  Delete
    Model: "OneToOneSessions",
    allowed: true,
  },
  /////////////////contentManager///////////////////
  /*No access */
  /////////////////teacher//////////////////////////
  {
    RoleId: 3, // teacher
    EndpointId: 4, //  getAll
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 2, //  Get
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 3, //  Create
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 3, // teacher
    EndpointId: 4, //  Update
    Model: "OneToOneSessions",
    allowed: true,
  },

  /////////////////student/////////////////////////
  {
    RoleId: 4, // student
    EndpointId: 4, //  getAll
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 2, //  Get
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 3, //  Create
    Model: "OneToOneSessions",
    allowed: true,
  },
  {
    RoleId: 4, // student
    EndpointId: 4, //  Update
    Model: "OneToOneSessions",
    allowed: true,
  },
];

// Function to seed data into the AccessControl table
db.sync().then(async () => {
  try {
    const existingData = await AccessControl.findAll();

    if (existingData.length === 0) {
      // If no data exists, then seed the table
      await AccessControl.bulkCreate(accessControlSeedData);
      console.log("=====>AccessControl table seeded successfully");
    } else {
      console.log(
        "AccessControl table already contains data. Skipping seeding."
      );
    }
  } catch (error) {
    console.error("Error seeding the AccessControl table:", error);
  }
});

//delete all rows in AccessControl
// AccessControl.destroy({ where: {} });
