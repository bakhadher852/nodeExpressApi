//controllers/contentView.js
const { encryptId, decryptId } = require("../middleware/encrypt");
const contentViewMod = require("../models/contentView");
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
  contentViewMod
    .findAll({
      where: filter,
      order: sortOptions,
      limit: pageSizeNumber,
      offset: offset,
    })
    .then((mods) => {
      const contentViewData = mods.map((contentView) => ({
        id: encryptId(contentView.dataValues.id),
        title: contentView.dataValues.title,
        desc: contentView.dataValues.desc,
      }));
      if (contentViewData.length === 0) {
        res.send("No thing added yet");
      } else {
        res.json(contentViewData);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
//contentView/?title=math&sort=title :  contentView with the title equal to "math", sorted in ascending order of titles.
//contentView/?id=2&sort=id_desc :  contentViewwith id equal to 2, sorted in descending order of IDs.
//contentView/?desc=&sort=desc_desc :  contentView with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting
exports.getById = async (req, res) => {
  const { id } = req.params; // Get the contentViewID from the URL parameter

  contentViewMod
    .findByPk(id)
    .then((contentView) => {
      if (!contentView) {
        return res.status(404).send({
          message: "contentView Not Found",
        });
      }
      const plainContentView = contentView.toJSON();
      plainContentView.id = encryptId(contentView.id);

      res.json(plainContentView);
    })
    .catch((error) => res.status(400).send(error));
};
exports.create = async (req, res) => {
  const { title, desc } = req.body; // Assuming you are receiving the data in the request body

  // Post request
  contentViewMod
    .create({
      title: title,
      desc: desc,
    })
    .then((newcontentView) => {
      console.log("=====>New contentViewadded:");

      res.sendStatus(201); // Send a 201 status code to indicate successful creation
    })
    .catch((err) => {
      console.error("Error adding new contentView:", err);
      res.sendStatus(500); // Send a 500 status code for internal server error
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the contentViewID from the URL parameter
  const { title, desc } = req.body; // Get the updated data from the request body

  contentViewMod
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
        console.log("=====>contentView updated successfully");
        res.sendStatus(200);
      } else {
        console.log("=====>contentView not found or not updated");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error updating contentView:", err);
      res.sendStatus(500);
    });
};

exports.delete = async (req, res) => {
  const { id } = req.params; // Get the contentViewID from the URL parameter

  contentViewMod
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      if (result === 1) {
        console.log("=====>contentView deleted successfully");
        res.sendStatus(200);
      } else {
        console.log("=====>contentView not found or not deleted");
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error("Error deleting contentView:", err);
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
