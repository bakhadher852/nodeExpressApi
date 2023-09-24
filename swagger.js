const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentation for RESTful API",
    },
    basePath: "/", // The base path of the API (e.g., /v1)
  },
  apis: ["./routes/*.js"], // Add the paths to the route files
};

module.exports = swaggerJSDoc(options);

//http://localhost:3000/api-docs
