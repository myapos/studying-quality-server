var mysql = require("mysql");
var DB = require("helpers/db");

/* GET fmea. */
const getFmeaScores = async (req, res, next) => {
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

  const sql = `SELECT DISTINCT System_parts.system_part_id, procedure_step, variable, failure_description, effect_description, cause_description, check_description
    FROM System_parts, Possible_failures, Available_checks, Possible_causes, Possible_effects
      WHERE System_parts.system_part_id = Possible_failures.system_part_id
        AND Available_checks.system_part_id = System_parts.system_part_id
        AND Possible_causes.possible_failure_id = Possible_failures.possible_failure_id
        AND Possible_effects.possible_failure_id = Possible_failures.possible_failure_id
  GROUP BY System_parts.system_part_id, 
           Possible_failures.possible_failure_id, 
           Possible_failures.failure_description, 
           Possible_effects.effect_description, 
           Possible_causes.cause_description, 
           Available_checks.check_description`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("fmea scores", result);

    const processedFmea = result.map((item, index) => {
      item.id = index + 1;

      if (!item.effects_score) item.effects_score = 1;

      if (!item.causes_score) item.causes_score = 1;

      if (!item.check_score) item.check_score = 1;

      if (!item.effects_score) item.effects_score = 1;

      item.RPN =
        parseInt(item.effects_score) *
        parseInt(item.causes_score) *
        parseInt(item.check_score);

      return item;
    });

    console.log("sending processedFmea", processedFmea);
    res.json([...processedFmea]);
  });

  connection.end();
};

module.exports = getFmeaScores;
