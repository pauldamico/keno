const express = require("express")
const userRouter = express.Router()
const userDB = [{id:1,username:"Paul", token:"111"}, {id:2, username:"Tina", token:"222"},{id:3,username:"Enzo", token:"333"}]

userRouter.post("/login",(req, res)=>{
    console.log(req.body)
    if (userDB.find(item=>item.username.toLowerCase() === req.body.username.toLowerCase()) )
res.send(userDB.filter(item=>item.username.toLocaleLowerCase() === req.body.username.toLowerCase())[0])
else
res.send("No Account")

})
module.exports = userRouter;