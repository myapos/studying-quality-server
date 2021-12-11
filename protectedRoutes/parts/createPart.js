var mysql = require("mysql");
var DB = require("helpers/db");

const createPart = async (req, res, next) => {
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

  const { procedure_step, variable } = req.body;

  const sql =
    "INSERT INTO System_parts (procedure_step, variable) VALUES ('" +
    procedure_step +
    "', '" +
    variable +
    "')";

  console.log("sql", sql);

  await connection.query(sql, function (err, result) {
    if (err) throw err;

    // console.log("1 record deleted", result);
    res.send({ ...result });
  });
};

module.exports = createPart;
