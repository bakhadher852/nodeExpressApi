//controllers/submissionMarks.js
// const Course = require("./models/submissionMarks");
const submissionMarksMod = require("../models/submissionMarks");
exports.list = (req, res) => {
  const { mark, id, sort, page, pageSize } = req.query; // Get the query parameters from the URL

  // Build the filtering object based on the provided parameters
  const filter = {};
  if (mark) {
    filter.mark = mark;
  }
  if (id) {
    filter.id = id;
  }

  // Build the sorting object based on the provided sort parameter
  const sortOptions = [];
  if (sort === "mark") {
    sortOptions.push(["mark", "ASC"]);
  } else if (sort === "id") {
    sortOptions.push(["id", "ASC"]);
  } else if (sort === "id_desc") {
    sortOptions.push(["id", "DESC"]);
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
      const submissionMarks = mods.map((submissionMark) => ({
        id: submissionMark.dataValues.id,
        mark: submissionMark.dataValues.mark,
      }));
      if (submissionMarks.length === 0) {
        res.send("No thing added yet");
      } else {
        res.json(submissionMarks);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
//submissionMarks/?mark=math&sort=mark :  submissionMarks with the mark equal to "math", sorted in ascending order of marks.
//submissionMarks/?id=2&sort=id_desc :  submissionMarkswith id equal to 2, sorted in descending order of IDs.
//submissionMarks/?desc=&sort=desc_desc :  submissionMarks with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting
exports.getById = async (req, res) => {
  const { id } = req.params; // Get the submissionMarksID from the URL parameter

  submissionMarksMod
    .findByPk(id)
    .then((submissionMarks) => {
      if (!submissionMarks) {
        return res.status(404).send({
          message: "submissionMarksNot Found",
        });
      }
      res.json(submissionMarks);
    })
    .catch((error) => res.status(400).send(error));
};
exports.create = async (req, res) => {
  const { mark } = req.body; // Assuming you are receiving the data in the request body

  // Post request
  submissionMarksMod
    .create({
      mark: mark,
    })
    .then((newCourse) => {
      console.log("New submissionMarks added:");

      res.status(201).send("New submissionMarks added:");
    })
    .catch((err) => {
      console.error("Error adding new submissionMarks:", err);
      res.status(500).send("Error adding new submissionMarks::");
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the submissionMarksID from the URL parameter
  const { mark } = req.body; // Get the updated data from the request body

  submissionMarksMod
    .update(
      {
        mark: mark,
      },
      {
        where: { id: id },
      }
    )
    .then((result) => {
      if (result[0] === 1) {
        console.log("submissionMarks updated successfully");
        res.status(200).send("submissionMarks updated successfully");
      } else {
        console.log("submissionMarks not found or not updated");
        res.status(404).send("submissionMarks not found or not updated");
      }
    })
    .catch((err) => {
      console.error("Error updating submissionMarks:", err);
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
        console.log("submissionMarks deleted successfully");
        res.status(200).send("submissionMarks deleted successfully");
      } else {
        console.log("submissionMarks not found or not deleted");
        res.status(404).send("submissionMarks not found or not deleted");
      }
    })
    .catch((err) => {
      console.error("Error deleting submissionMarks:", err);
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
