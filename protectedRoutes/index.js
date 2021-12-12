const express = require("express");
const router = express.Router();
const secret = require("./secret");
const getSystemParts = require("./parts/getSystemParts");
const deletePart = require("./parts/deletePart");
const createPart = require("./parts/createPart");
const getFailures = require("./failures/getFailures");
const createFailure = require("./failures/createFailure");
const deleteFailures = require("./failures/deleteFailures");
const getEffects = require("./effects/getEffects");
const createEffect = require("./effects/createEffect");
const deleteEffects = require("./effects/deleteEffects");

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

router.get("/getFailures", function (req, res, next) {
  getFailures(req, res, next);
});

router.post("/createFailure", function (req, res, next) {
  createFailure(req, res, next);
});

router.delete("/deleteFailures", function (req, res, next) {
  deleteFailures(req, res, next);
});

router.get("/getEffects", function (req, res, next) {
  getEffects(req, res, next);
});

router.post("/createEffect", function (req, res, next) {
  createEffect(req, res, next);
});

router.delete("/deleteEffects", function (req, res, next) {
  deleteEffect(req, res, next);
});

module.exports = router;
