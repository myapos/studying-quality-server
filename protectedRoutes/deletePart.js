var mysql = require("mysql");
var DB = require("../helpers/db");

const deletePart = async (req, res, next) => {
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

  console.log("req", req);

  const { system_part_ids } = req.body;
  const sql = `DELETE FROM System_parts WHERE system_part_id IN (${system_part_ids.join(
    ","
  )})`;

  await connection.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("1 record deleted", result);
    res.send({ ...result });
  });
};

module.exports = deletePart;
