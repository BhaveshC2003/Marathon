const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
    participant:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    event:{
        type:mongoose.Schema.ObjectId,
        ref:"Event"
    },
    date:{
        type:Date,
        default:new Date(Date.now())
    },
    verified:{
        type:Boolean,
        default:false
    }
})

const Registration = mongoose.model("Registration",registrationSchema)

module.exports = Registration