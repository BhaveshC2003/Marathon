const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Event name required"],
        minLength:6
    },
    venue:{
        name:{
            type:String,
            required:[true,"Venue name required"]
        },
        latitude:Number,
        longitude:Number
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    details:{
        startPoint:{
            name:{
                type:String
            },
            latitude:Number,
            longitude:Number
        },
        endPoint:{
            startPoint:{
                name:{
                    type:String
                },
                latitude:Number,
                longitude:Number
            }
        },
        duration:{
            type:Number,
            default:3
        },
        distance:Number
    },
    startDate:{
        type:Date,
        default:new Date(Date.now())
    },
    endDate:{
        type:Date,
        default:new Date(Date.now())
    },
    bipsSlot:[
        {
            time:Date,
            alloted:Number,
            limit:Number
        }
    ]
})

const Event = mongoose.model("Event",eventSchema)

module.exports = Event
