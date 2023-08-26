const router = require("express").Router();
const {BoardList} = require("../controllers/BoardListControllers");

// board 정보 가져오기
router.get("/boardlist", BoardList);

module.exports = router;
