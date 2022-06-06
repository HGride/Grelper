const mongoose = require("mongoose");

const userModel = mongoose.model(
    "grelper_db",
    {
        name:{
            type: String,
            require: true
        },
        fullname:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
    },
    "users"
)

module.exports = { userModel }