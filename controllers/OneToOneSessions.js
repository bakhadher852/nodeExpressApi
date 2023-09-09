//controllers/oneToOneSessions.js
const { encryptId, decryptId } = require("../middleware/encrypt");
const oneToOneSessionsMod = require("../models/oneToOneSessions");

exports.list = (req, res) => {
  const { id, timestamp, subject, sort, page, pageSize } = req.query; // Get the query parameters from the URL

  // Build the filtering object based on the provided parameters
  const filter = {};
  if (timestamp) {
    filter.timestamp = timestamp;
  }
  if (id) {
    filter.id = id;
  }
  if (subject) {
    filter.subject = subject;
  }

  // Build the sorting object based on the provided sort parameter
  const sortOptions = [];
  if (sort === "timestamp") {
    sortOptions.push(["timestamp", "ASC"]);
  } else if (sort === "timestamp_desc") {
    sortOptions.push(["timestamp", "DESC"]);
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
  oneToOneSessionsMod
    .findAll({
      where: filter,
      order: sortOptions,
      limit: pageSizeNumber,
      offset: offset,
    })
    .then((mods) => {
      const oneToOneSessionsData = mods.map((oneToOneSessions) => ({
        id: encryptId(oneToOneSessions.dataValues.id),
        tittimestample: oneToOneSessions.dataValues.timestamp,
        duration: oneToOneSessions.dataValues.duration,
        subject: oneToOneSessions.dataValues.subject,
        description: oneToOneSessions.dataValues.description,
      }));
      if (oneToOneSessionsData.length === 0) {
        res.send("No thing added yet");
      } else {
        res.json(oneToOneSessionsData);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
//oneToOneSessions/?title=math&sort=title :  oneToOneSessions with the title equal to "math", sorted in ascending order of titles.
//oneToOneSessions/?id=2&sort=id_desc :  oneToOneSessions with id equal to 2, sorted in descending order of IDs.
//oneToOneSessions/?desc=&sort=desc_desc :  oneToOneSessions with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting
exports.getById = async (req, res) => {
  const { id } = req.params; // Get the oneToOneSessions ID from the URL parameter

  oneToOneSessionsMod
    .findByPk(id)
    .then((oneToOneSessions) => {
      if (!oneToOneSessions) {
        return res.status(404).send({
          message: "oneToOneSessions Not Found",
        });
      }
      const plainOneToOneSessions = oneToOneSessions.toJSON();
      plainOneToOneSessions.id = encryptId(oneToOneSessions.id);
      res.json(oneToOneSessions);
    })
    .catch((error) => res.status(400).send(error));
};

// Post request
exports.create = async (req, res) => {
  const { timestamp, duration, subject, description } = req.body;

  oneToOneSessionsMod
    .create({
      timestamp: timestamp,
      duration: duration,
      subject: subject,
      description: description,
    })
    .then(() => {
      console.log("New oneToOneSessions added:");

      res.status(201).send("New oneToOneSessions added:");
    })
    .catch((err) => {
      console.error("Error adding new oneToOneSessions:", err);
      res.status(500).send("Error adding new oneToOneSessions:");
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the oneToOneSessions ID from the URL parameter
  const { timestamp, duration, subject, description } = req.body;

  oneToOneSessionsMod
    .update(
      {
        timestamp: timestamp,
        duration: duration,
        subject: subject,
        description: description,
      },
      {
        where: { id: id },
      }
    )
    .then((result) => {
      if (result[0] === 1) {
        console.log("oneToOneSessions updated successfully");
        res.status(200).send("oneToOneSessions updated successfully");
      } else {
        console.log("oneToOneSessions not found or not updated");
        res.status(404).send("oneToOneSessions not found or not updated");
      }
    })
    .catch((err) => {
      console.error("Error updating oneToOneSessions:", err);
      res.status(500).send("Error updating oneToOneSessions:");
    });
};

exports.delete = async (req, res) => {
  const { id } = req.params; // Get the oneToOneSessions  ID from the URL parameter

  oneToOneSessionsMod
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      if (result === 1) {
        console.log("oneToOneSessions deleted successfully");
        res.status(200).send("oneToOneSessions deleted successfully");
      } else {
        console.log("oneToOneSessions not found or not deleted");
        res.status(404).send("oneToOneSessions not found or not deleted");
      }
    })
    .catch((err) => {
      console.error("Error deleting oneToOneSessions", err);
      res.status(500).send("Error deleting oneToOneSessions");
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
