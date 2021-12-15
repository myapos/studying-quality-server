const { containsObject } = require("./containsObject");
const { findObjectIndexInArray } = require("./findObjectIndexInArray");

const aggregateObjectByProp = (array, prop) => {
  var aggr = [];

  var toSave = {
    name: "",
    children: [],
  };
  var childrenAr = [];

  var tempAr = [];

  var toCheck = "";

  for (var i in array) {
    if (toCheck && array[i][prop] === toCheck) {
      var jjjj = findObjectIndexInArray(aggr, toCheck);

      aggr[jjjj].name = toCheck;

      aggr[jjjj].children.push(array[i].children);
    } else {
      toSave = {
        name: array[i][prop],
        children: [array[i].children], //childrenAr,
      };

      aggr.push(toSave);

      //reset options

      var toSave = {
        name: "",
        children: [],
      };

      childrenAr = [];

      tempAr = [];
    }

    toCheck = array[i][prop];
  }

  return aggr;
};

module.exports = { aggregateObjectByProp };
