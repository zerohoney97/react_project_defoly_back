const {User,Board} = require("../models")



exports.BoardList = async (req, res) => {
    try {
        const temp = await Board.findAll({ include: [{ model: User }] })
        const data = temp.map((value) => {
            
            return { ...value.dataValues, User: value.dataValues.User.profile_img }
        })
        res.json(data)
    } catch (error) {
        console.log("allboard 오류터짐")
        console.log(error)
    }

  }