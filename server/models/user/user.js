const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username required"],
        unique:[true,"Username already taken"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"Account already exist with this email id"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    role:{
        type:String,
        enum:["admin","rotary_admin","rotactor","participant"]
    },
    phoneNumber:{
        type:String
    },
    image:{
        type:String
    },
    registrations:[
        {
            event:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Event"
            },
            verified:{
                type:Boolean,
                default:false
            }
        }
    ],
    certificates:[
        {
            event:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Event"
            },
            url:{
                type:String,
                default:"sample.com"
            }
        }
    ]
})

const User = mongoose.model("User",userSchema)

module.exports = User