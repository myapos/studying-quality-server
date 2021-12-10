const express = require("express");
const router = express.Router();
const health = require("./health");

/* GET home page. */
router.get("/health", function (req, res, next) {
  health(req, res, next);
});

router.get("/", function (req, res, next) {
  res.send({ message: "home" });
});

module.exports = router;
