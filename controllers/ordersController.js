const nodemailer = require('nodemailer');
const constants=require("./../helpers/constants");
const User = require('../models/User');
const Order = require('../models/Order');

const sendEmail = async (req, res, next) => {
    try{
        /*
          To use this email service, go to this link and turn off the less secure app access for this gmail account
          https://support.google.com/accounts/answer/6010255?hl=en#zippy=%2Cif-less-secure-app-access-is-on-for-your-account
        */
        const email = "tomasjinn356@gmail.com";
        const description = "New order is detected";
        const transporter = nodemailer.createTransport({
            port: 587,
            host: "smtp.gmail.com",
            requiresAuth: true,
            domains: ["gmail.com", "googlemail.com"],
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            secure: true,
        });
        const mailData = {
            from: process.env.EMAIL,
            to: email,
            subject: "Order Test",
            // subject: `New job posted. ${job_id}`,
            text: description,
        };
    
        transporter.sendMail(mailData, (error, info) => {
          if (error){
            console.log("Mail could not be sent because of this error");
            console.log(error);
            
          } else{
            console.log({ message: "Mail send", message_id: info.messageId });
          }
        })
    } catch (err) {
        console.log("Mail could not be sent because of this error");
        console.log(err);
    }
}

const getOrder = async (req, res, next) => {}
const getAllOrders = async (req, res, next) => {
  try {
    const { limit } = req.body;
    const orders = await Order.find().sort({_id:-1}).limit(limit * 4);
    return res.status(200).json({orders});
  } catch (err) {
    console.log(err);
    return res.status(500).send(constants.INTERNAL_SERVER_ERROR);
  }
}
const createOrder = async ( req, res, next ) => {
  try {
    const { email, game, boostType, current, desired, price, mainOption, orderOption, comment } = req.body;
    let user, order;

    user = await User.findOne({ email });

    order = await Order.create({
      userId: user.id,
      game,
      boostType,
      current,
      desired,
      price,
      mainOption,
      orderOption,
      comment,
    });
    return res.status(200).json({
      "message": constants.SUCCESSFUL_ORDER_CREATE,
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(constants.INTERNAL_SERVER_ERROR);
  }
}

exports.sendEmail = sendEmail;
exports.createOrder = createOrder;
exports.getOrder = getOrder;
exports.getAllOrders = getAllOrders;