const sendSuccess = (res, data, message = "Request successful") => {
  res.statusCode = 200;
  const response = {
    success: true,
    message: message,
    data: data,
  };
  res.end(JSON.stringify(response));
};

const sendError = (res, error, message = "An error occurred") => {
  res.statusCode = 500;
  const response = {
    success: false,
    message: message,
    error: error.message || error,
  };
  res.end(JSON.stringify(response));
};

module.exports = { sendSuccess, sendError };
