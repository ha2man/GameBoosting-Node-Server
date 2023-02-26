const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  bookid: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  timestamp: {
    type : Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Chat", chatSchema);
