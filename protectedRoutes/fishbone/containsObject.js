const { isEqual } = require("lodash");

const containsObject = (obj, list) => {
  let i;

  for (i = 0; i < list.length; i++) {
    if (isEqual(list[i], obj)) {
      return true;
    }
  }

  return false;
};

module.exports = {
  containsObject,
};
