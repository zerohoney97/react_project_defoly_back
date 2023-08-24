const router = require("express").Router();
const { isLogin } = require("../controllers/isLogin");
const { SavePlan } = require("../controllers/planController");
router.post("/save", isLogin, SavePlan);
// router.get("/getPic", getAttractionPicture);
module.exports = router;
