const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
require("dotenv").config();
console.log(process.env.MongoUri)
connectToMongo();
const app = express()
const port = process.env.port || 8000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/auth', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})