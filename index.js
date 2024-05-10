const express = require('express')
const app = express()
const morgan = require("morgan")
const axios = require("axios")
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
app.get('/rewsttest', (req, res) => {
  axios.get("https://engine.rewst.io/webhooks/custom/trigger/018ec48f-17a6-771d-9666-b6dad36735fd/48eaa27a-b6f3-4d1e-a5cb-74f341ef4fe3", {
      headers: {
          'x-rewst-secret': `test123`
      }
  })
  .then(response => {
      console.log(response.data)
      res.send(response.data)
  })
  .catch(error => {
      console.error(error); 
      res.status(500).send("Internal Server Error");
  });
});

app.use('/auth',require("./routes/userRouter.js"))

app.listen(5000, console.group("Server Listening on port 5000"))