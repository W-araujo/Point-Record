const { Router } = require("express")
const routes = Router()

routes.get('/', (req, res) => {
    return res.json({Message: "Hello World!"})
})

module.exports = routes