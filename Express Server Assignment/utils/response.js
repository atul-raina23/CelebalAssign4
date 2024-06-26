// src/utils/response.js

exports.sendSuccess = (res, message, data) => {
    res.status(200).json({
      status: 'success',
      message,
      data,
    });
  };
  
  exports.sendError = (res, message) => {
    res.status(500).json({
      status: 'error',
      message,
    });
  };
  