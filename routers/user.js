const router = require("express").Router();
const {loginClick} = require("../controllers/loginControllers");

const {
  SaveUserInfo,
  ValidateDuplicateNickName,
  ValidateDuplicateUserId,
} = require("../controllers/SignUpControllers");

// 회원가입
router.post("/duplicateId", ValidateDuplicateUserId);
router.post("/duplicateNickName", ValidateDuplicateNickName);
router.post("/signUp", SaveUserInfo);
module.exports = router;

// 로그인
router.post("/login", loginClick);

module.exports = router;