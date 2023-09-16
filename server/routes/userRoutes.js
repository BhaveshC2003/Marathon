const { register, login, makeAnnouncement, askQuery, answerQuery, loadUser, logoutUser } = require("../controllers/user/user")
const { authenticate, authorize } = require("../utils/auth")

const router = require("express").Router()

router.post("/register",register)
router.post("/login",login)
router.get("/loaduser",authenticate,loadUser)
router.get("/logout",logoutUser)

router.post("/announcement",authenticate,authorize("rotactor"),makeAnnouncement)

router.post("/query",authenticate,askQuery)
router.put("/query",authenticate,authorize("rotactor"),answerQuery)

module.exports = router