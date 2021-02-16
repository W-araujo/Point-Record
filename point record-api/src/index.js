const express = require('express')
const app = express()

const routes = require('./routes/index')

require("dotenv").config()

const { PORT } = process.env

app.use(express.json())
app.use(routes)


app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
