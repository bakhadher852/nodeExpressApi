//app.js
const db = require("./config/database");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// const mod = require("./models/mod");
// app.listen(PORT, console.log(`Server running on port ${PORT}`));

// Start the server
try {
  app.get("/", (req, res) => {
    res.send("Hello World");
    console.log("Connection to server has been established successfully.");
    // console.log(mod);
  });
} catch (error) {
  console.error("Unable to connect to the server:", error);
}
//coruse routes
app.use("/course", require("./routes/tempRouter"));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
// module.exports = sequelize;
