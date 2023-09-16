const mongoose = require("mongoose")

const scheduleSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    event:{
        type:mongoose.Schema.ObjectId,
        ref:"Event"
    },
    slot:{
        time:{
            type:String
        },
        date:{
            type:String,
            default:new Date(Date.now())
        }
    }
})

const Schedule = mongoose.model("Schedule",scheduleSchema)

module.exports = Schedule