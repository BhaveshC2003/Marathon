const User = require("../../models/user/user")
const Event = require("../../models/event/event")
const generateToken = require("../../utils/generateToken")
const Query = require("../../models/query/query")
const cloudinary = require("cloudinary")

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
        next({})
    }
}

//login user
exports.login = async(req,res,next)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user)
            return next({message:"User not found", statusCode:400})
        if(user.password !== req.body.password)
            return next({message:"Invaild password", statusCode:400})
        const token = generateToken(user._id)
        res.cookie("token",token).status(200).json({
            success:true,
            user
        })
    }catch(err){
        next({})
    }
}

//register to event --participant
exports.registerToEvent = async(req,res,next)=>{
    try{
        //integrating stripe api for payment
        const user = await User.findById(req.user_id)
        user.registrations.push(req.body.event)
        await user.save()
        res.status(200).json({
            success:true,
            message:"Registration successful"
        })
    }catch(err){
        next()
    }
}

//ask query --participant
exports.askQuery = async(req,res,next)=>{
    try{
        const query = await Query.create(req.body)
        res.status(201).json({
            success:true,
            message:"Your query has been posted."
        })
    }catch(err){
        next()
    }
}

//answer query --rotactor
exports.answerQuery = async(req,res,next)=>{
    try{
        const query = await Query.findById(req.body.query)
        query.answer = req.body.answer
        query.answeredBy = req.user_id
        await query.save()
        res.status(200).json({
            success:true,
            message:"Query has been answered"
        })
    }catch(err){
        next()
    }   
}