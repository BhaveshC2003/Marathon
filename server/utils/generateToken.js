const jwt = require("jsonwebtoken")

const generateToken = (user_id)=>{
    const token = jwt.sign({user_id},process.env.JWT_SECRET)
    return token
}

module.exports = generateToken