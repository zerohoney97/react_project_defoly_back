const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const {allBoard, createBoard, detailBoard,editBoard, deleteBoard} = require("../controllers/postController")
const {commentlist,createComment,editComment,deleteComment} =require("../controllers/CommentControllers")
const {recommentlist,createRecomment, editRecomment,deleteRecomment} = require("../controllers/ReCommentControllers")

// Multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("..",'front', "public","imgs","userplanimg"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname)
      cb(null,  uniqueSuffix + fileExtension);
    },
  });
  
  const upload = multer({ storage: storage });
router.get('/allboard',allBoard);
router.post("/write",upload.array("uploadedFiles",5),createBoard);
router.get('/detail/:id',detailBoard);
router.post("/edit/:id",upload.array("uploadedFiles",5),editBoard)
router.get("/delete/:id",deleteBoard)

router.get('/commentlist',commentlist)
router.post('/createComment',createComment)
router.post('/commentEdit/:id',editComment)
router.get('/commentDelet/:id',deleteComment)

router.get('/recommentlist',recommentlist)
router.post('/createRecomment',createRecomment)
router.post('/editRecomment/:id',editRecomment)
router.get('/deleteRecomment/:id',deleteRecomment)

module.exports = router
