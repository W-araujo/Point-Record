const { Router } = require("express")
const routes = Router()

const UserController = require("../controllers/UserController")

//User
routes
    .post('/user', UserController.create)


module.exports = routes