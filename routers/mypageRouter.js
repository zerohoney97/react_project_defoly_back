const router = require("express").Router();
const {isLogin} = require("../controllers/isLogin")
const {getUserInfo} = require("../controllers/mypageControllers")

router.get("/getInfo", isLogin, getUserInfo)


module.exports = router;