var mysql = require("mysql");
var DB = require("helpers/db");

/* GET effects. */
const getEffects = async (req, res, next) => {
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

  const sql = `SELECT Possible_effects.possible_effect_id,
     Possible_effects.effect_description,
     Possible_effects.possible_failure_id,
     Possible_failures.failure_description AS failure_description
  FROM Possible_effects
  LEFT JOIN Possible_failures ON Possible_effects.possible_failure_id = Possible_failures.possible_failure_id`;
  await connection.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Got effects data", result);

    res.json({ results: result });
  });

  connection.end();
};

module.exports = getEffects;
