var mysql = require("mysql");
var DB = require("helpers/db");

/* Create causes. */
const createCauses = async (req, res, next) => {
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

  const { cause_description, possible_failure_id } = req.body;

  const sql = `INSERT INTO Possible_causes (cause_description, possible_failure_id)
   VALUES ('${cause_description}', '${possible_failure_id}')`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;

    res.json({ ...result });
  });
  connection.end();
};

module.exports = createCauses;
