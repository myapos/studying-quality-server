const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log("Time:", Date.now());
  // log(req);
  // check header or url parameters or post parameters for token
  var authHeader = req.headers["authorization"];

  const token = authHeader.split(" ")[1];
  console.log("token received: ", token);
  // log(req.query);
  // log(req.body);
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, "agkistri", function (err, decoded) {
      if (err) {
        return res.json({
          message: "Failed to authenticate token.",
        });
      } else {
        // if everything is good, save to request for use in other routes
        // return res.json({ success: true, message: 'Authenticated succesfully token.' });
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      message: "No token provided.",
    });
  }
};

module.exports = authMiddleware;
