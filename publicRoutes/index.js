const express = require("express");
const router = express.Router();
const health = require("./health");
const authenticate = require("./authenticate");

/* GET home page. */
router.get("/health", function (req, res, next) {
  health(req, res, next);
});

router.get("/", function (req, res, next) {
  res.send({ message: "home" });
});

router.get("/authenticate", function (req, res, next) {
  authenticate(req, res, next);
});

module.exports = router;
