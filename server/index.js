const cors = require("cors")
const express = require("express")
const dotenv = require("dotenv")
const connectDatabase = require("./utils/connectDatabase")
const throwError = require("./utils/error")
const cookieParser = require("cookie-parser")
const cloudinary = require("cloudinary")
const fileupload = require("express-fileupload")
const userRoutes = require("./routes/userRoutes") 

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(fileupload())
app.use(cors({credentials:true,origin:"http://localhost:5173"}))

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API,
    api_secret:process.env.CLOUD_SECRET
})

app.use("/user",userRoutes)

app.use(throwError)

app.listen(port, async () => {
    console.log("Web server listening on port " + port);
    connectDatabase()
});
