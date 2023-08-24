const { User } = require("../models");
const bcrypt = require("bcrypt");
exports.SaveUserInfo = async (req, res) => {
  const { user_id, user_pw, nickname, email } = req.body;

  try {
    const data = await User.findOne({
      where: {
        user_id,
      },
    });
    if (data) {
      res.send("already user exist");
    } else {
      bcrypt.hash(user_pw, 10, async (err, hash) => {
        console.log(hash);
        if (err) {
          console.log(err);
          res.send("Error hashing password in SaveUserInfo");
        } else {
          const result = await User.create({
            user_id,
            user_pw: hash,
            nickname,
            email,
            is_accept: false,
          });
          res.send("user signUp success");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

exports.ValidateDuplicateUserId = async (req, res) => {
  console.log("들어오니????????????????/");
  const { user_id } = req.body;

  try {
    const userInfo = await User.findOne({ where: { user_id } });
    if (userInfo) {
      res.send("already user exist");
    } else {
      res.send("success");
    }
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};
exports.ValidateDuplicateNickName = async (req, res) => {
  const { nickname } = req.body;

  try {
    const userInfo = await User.findOne({ where: { nickname } });
    if (userInfo) {
      res.send("already user exist");
    } else {
      res.send("success");
    }
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};
