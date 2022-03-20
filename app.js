require('dotenv').config()

const routes = require('./server/routes')
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', routes)

app.listen(PORT, () => {
  console.log("Express app listening on port: " + PORT)
})


