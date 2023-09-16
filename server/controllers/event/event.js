const Event = require("../../models/event/event")
const Schedule = require("../../models/schedule/schedule")

//create event --Rotract Head
exports.createEvent = async(req,res,next)=>{
    try{
        const myCloud = await cloudinary.v2.uploader.upload(req.body.image,{
            folder:"Events"
        })
        req.body.image = myCloud.url
        const event = await Event.create(req.body)
        res.status(201).json({
            success:true,
            event
        })
    }catch(err){
        next(new ErrorHandler())
    }
}

//add bibs slot --Rotactor
exports.addSlot = async(req,res,next)=>{
    try{
        const event = await Event.findById(req.body.event)
        event.bipsSlot.push(req.body.slot)
        await event.save()
        res.status(200).json({
            success:true,
            message:"Added slot successfully"
        })
    }catch(err){
        next(new ErrorHandler())
    }
}



