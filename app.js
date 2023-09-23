//app.js
const { accessControlMod, endPointMod, roleMod } = require("./all-imports");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const { authentication } = require("./middleware/authentication");
const { authorization } = require("./middleware/authorization");
const { encryptId, decryptId } = require("./middleware/encrypt");
const { TeacherAccessOnly } = require("./middleware/checkTeacher");
const seederAccessContro = require("./seeds/addRowsToAccessControlWithPermision");
const seedEndPoints = require("./seeds/seedEndPoints");
const seedRoles = require("./seeds/seedRoles");
app.use(bodyParser.json());
const errorHandler = require("./middleware/errorHandler");
// const accessControlMod = require("./models/accessControl");
// const endPointMod = require("./models/endPoint");
// const roleMod = require("./models/role");
// Set EJS as the view engine

app.set("view engine", "ejs");
try {
  app.get("/", (req, res) => {
    const data = { name: "Mohammed Ba Khadher" };
    res.render("index", data);
    console.log("Connection to server has been established successfully.");
    // console.log(mod);
  });
} catch (error) {
  console.error("Unable to connect to the server:", error);
}

// routes
app.use(
  "/courses",

  require("./routes/courses")
);
app.use("/sections", require("./routes/sections"));
app.use("/units", require("./routes/units"));
app.use("/lessons", require("./routes/lessons"));
app.use("/lessonContents", require("./routes/lessonContents"));
app.use("/contentView", require("./routes/contentView"));
app.use(
  "/studentSubmission",

  require("./routes/studentSubmission")
);
app.use(
  "/submissionMarks",

  require("./routes/submissionMarks")
);
app.use(
  "/oneToOneSessions",

  require("./routes/oneToOneSessions")
);
app.use("/users", require("./routes/users"));

//associations

// roleMod.belongsToMany(endPointMod, { through: accessControlMod });
// endPointMod.belongsToMany(roleMod, { through: accessControlMod });

//Error handler
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
// module.exports = sequelize;

module.exports = PORT;
module.exports = app;
