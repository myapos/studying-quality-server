/* GET health. */
const health = (req, res, next) => {
  res.send({ message: "server is up" });
};

module.exports = health;
