var mysql = require("mysql");
var DB = require("helpers/db");

/* POST check. */
const createCheck = async (req, res, next) => {
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

  const { check_description, system_part_id } = req.body;

  const sql = `INSERT INTO Available_checks (check_description, system_part_id)
   VALUES ('${check_description}', '${system_part_id}')`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("1 record inserted", result);

    res.json({ ...result });
  });
  connection.end();
};

module.exports = createCheck;
