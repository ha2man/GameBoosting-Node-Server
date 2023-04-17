const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/User");

const constants=require("./../helpers/constants")

const authenticate = async (req, res, next)=>{
  try {
    // Get the Cookies
    const token = req.cookies.jwt;
    if(!token){
      res.status(401).send("No token")
    }else{
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await User.findOne({_id: verifyToken._id, token: token});
      if(!rootUser){
        res.status(401).send("User Not Found")
      }else{
        res.status(200).send("Authorized User")
      }
    }
  } catch (error) {
    res.status(401).send("Error")
    console.log(error)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user;
    user = await User.findOne({ email });
    if (user) {
      // Verify Password
      const isMatch = await bcryptjs.compare(password, user.password);

      if (isMatch) {
        // Generate Token Which is Define in User Schema
        const token = await user.generateToken();
        res.cookie("usertype", user.usertype)
        res.cookie("jwt", token)
        res.cookie("userid", user.id)
        res.cookie("email", user.email)
        return res.status(200).json({
          "name": user.name,
          "email": user.email,
          "discord": user.discord,
          "usertype": user.usertype,
          "jwt": token,
          "userid": user.id,
          "message": constants.LOGIN_SUCCESSFUL
        })
      } else {
        return res.status(401).send(constants.INVALID_CREDENTIALS);
      }
    } else {
      return res.status(401).send(constants.INVALID_CREDENTIALS);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(constants.INTERNAL_SERVER_ERROR);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { name, email, discord, password } = req.body;
    let user;
    usertype = "user";
    // if(req.cookies && req.cookies.usertype === "admin")
    //   usertype = "employee";

    user = await User.findOne({ email });
    if(user){return res.status(400).send(constants.EMAIL_ALREADY_EXIST);}
    if (discord) {
      user = await User.findOne({ discord });
      if(user){return res.status(400).send(constants.DISCORD_ALREADY_EXIST);}
    }

    user = await User.create({
      name,
      email,
      discord,
      password,
      usertype
    });
    return res.status(200).json({
      "userid": user.id,
      "message": constants.SUCCESSFUL_REGISTRATION
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(constants.INTERNAL_SERVER_ERROR);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { email, password, discord, comment } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await bcryptjs.compare(password, user.password);
      if (isMatch) {
        return res.status(200).json({
          userid: user.id,
        })
      }
      else {
        return res.status(401).send(constants.INVALID_CREDENTIALS);
      }
    }
    else {
      return res.status(401).send(constants.INVALID_CREDENTIALS);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(constants.INTERNAL_SERVER_ERROR);
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    let users;
    usertype = req.cookies.usertype;
    if(usertype == "admin"){
      users = await User.find();
      return res.status(200).json({ users });
    }else
      return res.status(400).send("Not allowed");
  } catch (err) {
    console.log(err);
    return res.status(400).send("No users found");
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if(!req.cookies || !req.cookies.email)return res.status(400).send("Login first");
    if(req.cookies.usertype !== "admin"){
      return res.status(400).send("No users found");
    }
    const id = req.params.id;
    let user;
    await User.findByIdAndRemove(id);
    return res.status(200).send("User Successfully Deleted");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unable To Delete this user");
  }
};

const logout = async (req, res, next) => {
  res.clearCookie("jwt")
  return res.status(200).send("Logged out")
};

exports.authenticate = authenticate;
exports.login = login;
exports.registerUser = registerUser;
exports.logout = logout;
exports.getUser = getUser;
exports.getAllUsers = getAllUsers
exports.deleteUser = deleteUser
