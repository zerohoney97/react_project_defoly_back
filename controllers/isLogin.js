const jwt = require("jsonwebtoken");

exports.isLogin = async (req, res, next) => {
  try {
    // console.log("token :드렁옴? ");
    const obj = req.sessionStore.sessions;
    const session = Object.values(obj)[0];
    // const {access_token} = req.sessionStore.sessions;
    const sessionObj=JSON.parse(session)
    // console.log("token : ", sessionObj.access_token);
    
    // console.log("session : ", sessionObj);
    const access_token = sessionObj.access_token

    jwt.verify(access_token, process.env.ACCESSTOKENKEY, (err, decoded) => {
      if (err) {
        console.log(err);
        res.send("다시 로그인 해주세요");
      } else {
        console.log('통과');
        req.decoded = decoded;
        next();
      }
    });
  } catch (error) {
    console.log(error)
  }
};
