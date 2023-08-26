const router = require("express").Router();
const multer = require("multer");
const path = require("path")
const {isLogin} = require("../controllers/isLogin")
const {getUserInfo, updateUserInfo, getUserPlan, getUserReview, getUserComment, getUserNotice} = require("../controllers/mypageControllers")

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("..", "front", "public", "imgs", "profiles"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

router.get("/getInfo", getUserInfo);
router.post(
  "/updateInfo",
  isLogin,
  upload.array("profile_img", 5),
  updateUserInfo
);

router.get("/getPlan", getUserPlan);
router.get("/getReview", getUserReview);
router.get("/getComment", getUserComment);
router.get("/getNotice", getUserNotice);

module.exports = router;
