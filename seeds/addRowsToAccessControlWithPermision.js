const db = require("../config/database");
const AccessControl = require("../models/accessControl");
const Role = require("../models/role");
const Endpoint = require("../models/endPoint");
function runthis() {
  db.sync({ alter: true })
    .then(() => {
      // Find the admin role
      return Role.findOne({ where: { name: "admin" } });
    })
    .then((adminRole) => {
      console.log("=================adminRole==========", adminRole.id);
      return Endpoint.findOne({ where: { name: "/courses" } }).then(
        (coursesEndpoint) => {
          console.log(
            "=================coursesEndpoint==========",
            coursesEndpoint.id
          );

          return AccessControl.create({
            RoleId: adminRole.id,
            EndpointId: coursesEndpoint.id,
            permissions: "CRUD",
          });
        }
      );
    })
    .then(() => {
      console.log("AccessControl entry created successfully");
    })
    .catch((err) => {
      console.log("Error from Many to many file", err);
    });
}
module.exports = runthis;
