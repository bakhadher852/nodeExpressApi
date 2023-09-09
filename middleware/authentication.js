const jwt = require("jsonwebtoken");

//----------------------------------------authentication----------------------------------------------*/

exports.authentication = async function (req, res, next) {
  try {
    let token = req.header("Authorization", "Bearer Token");
    if (!token) return res.status(400).send({ message: "login is required" });

    let splitToken = token.split(" ");

    let verifiedtoken = jwt.verify(splitToken[1], process.env.SECRET_KEY);
    if (!verifiedtoken)
      return res.status(400).send({ message: "token is invalid" });

    // let exp = verifiedtoken.option.expiresIn;
    // let iatNow = Math.floor(Date.now() / 1000);
    // if (exp < iatNow) {
    //   return res
    //     .status(401)
    //     .send({ message: "session expired, please login again" });
    // }
    //For authorization
    req.verifiedtoken = verifiedtoken;

    next();
  } catch (error) {
    res.status(401).send({ message: "Sorry, you must provide a valid token" });
  }
};
