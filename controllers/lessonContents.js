// controllers/lessonContents.js
const lessonContents = require("../models/lessonContents");

exports.list = (req, res) => {
  const { title, id, desc, type, content, sort, page, pageSize } = req.query; // Get the query parameters from the URL

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
  if (type) {
    filter.type = type;
  }
  if (content) {
    filter.content = content;
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
  lessonContents
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
        type: lesson.dataValues.type,
        content: lesson.dataValues.content,
      }));
      res.json(lessonData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  lessonContents
    .findByPk(id)
    .then((lesson) => {
      if (!lesson) {
        return res.status(404).send({
          message: "Lesson Content Not Found",
        });
      }
      res.json(lesson);
    })
    .catch((error) => res.status(400).send(error));
};

exports.create = async (req, res) => {
  const { title, desc } = req.body;

  // Post request
  lessonContents
    .create({
      title: title,
      type: type, // Add the "type" property based on the lessonContents model
      desc: desc,
      content: content, // Add the "content" property based on the lessonContents model
    })
    .then((newLessonContent) => {
      console.log("New lesson content added:");

      res.sendStatus(201); // Send a 201 status code to indicate successful creation
    })
    .catch((err) => {
      console.error("Error adding new lesson content:", err);
      res.sendStatus(500); // Send a 500 status code for internal server error
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the lesson ID from the URL parameter
  const { title, desc, type, content } = req.body;

  lessonContents
    .update(
      {
        title: title,
        type: type, // Add the "type" property based on the lessonContents model
        desc: desc,
        content: content, // Add the "content" property based on the lessonContents model
      },
      {
        where: { id: id },
      }
    )
    .then((result) => {
      // ... (The existing code remains unchanged)
    })
    .catch((err) => {
      // ... (The existing code remains unchanged)
    });
};

exports.delete = async (req, res) => {
  // ... (The existing code remains unchanged)

  lessonContents
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
