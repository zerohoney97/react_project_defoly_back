const {Comment, ReComment} = require("../models")

// 대댓글을 보여줄 수 있는 컨트롤러
exports.recommentlist =async(req,res)=>{
    try {
        const data = await ReComment.findAll()
        res.json(data)
    } catch (error) {
        console.log("commentlist 오류터짐")
        console.log(error)
    }
}
// 대댓글 작성 컨트롤러
exports.createRecomment = async(req,res)=>{
    const {nickname, id} = req.decoded;
    const {comment_id, detail}=req.body
    try {
        await ReComment.create({
            comment_id,
            nickname : nickname,
            detail : detail,
            user_id:id
        })
        res.send()
    } catch (error) {
        console.log("대댓글 작성 컨트롤러레서 오류남")
        console.log(error)
    }
}

// 대댓글 수정 컨트롤러
exports.editRecomment = async(req,res)=>{
    const {id}=req.params
    const {detail}=req.body;
    try {
        await ReComment.update({detail},{where :{id}})
        res.send("Recomment success")
    } catch (error) {
        console.log("대댓글 수정 컨트롤러 에서 오류남")
        console.log(error)
    }
}

// 대댓글 삭제 컨트롤러
exports.deleteRecomment = async(req,res)=>{
    try {
        const { id } = req.params;
        await ReComment.destroy({ where: { id } });
        res.send("delete success")
      } catch (error) {
          console.log("대댓글 삭제 컨트롤러 에러남")
        console.error(error);
      }
}