// models/courses.js
const DataTypes = require("sequelize");
const db = require("../config/database");

const course = db.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Define a hook that will be called after the table is synchronized (created)
course.afterSync(() => {
  // Check if the table is empty
  course.count().then((count) => {
    if (count === 0) {
      // Add a row to the table
      course
        .create({
          title: "Sample Course",
          desc: "This is a sample course description.",
        })
        .then(() => {
          console.log("Sample course added successfully.");
        })
        .catch((err) => {
          console.error("Error adding sample course:", err);
        });
    }
  });
});
//If the table not exict it will creat it in DB
// course
//   .sync()
//   .then((result) => {
//     console.log("courses talbel added successfully", result);
//   })
//   .catch((err) => {
//     console.log("courses talbel NOT added ", err);
//   });
course.sync({ force: true });
module.exports = course;
