/* GET protected. */
const protected = (req, res, next) => {
  res.send({ message: "is protected" });
};

module.exports = protected;
