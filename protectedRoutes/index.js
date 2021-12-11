const express = require("express");
const router = express.Router();
const secret = require("./secret");
const getSystemParts = require("./getSystemParts");
const deletePart = require("./deletePart");
const createPart = require("./createPart");

/* GET secrete page. */
router.get("/secret", function (req, res, next) {
  secret(req, res, next);
});

router.get("/getSystemParts", function (req, res, next) {
  getSystemParts(req, res, next);
});

router.delete("/deletePart", function (req, res, next) {
  deletePart(req, res, next);
});

router.post("/createPart", function (req, res, next) {
  createPart(req, res, next);
});

module.exports = router;
