const mongoose = require("mongoose")

const announcementSchema = new mongoose.Schema({
    announcement:String,
    event:{
        type:mongoose.Schema.ObjectId,
        ref:"Event"
    }
})

const Announcement = mongoose.model("Announcement",announcementSchema)

module.exports = Announcement