const isDev = process.env.NODE_ENV === "development";

console.log("node env", process.env.NODE_ENV, " is dev", isDev);
const DB = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
  port: 3306,
};

module.exports = DB;
