const nodemailer = require('nodemailer');
const constants=require("./../helpers/constants");
const User = require('../models/User');
const Order = require('../models/Order');
const _jade = require('jade');
const fs = require('fs');

const sendEmail = async (target_email, context) => {
    try{
        /*
          To use this email service, go to this link and turn off the less secure app access for this gmail account
          https://support.google.com/accounts/answer/6010255?hl=en#zippy=%2Cif-less-secure-app-access-is-on-for-your-account
        */
          const template = process.cwd() + '/emails/index.jade';
          fs.readFile(template, 'utf8', function (err, file) {
            if (err) {
              //handle errors
              console.log('ERROR!');
              return res.send('ERROR!');
            }
            else {
              //compile jade template into function
              var compiledTmpl = _jade.compile(file, { filename: template });

              // get html back as a string with the context applied;
              var html = compiledTmpl(context);
              const email = target_email;
              const transporter = nodemailer.createTransport({
                port: 587,
                host: "send.one.com",
                ignoreTLS: false,
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASSWORD,
                },
                secure: false,
              });
              const mailData = {
                from: '"RelatedBoost" <support@relatedboost.com>',
                to: email,
                subject: "Thank you for your new order",
                html,
              };
      
              transporter.sendMail(mailData, (error, info) => {
                if (error) {
                  console.log("Mail could not be sent because of this error");
                  console.log(error);
      
                } else {
                  console.log({ message: "Mail send", message_id: info.messageId });
                }
              })
              return res.status(200).json({ status: "success" });
            }
          });
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
    const { email, game, boostType, current, desired, price, account, mainOption, orderOption, comment } = req.body;
    let user, order;

    user = await User.findOne({ email });

    order = await Order.create({
      userId: user.id,
      game,
      boostType,
      current,
      desired,
      price,
      account,
      mainOption,
      orderOption,
      comment,
    });
    let options = [];
    if (orderOption.play) options.push("Play with Booster");
    if (orderOption.live) options.push("Live stream");
    if (orderOption.priority) options.push("Priority Order");
    if (orderOption.offline) options.push("Appear Offline");
    if (orderOption.character) options.push("Specific Characters");
    if (orderOption.stream) options.push("Stream games");
    if (orderOption.premium) options.push("Premium Coaching");
    if (orderOption.high) options.push("High-MMR account");
    if (orderOption.game) options.push("Games instead of wins");

    var context = {
      game: game==="rocket"?'Rocket League Boosting':"League of Legends",
      email: email,
      boostType: boostType.name,
      current: current.name,
      desired: desired.name,
      price: price,
      platform: mainOption.platform!=null?mainOption.platform:"",
      gamemode: mainOption.gamemode!=null?mainOption.gamemode:"",
      server: mainOption.server!=null?mainOption.server:"",
      options,
    };
    console.log(context);
    // await sendEmail(email, context);
    // await sendEmail(process.env.EMAIL, context);
    return res.status(200).json({
      "message": constants.SUCCESSFUL_ORDER_CREATE,
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(constants.INTERNAL_SERVER_ERROR);
  }
}

exports.createOrder = createOrder;
exports.getOrder = getOrder;
exports.getAllOrders = getAllOrders;