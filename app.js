//app.js
const db = require("./config/database");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const { authentication } = require("./middleware/authentication");
const { authorization } = require("./middleware/authorization");
const { TeacherAccessOnly } = require("./middleware/checkTeacher");
app.use(bodyParser.json());
const errorHandler = require("./middleware/errorHandler");
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
  authentication,

  TeacherAccessOnly,
  require("./routes/courses")
);
app.use("/sections", authentication, require("./routes/sections"));
app.use("/units", authentication, require("./routes/units"));
app.use("/lessons", authentication, require("./routes/lessons"));
app.use("/lessonContents", authentication, require("./routes/lessonContents"));
app.use("/contentView", require("./routes/contentView"));
app.use(
  "/studentSubmission",
  authentication,
  require("./routes/studentSubmission")
);
app.use(
  "/submissionMarks",
  authentication,
  require("./routes/submissionMarks")
);
app.use(
  "/oneToOneSessions",
  authentication,
  require("./routes/oneToOneSessions")
);
app.use("/users", authentication, require("./routes/users"));
//Error handler
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
// module.exports = sequelize;

module.exports = PORT;
module.exports = app;
