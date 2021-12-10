/* GET protected. */
const secret = (req, res, next) => {
  res.send({ message: "is secret" });
};

module.exports = secret;
