const jwt = require("jsonwebtoken");

exports.isLogin = async (req, res, next) => {
  try {
    const obj = req.session;

    const access_token = obj.access_token;

    jwt.verify(access_token, process.env.ACCESSTOKENKEY, (err, decoded) => {
      if (err) {
        console.log(err);

        res.send("다시 로그인 해주세요");
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } catch (error) {
    console.log(error);
  }
};
