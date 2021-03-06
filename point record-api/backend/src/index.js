const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes/index')

require("dotenv").config()

const { PORT } = process.env

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
