const express = require("express");
const router = express.Router();
const secret = require("./secret");
const getSystemParts = require("./getSystemParts");

/* GET secrete page. */
router.get("/secret", function (req, res, next) {
  secret(req, res, next);
});

router.get("/getSystemParts", function (req, res, next) {
  getSystemParts(req, res, next);
});

module.exports = router;
