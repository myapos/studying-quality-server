var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var mysql = require("mysql");
var DB = require("../helpers/db");

/* GET authenticate. */
const authenticate = async (req, res, next) => {
  const { username, password } = req.query;
  console.log(username, password);
  //   var token = jwt.sign({ foo: "bar" }, "shhhhh");

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

  const sql = `SELECT User.password from User where User.username='${username}'`;

  console.log("sql:", sql);
  await connection.query(sql, (err, result) => {
    console.log("result:", result);

    // if (result && result.length) {

    // log("Logged in succesfully with password:", result[0].password);

    const hash = result && result[0] && result[0].password;

    bcrypt.compare(password, hash, function (err, doesMatch) {
      if (doesMatch) {
        //here we have to return json web token

        // if user is found and password is right
        // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password

        const payload = {
          admin: "admin",
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: 21600, // expires in 6 hours --> 86400 secs
        });

        // return the information including token as JSON

        res.json({
          success: true,
          message: "Enjoy your token!",
          jwt: token,
        });
      } else {
        //go away
        res.status(404).send({ message: "Wrong credentials" });
      }
    });

    // } else {

    //   res.status(404).send('Something bad happened');

    // }
  });

  connection.end();
  //   res.send({ jwt: token });
};

module.exports = authenticate;
