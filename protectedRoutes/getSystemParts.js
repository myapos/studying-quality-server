var mysql = require("mysql");
var DB = require("../helpers/db");
/* GET system parts. */
const getSystemParts = async (req, res, next) => {
  console.log(
    "DB",
    DB,
    "host:",
    DB.host,
    " username ",
    DB.username,
    " pwd:",
    DB.password
  );

  const connection = mysql.createConnection({
    host: DB.host,
    user: DB.username,
    port: DB.port,
    password: DB.password,
    database: DB.databaseName,
  });

  connection.connect();

  const sql = `SELECT * FROM System_parts`;

  console.log("sql:", sql);

  await connection.query(sql, function (err, rows, fields) {
    if (err) throw err;

    console.log("Got system parts data", rows);

    res.json({ results: rows });
  });

  connection.end();
};

module.exports = getSystemParts;
