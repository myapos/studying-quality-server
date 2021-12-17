var mysql = require("mysql");
var DB = require("helpers/db");
var _ = require("lodash");
var { buildFishboneJsonData } = require("./buildFishboneJsonData");
/* GET fishbone. */
const getFishbone = async (req, res, next) => {
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

  const sql1 = `SELECT DISTINCT System_parts.system_part_id, procedure_step, variable, failure_description, effect_description, cause_description, check_description
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

  const sql2 = `SELECT DISTINCT procedure_step FROM System_parts`;

  await connection.query(sql2, async (err2, steps) => {
    if (err2) throw err2;

    // debug('sql1:', sql1);

    await connection.query(sql1, (err1, joinedData) => {
      if (err1) throw err1;

      console.log("Got fishbone data");

      let filteredFishboneData = steps.map((varItem) => {
        let filteredItems = joinedData.filter((item) => {
          return item.procedure_step === varItem.procedure_step;
        });

        return filteredItems;
      });

      const JsonData = buildFishboneJsonData(filteredFishboneData);
      console.log("filteredFishboneData", filteredFishboneData);
      console.log("JsonData", JsonData);

      /**
       * process data and return fishbone ready data
       **/

      /* step 1 group by procedure step */
      const firstParsing = _.groupBy(joinedData, (item) => {
        return item.procedure_step;
      });

      const grouped = {};

      /**
       *  step 2
       * - group by variable
       * - and keep only the effect description
       */

      Object.keys(firstParsing).forEach((step) => {
        const secondParsing = _.groupBy(firstParsing[step], (item) => {
          return item.variable;
        });

        let temp;

        Object.keys(secondParsing).forEach((key) => {
          temp = secondParsing[key].map((item) => item.effect_description);

          /* remove duplicates from the array */
          secondParsing[key] = _.uniq(temp);
        });

        grouped[step] = secondParsing;
      });

      res.json({
        fishbone: grouped,
      });
    });

    connection.end();
  });
};

module.exports = getFishbone;
