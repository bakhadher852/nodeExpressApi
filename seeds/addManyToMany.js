const db = require("../config/database");
const AccessControl = require("../models/accessControl");
const Role = require("../models/role");
const Endpoint = require("../models/endPoint");

// db.sync({ alter: true })
//   .then(() => {
//     return Role.findOne({ where: { name: "admin" } });
//   })
//   .then((data) => {
//     let admin = data;
//     return Endpoint.findOne({ where: { name: "/courses" } });
//   })
//   .then((data) => {
//     let slashCourses = data;
//     admin.addEndpoint(slashCourses);
//   })
//   .catch((err) => {
//     console.log("Error from Many to many file ============", err);
//   });

//delete all rows in AccessControl
AccessControl.destroy({ where: {} });
