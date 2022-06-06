const mongoose = require('mongoose')

const messageModel = mongoose.model(
    "grelper_db",
    {
        user_name:{
            type: String,
            require: true
        },
        user_email:{
            type: String,
            require:true
        },
        content:{
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "messages"
)

module.exports = { messageModel }