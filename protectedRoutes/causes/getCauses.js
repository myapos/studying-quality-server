var mysql = require("mysql");
var DB = require("helpers/db");

/* GET causes. */
const getCauses = async (req, res, next) => {
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

  const sql = `SELECT Possible_causes.possible_cause_id,
     Possible_causes.cause_description,
     Possible_causes.possible_failure_id,
     Possible_failures.failure_description AS failure_description
  FROM Possible_causes
  LEFT JOIN Possible_failures ON Possible_causes.possible_failure_id = Possible_failures.possible_failure_id`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Got causes data", result);

    res.json({ results: result });
  });

  connection.end();
};

module.exports = getCauses;
