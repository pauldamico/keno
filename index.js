const express = require('express')
const app = express()
const morgan = require("morgan")
const cors = require("cors")
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['X-Requested-With']
  }));

app.get('/', (req, res)=>{
    console.log(req.query)
    res.send("testindex")
})
app.use('/auth',require("./routes/userRouter.js"))

app.listen(5000, console.group("Server Listening on port 5000"))