var mysql = require("mysql");
var DB = require("helpers/db");

/* GET checks. */
const getChecks = async (req, res, next) => {
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

  const sql = `SELECT Available_checks.available_check_id,
  Available_checks.check_description,
  Available_checks.system_part_id,
  System_parts.procedure_step AS procedure_step,
  System_parts.variable AS variable
FROM Available_checks
LEFT JOIN System_parts ON Available_checks.system_part_id = System_parts.system_part_id`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Got effects data", result);

    res.json({ results: result });
  });

  connection.end();
};

module.exports = getChecks;
