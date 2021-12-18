var mysql = require("mysql");
var DB = require("helpers/db");
/* GET system parts. */
const getSeverity = async (req, res, next) => {
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

  const sql = `SELECT * from Severity`;

  console.log("sql:", sql);

  await connection.query(sql, function (err, rows, fields) {
    if (err) throw err;

    console.log("Got severity data", rows);

    res.json([...rows]);
  });

  connection.end();
};

module.exports = getSeverity;
