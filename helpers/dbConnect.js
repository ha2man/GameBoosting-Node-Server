const mongoose  = require('mongoose');
const dotenv = require("dotenv");

function dbconnect() {
  dotenv.config();
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Connected To Database"))
    .catch((err) => console.log(err));
  return mongoose.connection
}

function dbclose() {
  return mongoose.disconnect();
}

module.exports = {dbconnect, dbclose};
