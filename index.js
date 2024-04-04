const express = require('express')
const app = express()
const morgan = require("morgan")
app.use(express.json())
app.use(morgan("dev"))

app.get('/', (req, res)=>{
    res.send("testindex")
})
app.use('/auth',require("./routes/userRouter.js"))

app.listen(3000, console.group("Server Listening on port 3000"))