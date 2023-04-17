const mongoose = require("mongoose");
const User = require("./User");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: User,
    },
  game: {
    type: String,
    required: true,
  },
  boostType: {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  current: {
    url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
  },
  desired: {
    url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
  },
  price: {
    type: Number,
    required: true,
  },
  mainOption: {
    platform: {
        type: String,
        default: null,
    },
    gamemode: {
        type: String,
        default: null,
    },
    server: {
        type: String,
        default: null,
    },
  },
  orderOption: {
    play: { type: Boolean,default: false,},
    live: { type: Boolean,default: false,},
    priority: { type: Boolean,default: false,},
    offline: { type: Boolean,default: false,},
    character: { type: Boolean,default: false,},
    offline: { type: Boolean,default: false,},
    stream: { type: Boolean,default: false,},
    premium: { type: Boolean,default: false,},
    high: { type: Boolean,default: false,},
    game: { type: Boolean,default: false,},
  },
  comment: {
    type: String,
  },
  state: {
    type: String,
    default: "Waiting",
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {timestamps: true});

module.exports = mongoose.model("Order", orderSchema);
