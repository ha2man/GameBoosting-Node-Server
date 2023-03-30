const User = require("../models/User");
const Job = require("../models/Job");
const nodemailer = require('nodemailer');

const sendEmail = async (job_id, job_descrition, email) => {
  try{
    /*
      To use this email service, go to this link and turn off the less secure app access for this gmail account
      https://support.google.com/accounts/answer/6010255?hl=en#zippy=%2Cif-less-secure-app-access-is-on-for-your-account
    */
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        secure: true,
    });
    const mailData = {
        from: process.env.EMAIL,
        to: email,
        subject: `New job posted. ${job_id}`,
        text: description,
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error){
        console.log("Mail could not be sent because of this error");
        console.log(error);
      } else{
        console.log({ message: "Mail send", message_id: info.messageId });
      }
    });
  } catch (err) {
    console.log("Mail could not be sent because of this error");
    console.log(err);
  }
}

const getAllJobs = async (req, res, next) => {
  try {
    jobs = await Job.find();
    return res.status(200).json({ jobs });
  } catch (err) {
    console.log(err);
    return res.status(400).send("No jobs found");
  }
};

const getAllPreviousJobs = async (req, res, next) => {
  try {
    let jobs;
    if(!req.cookies || !req.cookies.userid)return res.status(400).send({msg:"Login first"});
    usertype = req.cookies.usertype;
    if(usertype == "freelancer")
      jobs = await Job.find({acceptedBy: req.cookies.userid});
    else if(usertype == "employer")
      jobs = await Job.find({postedBy: req.cookies.userid});
    return res.status(200).json({ jobs });
  } catch (err) {
    console.log(err);
    return res.status(400).send("No jobs found");
  }
};

const getJobById = async (req, res, next) => {
  try {
    if(!req.cookies || !req.cookies.userid)return res.status(400).send({msg: "Login first"});
    const id = req.params.id;
    let job;
    job = await Job.findById(id);
    return res.status(200).json({ job });
  } catch (err) {
    console.log(err);
    return res.status(400).send({msg: "Unable to find job by id"});
  }
};

const createJob = async (req, res, next) => {
  try {
    if(!req.cookies || !req.cookies.userid)return res.status(400).send({msg: "Login first"});

    if(req.cookies.usertype !== "employer")
      return res.status(400).send("Not allowed");
    const { title, description, minBudget, maxBudget, currency, deadline } = req.body;
    let job;
    job = await Job.create({
      title,
      description,
      minBudget,
      maxBudget,
      currency,
      deadline,
      postedBy: req.cookies.userid,
    });
    return res.status(200).json({job})
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unable to post the job");
  }
};

const updateJob = async (req, res, next) => {
  try {
    if(!req.cookies || !req.cookies.userid)return res.status(400).send("Login first");
    if(req.cookies.usertype !== "employer")
      return res.status(400).json({msg : "Not allowed"});

    const id = req.params.id;
    const { title, description, minBudget, maxBudget, currency, deadline } = req.body;
    let job;

    job = await Job.findById(id);
    if((req.cookies.usertype !== "employer")|| (req.cookies.usertype === "employer" && job.postedBy != req.cookies.userid))
      return res.status(400).send({msg : "Not allowed"});

    job = await Job.findByIdAndUpdate(id, {
      title,
      description,
      minBudget,
      maxBudget,
      currency,
      deadline,
      postedBy: req.cookies.userid,
    }, {new: true});

    return res.status(200).json({ job, message: "Job successfully updated" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Unable to find the job by this id" });
  }
};

const acceptJob = async (req, res, next) => {
  try {
    if(!req.cookies || !req.cookies.userid)return res.status(400).send("Login first");
    if(req.cookies.usertype !== "freelancer")
      return res.status(400).send("Not allowed");
    const id = req.params.id;
    let job;

    job = await Job.findById(id);
    if(req.cookies.usertype === "freelancer" && job.acceptedBy !== undefined)
      return res.status(400).send("Not allowed");

    job = await Job.findByIdAndUpdate(id, {
      acceptedBy: req.cookies.userid
    }, {new: true});

    return res.status(200).send("Job assigned to " + req.cookies.username + " successfully.");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Server error. Unable To update job");
  }
};

const deleteJob = async (req, res, next) => {
  try {
    if(!req.cookies || !req.cookies.userid) return res.status(400).send("Login first");
    if(req.cookies.usertype !== "admin")
      return res.status(400).send("Not allowed");
    const id = req.params.id;
    let job;

    job = await Job.findByIdAndDelete(id);

    return res.status(200).send("Job is deleted by " + req.cookies.username + " successfully.");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Server error. Unable To delete job");
  }
}

const publishJob = async (req, res, next) => {
  try {
    if(!req.cookies || !req.cookies.userid)return res.status(400).send("Login first");
    if(req.cookies.usertype !== "admin")
      return res.status(400).json({msg : "Not allowed"});

    const id = req.params.id;

    job = await Job.findByIdAndUpdate(id, {
      visiblePublicly: req.body.visiblePublicly,
    }, {new: true});

    return res.status(200).send("Job is successfully published");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unable to find the job by this id");
  }
};

exports.getAllJobs = getAllJobs;
exports.getAllPreviousJobs = getAllPreviousJobs;
exports.getJobById = getJobById;
exports.createJob = createJob;
exports.updateJob = updateJob;
exports.acceptJob = acceptJob;
exports.deleteJob = deleteJob;
exports.publishJob = publishJob;