var mysql = require("mysql");
var DB = require("helpers/db");

/* GET failures. */
const getFailures = async (req, res, next) => {
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

  const sql = `SELECT Possible_failures.possible_failure_id,
       Possible_failures.failure_description,
       Possible_failures.system_part_id,
       System_parts.procedure_step,
       System_parts.variable
    FROM Possible_failures
    LEFT JOIN System_parts ON Possible_failures.system_part_id = System_parts.system_part_id`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Got failures data", result);

    res.json({ results: result });
  });

  connection.end();
};

module.exports = getFailures;
