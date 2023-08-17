require("dotenv").config();
require("app-module-path").addPath(__dirname);
const createError = require("http-errors");
const express = require("express");
const path = require("path");
var cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const authMiddleware = require("./middleware/authMiddleware");
const bodyParser = require("body-parser");

const publicRouter = require("./publicRoutes/index");
const protectedRouter = require("./protectedRoutes/index");
const { BASE_API_PATH } = require("./constants");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(`${BASE_API_PATH}`, publicRouter);
app.use(authMiddleware);
app.use(`${BASE_API_PATH}`, protectedRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
