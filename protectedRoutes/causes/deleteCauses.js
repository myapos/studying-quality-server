var mysql = require("mysql");
var DB = require("helpers/db");

/* Delete causes. */
const deleteCauses = async (req, res, next) => {
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

  const { possible_cause_ids } = req.body;

  const sql = `DELETE FROM Possible_causes WHERE possible_cause_id IN (${possible_cause_ids.join(
    ","
  )})`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;

    res.json({ ...result });
  });
  connection.end();
};

module.exports = deleteCauses;
