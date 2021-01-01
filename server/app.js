const express = require('express')
const app = express()
const mongoose =require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(morgan('combined'))

var whiteListHost = ['http://localhost:3000','http://localhost:8080']
const corsOptions = {
  origin: function (origin, callback) {
      if (whiteListHost.indexOf(origin) !== -1 || !origin) {
          callback(null, true); // ALLOW CORS
      } else {
          callback('Forbidden (not allowed by CORS) ', false); // BLOCKED BY CORS
      }
  },
  methods:['GET','POST','OPTIONS','PUT','DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'X-CSRF-TOKEN', 'Content-Type', 'Accept', 'Authorization','x-www-form-urlencoded','json'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//connect mongo
// const url = 'mongodb://localhost:27017/myhomepage'
const url ='mongodb://admin:admin@sleepfreetime-shard-00-00-5kc2c.gcp.mongodb.net:27017,sleepfreetime-shard-00-01-5kc2c.gcp.mongodb.net:27017,sleepfreetime-shard-00-02-5kc2c.gcp.mongodb.net:27017/myhomepage?ssl=true&replicaSet=sleepfreetime-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false , poolSize: 5})
var db = mongoose.connection
db.on("error", console.log.bind(console, "connection error"))
db.once("open", (callback) =>{
    console.log("connection succeded")
})


const API = require('./routes/api')
API(app)

app.use(cors(corsOptions))



// app.use(bodyParser)
app.listen(process.env.PORT,()=> console.log(`server run start port 3002`) )