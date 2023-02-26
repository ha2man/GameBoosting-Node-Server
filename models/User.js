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
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  canAcceptJob: {
    type: Boolean,
    required: true,
    default: true
  }
});

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
    this.tokens = this.tokens.concat({token : generatedToken});
    await this.save();
    return generatedToken;
  } catch (error) {
    console.log(error)
  }
}

module.exports = mongoose.model("User", userSchema);
