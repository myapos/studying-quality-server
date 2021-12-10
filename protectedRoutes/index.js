const express = require("express");
const router = express.Router();
const secret = require("./secret");

/* GET home page. */
router.get("/secret", function (req, res, next) {
  secret(req, res, next);
});

module.exports = router;
