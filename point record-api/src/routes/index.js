const { Router } = require("express")
const routes = Router()

const UserController = require("../controllers/UserController")
const { authorization } = require("../middlewares/authorization")

//User
routes
    .post('/user', UserController.create)
    .post('/user/session', UserController.login)
    .get('/test', authorization, UserController.test)
    .post('/register', authorization, UserController.register)


module.exports = routes