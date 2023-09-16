const jwt = require("jsonwebtoken")
const User = require("../models/user/user")

exports.authenticate = async(req,res,next)=>{
    const token = req.cookies.token || null
    if(!token)
        next({message:"Please login",statusCode:401})
    const decoded_data = jwt.verify(token,process.env.JWT_SECRET)
    req.user_id = decoded_data.user_id 
    next()
}

exports.authorize = (role)=>{
    const role = role
    return async(role,req,res,next)=>{
        const user = await User.findById(req.user_id) 
        if(role!==user.role)
            next({message:"Access denied",statusCode:403})
        next()
    }
}
