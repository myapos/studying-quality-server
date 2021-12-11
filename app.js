require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
var cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const authMiddleware = require("./middleware/authMiddleware");

const publicRouter = require("./publicRoutes/index");
const protectedRouter = require("./protectedRoutes/index");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", publicRouter);
app.use(authMiddleware);
app.use("/", protectedRouter);

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