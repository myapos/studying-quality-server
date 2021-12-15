// import containsObject from "./containsObject";
var { containsObject } = require("./containsObject");

const distinctValues = (array) => {
  const distinct = [];

  for (var i in array) {
    if (!containsObject(array[i], distinct)) {
      distinct.push(array[i]);
    }
  }
  return distinct;
};

module.exports = { distinctValues };
