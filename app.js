//app.js
const db = require("./config/database");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
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
app.use("/courses", require("./routes/courses"));
app.use("/sections", require("./routes/sections"));
app.use("/units", require("./routes/units"));
app.use("/lessons", require("./routes/lessons"));
app.use("/lessonContents", require("./routes/lessonContents"));
app.use("/contentView", require("./routes/contentView"));
app.use("/studentsSubmission", require("./routes/studentsSubmission"));
app.use("/submissionMarks", require("./routes/submissionMarks"));
app.use("/oneToOneSessions", require("./routes/oneToOneSessions"));

//Error handler
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
// module.exports = sequelize;
// console.log(
//   "====================================app=========================="
// );
// console.log(app);
// console.log(
//   "====================================app=========================="
// );
module.exports = PORT;
