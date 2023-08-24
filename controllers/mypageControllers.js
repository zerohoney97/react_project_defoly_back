const {User} = require("../models")

exports.getUserInfo = async (req, res) => {
    try {
        const {front_id} = req.decoded;
        const user = await User.find({where : {front_id}})
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}