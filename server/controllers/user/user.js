const User = require("../../models/user/user")
const Event = require("../../models/event/event")
const generateToken = require("../../utils/generateToken")
const Query = require("../../models/query/query")
const cloudinary = require("cloudinary")
const Announcement = require("../../models/announcement/announcement")
const sendEmail = require("../../utils/sendMail")
const ErrorHandler = require("../../utils/errorHandler")
const Registration = require("../../models/registration/registration")
const axios = require("axios")

//load user
exports.loadUser = async(req,res,next)=>{
    const user = await User.findById(req.user_id)
    res.status(200).json({
        success:true,
        user
    })
}

//register user
exports.register = async(req,res,next)=>{
    try{
        const myCloud = await cloudinary.v2.uploader.upload(req.body.image,{
            folder:"Users"
        })
        req.body.image = myCloud.url
        const user = await User.create(req.body)
        const token = generateToken(user._id)
        res.cookie("token",token).status(201).json({
            success:true,
            user,
            token
        })
    }catch(err){
        next(new ErrorHandler())
    }
}

//login user
exports.login = async(req,res,next)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user)
            return next(new ErrorHandler(message="User not found", statusCode=400))
        if(user.password !== req.body.password)
            return next(new ErrorHandler(message="Invaild password", statusCode=400))
        const token = generateToken(user._id)
        res.cookie("token",token).status(200).json({
            success:true,
            user
        })
    }catch(err){
        next(new ErrorHandler())
    }
}

//logout user
exports.logoutUser = (req,res,next)=>{
    res.clearCookie("token").status(200).json({
        success:true
    })
}

//register to event --participant
exports.registerToEvent = async(req,res,next)=>{
    try{
        /*
            integrating stripe api for payment
        */
        await Registration.create({participant:req.user_id,event:req.body.event})
        res.status(200).json({
            success:true,
            message:"Registration successful"
        })
    }catch(err){
        next(new ErrorHandler())
    }
}

//ask query --participant
exports.askQuery = async(req,res,next)=>{
    try{
        const user = await User.findById(req.user_id)
        const query = await Query.create({query:req.body.query,askedBy:user._id})
        await query.save()
        res.status(201).json({
            success:true,
            message:"Your query has been posted."
        })
    }catch(err){
        next(new ErrorHandler())
    }
}

//answer query --rotactor
exports.answerQuery = async(req,res,next)=>{
    try{
        const query = await Query.findById(req.body.query).populate("askedBy")
        const emails = [query.askedBy.email]
        query.answer = req.body.answer
        query.answeredBy = req.user_id
        await query.save()
        sendEmail({emails,subject:"Query Answered",message:"Your query has been answered"})
        res.status(200).json({
            success:true,
            message:"Query has been answered"
        })
    }catch(err){
        next(new ErrorHandler())
    }   
}

//make announcement --Rotract
exports.makeAnnouncement = async(req,res,next)=>{
    try{
        const announcement = await Announcement.create(req.body)
        const users = await User.find().select("email")
        const emails = []
        users.forEach(user=>emails.push(user.email))
        sendEmail({emails,subject:req.body.subject,message:"New announcement on rotaract"})
        res.status(201).json({
            success:true,
            message:"Announcement maded successfully"
        })
    }catch(err){
        next(new ErrorHandler())
    }   
}

//schedule bip slot --participant
exports.scheduleBipSlot = async(req,res,next)=>{
    try{
        const event = await Event.findById(req.body.event)
        event.bipsSlot.forEach((slot)=>{
            if(slot.time===req.body.date){
                if(slot.limit === slot.alloted)
                    return next(new ErrorHandler("Slot full",400))
                else
                    slot.alloted++   
            }            
        })
        await event.save()
        res.status(200).json({
            success:true,
            message:"Slot alloted"
        })
    }catch(err){
        next(new ErrorHandler())
    }
}


