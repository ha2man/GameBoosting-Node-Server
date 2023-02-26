// const mongooseConnect = require('./dbConnect');
const User = require("../models/User");
const dotenv = require("dotenv");

function createAdminUser(){
  // Once database connection is established, we need to create an admin user by default

  try{
    dotenv.config();
    User.create({
      username: "admin",
      email: "admin@gmail.com",
      name: "Admin user created by defauly | Rahul tandel",
      password: "123456",
      usertype: "admin"
    })
    .then(() => console.log("Admin user created"))
    .catch((err) => console.log(err));
  } catch(err){
    console.log(err);
    console.log("Some error occured while creating an admin user");
  }
}

// mongooseConnect
//   .dbconnect()
//   .on('connected', () => {
//     console.log('Data Db connected');
//     setTimeout(createAdminUser, 5000);
//   })
//   .on('error', (err) => console.log("connection to db failed"))
//
// mongooseConnect.dbclose()

exports.createAdminUser = createAdminUser;
