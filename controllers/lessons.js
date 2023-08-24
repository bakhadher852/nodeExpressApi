//controllers/lessons.js

const lessonsMod = require("../models/lessons");
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
  lessonsMod
    .findAll({
      where: filter,
      order: sortOptions,
      limit: pageSizeNumber,
      offset: offset,
    })
    .then((mods) => {
      const lessonData = mods.map((lesson) => ({
        id: lesson.dataValues.id,
        title: lesson.dataValues.title,
        desc: lesson.dataValues.desc,
      }));
      res.json(lessonData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
//lessons/?title=math&sort=title :  lessons with the title equal to "math", sorted in ascending order of titles.
//lessons/?id=2&sort=id_desc :  lesson with id equal to 2, sorted in descending order of IDs.
//lessons/?desc=&sort=desc_desc :  lessons with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting
exports.getById = async (req, res) => {
  const { id } = req.params; // Get the lesson ID from the URL parameter

  lessonsMod
    .findByPk(id)
    .then((lesson) => {
      if (!lesson) {
        return res.status(404).send({
          message: "lessons Not Found",
        });
      }
      res.json(lesson);
    })
    .catch((error) => res.status(400).send(error));
};
exports.create = async (req, res) => {
  const { title, desc } = req.body; // Assuming you are receiving the data in the request body

  // Post request
  lessonsMod
    .create({
      title: title,
      desc: desc,
    })
    .then((newCourse) => {
      console.log("New lessons added:");

      res.sendStatus(201); // Send a 201 status code to indicate successful creation
    })
    .catch((err) => {
      console.error("Error adding new lessons:", err);
      res.sendStatus(500); // Send a 500 status code for internal server error
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the lesson ID from the URL parameter
  const { title, desc } = req.body; // Get the updated data from the request body

  lessonsMod
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
        console.log("lessons updated successfully");
        res.sendStatus(200);
      } else {
        console.log("lessons not found or not updated");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error updating lesson:", err);
      res.sendStatus(500);
    });
};

exports.delete = async (req, res) => {
  const { id } = req.params; // Get the lesson ID from the URL parameter

  lessonsMod
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      if (result === 1) {
        console.log("lessons deleted successfully");
        res.sendStatus(200);
      } else {
        console.log("lessons not found or not deleted");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error deleting lesson:", err);
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
