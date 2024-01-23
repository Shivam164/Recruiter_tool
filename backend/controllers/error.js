const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err);
  
    // Check if the error has a specific status code, otherwise set it to 500 (Internal Server Error)
    const statusCode = err.statusCode || 500;
  
    // Send a JSON response with the error message and status code
    res.status(statusCode).json({
      error: {
        message: err.message || 'Internal Server Error',
        status: statusCode,
      },
    });
  };
  
  module.exports = errorHandler;
  