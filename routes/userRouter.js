const express = require("express")
const userRouter = express.Router()

userRouter.get("/signup",(req, res)=>{
res.send("test")

})
module.exports = userRouter;