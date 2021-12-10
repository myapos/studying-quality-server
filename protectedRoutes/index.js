const express = require("express");
const router = express.Router();
const protected = require("./protected");

/* GET home page. */
router.get("/protected", function (req, res, next) {
  protected(req, res, next);
});

module.exports = router;
