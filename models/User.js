const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    default: 0
  },
  name: {
    type: String,
    required: false,
    default: ""
  },
  address: {
    type: String,
    required: false,
    default: ""
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false
  },
  canAcceptJob: {
    type: Boolean,
    required: true,
    default: true
  },
  verifiedStatus: {
    email: {
      type : Date,
      default: Date.now
    },
    phone: {
      type : Date,
      default: Date.now
    },
    payment: {
      type : Date,
      default: Date.now
    }
  }
}, {timestamps: true});

// Hashing Password to Secure
userSchema.pre('save', async function(next){
  if(this.isModified('password')){
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
})

// Generate Tokens to Verify User
userSchema.methods.generateToken = async function(){
  try {
    let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
    this.token = generatedToken;//this.tokens.concat({token : generatedToken});
    await this.save();
    return generatedToken;
  } catch (error) {
    console.log(error)
  }
}

module.exports = mongoose.model("User", userSchema);
