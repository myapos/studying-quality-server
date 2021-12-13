var mysql = require("mysql");
var DB = require("helpers/db");

/* DELETE checkes. */
const deleteChecks = async (req, res, next) => {
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

  const { possible_checks_ids } = req.body;

  const sql = `DELETE FROM Available_checks WHERE available_check_id IN (${possible_checks_ids.join(
    ","
  )})`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("1 record deleted", result);

    res.json({ ...result });
  });

  connection.end();
};

module.exports = deleteChecks;
