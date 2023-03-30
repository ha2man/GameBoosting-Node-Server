const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  minBudget: {
    type: Number,
    required: true,
  },
  maxBudget: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "$",
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  deadline: {
    type : Date,
    default: Date.now
  },
  acceptedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  visiblePublicly: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = mongoose.model("Job", jobSchema);
