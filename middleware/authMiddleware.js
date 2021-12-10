const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log("Time:", Date.now());
  next();
};

module.exports = authMiddleware;
