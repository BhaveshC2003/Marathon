const mongoose = require("mongoose")

const querySchema = new mongoose.Schema({
    query:String,
    answer:{
        type:String,
        default:"Not answered"
    },
    askedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    answeredBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:false
    },
    event:{
        type:mongoose.Schema.ObjectId,
        ref:"Event"
    }
})

const Query = mongoose.model("Query",querySchema)

module.exports = Query