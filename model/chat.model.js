const mongoose = require("mongoose");

const chatScema = mongoose.Schema({
    senderName: {
        type: String,
      },
      senderPhoto: {
        type: String,
      },
      message: {
        type: String,
      },
      reciverName: {
        type: String,
      },
      reciverPhoto: {
        type: String,
      },
      messageType: {
        type: String,
        enum: ['sender', 'receiver'],
        required: true
      },
      image : {
        type : String,
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
})

const Chat = mongoose.model("chat", chatScema);
module.exports = Chat;