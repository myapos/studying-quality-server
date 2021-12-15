const findObjectIndexInArray = (aggr, toCheck) => {
  for (var i = 0; i < aggr.length; i++) {
    if (aggr[i].name === toCheck) {
      return i;
    } else if (i === length) {
      return 0;
    }
  }
};

module.exports = { findObjectIndexInArray };
