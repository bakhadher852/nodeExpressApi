//controllers/submissionMarks.js
// const Course = require("./models/submissionMarks");
const submissionMarksMod = require("../models/submissionMarks");
exports.list = (req, res) => {
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
  submissionMarksMod
    .findAll({
      where: filter,
      order: sortOptions,
      limit: pageSizeNumber,
      offset: offset,
    })
    .then((mods) => {
      const sectionData = mods.map((section) => ({
        id: section.dataValues.id,
        title: section.dataValues.title,
        desc: section.dataValues.desc,
      }));
      res.json(sectionData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
//submissionMarks/?title=math&sort=title :  submissionMarks with the title equal to "math", sorted in ascending order of titles.
//submissionMarks/?id=2&sort=id_desc :  submissionMarkswith id equal to 2, sorted in descending order of IDs.
//submissionMarks/?desc=&sort=desc_desc :  submissionMarks with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting
exports.getById = async (req, res) => {
  const { id } = req.params; // Get the submissionMarksID from the URL parameter

  submissionMarksMod
    .findByPk(id)
    .then((section) => {
      if (!section) {
        return res.status(404).send({
          message: "submissionMarksNot Found",
        });
      }
      res.json(section);
    })
    .catch((error) => res.status(400).send(error));
};
exports.create = async (req, res) => {
  const { title, desc } = req.body; // Assuming you are receiving the data in the request body

  // Post request
  submissionMarksMod
    .create({
      title: title,
      desc: desc,
    })
    .then((newCourse) => {
      console.log("New submissionMarksadded:");

      res.sendStatus(201); // Send a 201 status code to indicate successful creation
    })
    .catch((err) => {
      console.error("Error adding new section:", err);
      res.sendStatus(500); // Send a 500 status code for internal server error
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the submissionMarksID from the URL parameter
  const { title, desc } = req.body; // Get the updated data from the request body

  submissionMarksMod
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
      console.error("Error updating section:", err);
      res.sendStatus(500);
    });
};

exports.delete = async (req, res) => {
  const { id } = req.params; // Get the submissionMarksID from the URL parameter

  submissionMarksMod
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
      console.error("Error deleting section:", err);
      res.sendStatus(500);
    });
};
exports.test = async (req, res) => {
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
};
