const mongoose = require("mongoose")

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connected to database")
    })
    .catch("Failed to connect to database")
}

module.exports = connectDatabase