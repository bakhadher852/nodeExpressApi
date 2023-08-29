//controllers/studentSubmission.js

const studentSubmissionMod = require("../models/studentSubmission");
exports.list = (req, res) => {
  const { content, id, desc, sort, page, pageSize } = req.query; // Get the query parameters from the URL

  // Build the filtering object based on the provided parameters
  const filter = {};
  if (content) {
    filter.content = content;
  }
  if (id) {
    filter.id = id;
  }
  if (desc) {
    filter.desc = desc;
  }

  // Build the sorting object based on the provided sort parameter
  const sortOptions = [];
  if (sort === "content") {
    sortOptions.push(["content", "ASC"]);
  } else if (sort === "content_desc") {
    sortOptions.push(["content", "DESC"]);
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
  studentSubmissionMod
    .findAll({
      where: filter,
      order: sortOptions,
      limit: pageSizeNumber,
      offset: offset,
    })
    .then((mods) => {
      const studentSubmissionData = mods.map((studentSubmission) => ({
        id: studentSubmission.dataValues.id,
        content: studentSubmission.dataValues.content,
      }));
      if (studentSubmissionData.length === 0) {
        res.send("No thing added yet");
      } else {
        res.json(studentSubmissionData);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
//studentSubmission/?content=math&sort=content :  studentSubmission with the content equal to "math", sorted in ascending order of contents.
//studentSubmission/?id=2&sort=id_desc :  studentSubmissionwith id equal to 2, sorted in descending order of IDs.
//studentSubmission/?desc=&sort=desc_desc :  studentSubmission with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting
exports.getById = async (req, res) => {
  const { id } = req.params; // Get the studentSubmissionID from the URL parameter

  studentSubmissionMod
    .findByPk(id)
    .then((studentSubmission) => {
      if (!studentSubmission) {
        return res.status(404).send({
          message: "studentSubmissionNot Found",
        });
      }
      res.json(studentSubmission);
    })
    .catch((error) => res.status(400).send(error));
};

// Post request
exports.create = async (req, res) => {
  const { content } = req.body; // Assuming you are receiving the data in the request body

  studentSubmissionMod
    .create({
      content: content,
    })
    .then((newstudentSubmission) => {
      console.log("New studentSubmission added:");

      res.status(201).send("New studentSubmission added:");
    })
    .catch((err) => {
      console.error("Error adding new studentSubmission:", err);
      res.status(500).send("Error adding new studentSubmission:");
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the studentSubmissionID from the URL parameter
  const { content } = req.body; // Get the updated data from the request body

  studentSubmissionMod
    .update(
      {
        content: content,
      },
      {
        where: { id: id },
      }
    )
    .then((result) => {
      if (result[0] === 1) {
        console.log("studentSubmission updated successfully");
        res.status(200).send("studentSubmission updated successfully");
      } else {
        console.log("studentSubmission not found or not updated");
        res.status(404).send("studentSubmission not found or not updated");
      }
    })
    .catch((err) => {
      console.error("Error updating studentSubmission:", err);
      res.status(500).send("Error updating studentSubmission");
    });
};

exports.delete = async (req, res) => {
  const { id } = req.params; // Get the studentSubmissionID from the URL parameter

  studentSubmissionMod
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      if (result === 1) {
        console.log("studentSubmission deleted successfully");
        res.status(200).send("studentSubmission deleted successfully");
      } else {
        console.log("studentSubmission not found or not deleted");
        res.status(404).send("studentSubmission not found or not deleted");
      }
    })
    .catch((err) => {
      console.error("Error deleting studentSubmission:", err);
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
