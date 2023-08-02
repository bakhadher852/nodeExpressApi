// middleware/errorHandler.js

// Error handling middleware for CRUD operations and other features
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  if (err.name === "ValidationError") {
    // Handle validation errors (e.g., required fields, data type mismatch)
    return res
      .status(400)
      .json({ error: "Validation Error", message: err.message });
  }

  if (err.name === "NotFoundError") {
    // Handle not found errors (e.g., resource not found in database)
    return res.status(404).json({ error: "Not Found", message: err.message });
  }

  // Generic error handler for other errors
  return res
    .status(500)
    .json({ error: "Server Error", message: "An unexpected error occurred." });
};

module.exports = errorHandler;
