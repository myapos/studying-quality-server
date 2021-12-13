const express = require("express");
const router = express.Router();
const secret = require("./secret");
/* parts */
const getSystemParts = require("./parts/getSystemParts");
const deletePart = require("./parts/deletePart");
const createPart = require("./parts/createPart");
/* failures */
const getFailures = require("./failures/getFailures");
const createFailure = require("./failures/createFailure");
const deleteFailures = require("./failures/deleteFailures");
/* effects */
const getEffects = require("./effects/getEffects");
const createEffect = require("./effects/createEffect");
const deleteEffects = require("./effects/deleteEffects");
/* causes */
const getCauses = require("./causes/getCauses");
const createCauses = require("./causes/createCauses");
const deleteCauses = require("./causes/deleteCauses");

/* checks */
const getChecks = require("./checks/getChecks");
const createCheck = require("./checks/createCheck");
const deleteChecks = require("./checks/deleteChecks");

/* GET secret page. */
router.get("/secret", function (req, res, next) {
  secret(req, res, next);
});

/* parts */

router.get("/getSystemParts", function (req, res, next) {
  getSystemParts(req, res, next);
});

router.delete("/deletePart", function (req, res, next) {
  deletePart(req, res, next);
});

router.post("/createPart", function (req, res, next) {
  createPart(req, res, next);
});

/* failures */

router.get("/getFailures", function (req, res, next) {
  getFailures(req, res, next);
});

router.post("/createFailure", function (req, res, next) {
  createFailure(req, res, next);
});

router.delete("/deleteFailures", function (req, res, next) {
  deleteFailures(req, res, next);
});

/* effects */

router.get("/getEffects", function (req, res, next) {
  getEffects(req, res, next);
});

router.post("/createEffect", function (req, res, next) {
  createEffect(req, res, next);
});

router.delete("/deleteEffects", function (req, res, next) {
  deleteEffects(req, res, next);
});

/* causes */
router.get("/getCauses", function (req, res, next) {
  getCauses(req, res, next);
});

router.post("/createCauses", function (req, res, next) {
  createCauses(req, res, next);
});

router.delete("/deleteCauses", function (req, res, next) {
  deleteCauses(req, res, next);
});

/* checks */
router.get("/getChecks", function (req, res, next) {
  getChecks(req, res, next);
});

router.post("/createCheck", function (req, res, next) {
  createCheck(req, res, next);
});

router.delete("/deleteChecks", function (req, res, next) {
  deleteChecks(req, res, next);
});

module.exports = router;
