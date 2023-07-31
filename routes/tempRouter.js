// routes/tempRouter.js
const express = require("express");
const router = express.Router();
const mod = require("../models/mod");
// res.send("Router")

// router.get("/", (req, res) =>
//   mod
//     .findAll()
//     .then((mods) => {
//       const courseData = mods.map((course) => ({
//         id: course.dataValues.id,
//         title: course.dataValues.title,
//         desc: course.dataValues.desc,
//       }));
//       res.json(courseData);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     })
// );

//courses/?title=math&sort=title :  courses with the title equal to "math", sorted in ascending order of titles.
//courses/?id=2&sort=id_desc :  course with id equal to 2, sorted in descending order of IDs.
//courses/?desc=&sort=desc_desc :  courses with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting

router.get("/", (req, res) => {
  const { title, id, desc, sort, page, pageSize } = req.query; // Get the query parameters from the URL

  // Build the filtering object based on the provided parameters
  const filter = {};
  if (title) {
    filter.title = title;
  }
  if (id) {
    filter.id = id;
  }
  if (desc) {
    filter.desc = desc;
  }

  // Build the sorting object based on the provided sort parameter
  const sortOptions = [];
  if (sort === "title") {
    sortOptions.push(["title", "ASC"]);
  } else if (sort === "title_desc") {
    sortOptions.push(["title", "DESC"]);
  } else if (sort === "id") {
    sortOptions.push(["id", "ASC"]);
  } else if (sort === "id_desc") {
    sortOptions.push(["id", "DESC"]);
  } else if (sort === "desc") {
    sortOptions.push(["desc", "ASC"]);
  } else if (sort === "desc_desc") {
    sortOptions.push(["desc", "DESC"]);
  }

  // Calculate the offset based on the page number and page size
  const pageNumber = parseInt(page) || 1;
  const pageSizeNumber = parseInt(pageSize) || 10;
  const offset = (pageNumber - 1) * pageSizeNumber;

  // Use the filter, sortOptions, limit, and offset in the findAll() method
  mod
    .findAll({
      where: filter,
      order: sortOptions,
      limit: pageSizeNumber,
      offset: offset,
    })
    .then((mods) => {
      const courseData = mods.map((course) => ({
        id: course.dataValues.id,
        title: course.dataValues.title,
        desc: course.dataValues.desc,
      }));
      res.json(courseData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/*In this modified code, we've added two new query parameters: page and pageSize. These parameters control the pagination. The page parameter specifies the current page number, and the pageSize parameter specifies the number of records to show per page.

The offset is calculated based on the current page number and page size. It determines how many records to skip before starting to retrieve data. The limit option is set to the pageSizeNumber to limit the number of records returned per page.

Now, when you make a request like http://localhost:3000/courses/?page=2&pageSize=10, it will retrieve the second page of results with 10 records per page. */

//My way to use findAll
// router.get("/", async function (req, res) {
//   let r = await mod.findAll();
//   var courses = r.map((course) => ({
//     id: course.dataValues.id,
//     title: course.dataValues.title,
//     descreption: course.dataValues.desc,
//   }));
//   console.log("==========================", courses);
//   res.json(courses);
// });

router.get("/get/:id", (req, res) => {
  const { id } = req.params; // Get the course ID from the URL parameter

  mod
    .findByPk(id)
    .then((course) => {
      if (!course) {
        return res.status(404).send({
          message: "Course Not Found",
        });
      }
      res.json(course);
    })
    .catch((error) => res.status(400).send(error));
});

router.post("/add", (req, res) => {
  const { title, desc } = req.body; // Assuming you are receiving the data in the request body

  // Post request
  mod
    .create({
      title: title,
      desc: desc,
    })
    .then((newCourse) => {
      console.log("New course added:", newCourse);

      res.sendStatus(201); // Send a 201 status code to indicate successful creation
    })
    .catch((err) => {
      console.error("Error adding new course:", err);
      res.sendStatus(500); // Send a 500 status code for internal server error
    });
});

// New route for updating a course by ID
router.put("/update/:id", (req, res) => {
  const { id } = req.params; // Get the course ID from the URL parameter
  const { title, desc } = req.body; // Get the updated data from the request body

  mod
    .update(
      {
        title: title,
        desc: desc,
      },
      {
        where: { id: id },
      }
    )
    .then((result) => {
      if (result[0] === 1) {
        console.log("Course updated successfully");
        res.sendStatus(200);
      } else {
        console.log("Course not found or not updated");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error updating course:", err);
      res.sendStatus(500);
    });
});

// New route for deleting a course by ID
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params; // Get the course ID from the URL parameter

  mod
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      if (result === 1) {
        console.log("Course deleted successfully");
        res.sendStatus(200);
      } else {
        console.log("Course not found or not deleted");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error deleting course:", err);
      res.sendStatus(500);
    });
});

router.get("/test", (req, res) => {
  const { method, url, params, query, body } = req;

  // Combine extracted properties into a new object
  const requestData = {
    method,
    url,
    params,
    query,
    body,
  };

  res.json(requestData); // Send the requestData object as JSON response
  console.log(requestData); // Log the extracted request data
});

module.exports = router;

/*         

courses/?title=math for any coulumn title or param
       
pagination 20 20 
courses/?pagesize50 pagenumber=2 means second 50
page_No
page_size

sort title asending 
_asendign=Key  title id desc



*/
