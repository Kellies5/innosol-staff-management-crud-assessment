// Standardized API response utilities

// Convert snake_case keys to camelCase
const toCamelCase = (str) => {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
};

// Transform object keys from snake_case to camelCase
const transformToCamelCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(item => transformToCamelCase(item));
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = toCamelCase(key);
      result[camelKey] = transformToCamelCase(obj[key]);
      return result;
    }, {});
  }
  return obj;
};

const sendSuccess = (res, statusCode, message, data) => {
  res.status(statusCode).json({
    success: true,
    message: message,
    data: transformToCamelCase(data)
  });
};

const sendError = (res, statusCode, message, details = null) => {
  res.status(statusCode).json({
    success: false,
    message: message,
    data: details || null
  });
};

module.exports = {
  sendSuccess,
  sendError
};
