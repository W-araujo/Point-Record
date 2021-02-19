const { Router } = require("express")
const routes = Router()

const UserController = require("../controllers/UserController")
const Registered_Time = require("../controllers/Registered_TimeController")
const { authorization } = require("../middlewares/authorization")

//User
routes
    .post('/user', UserController.create)
    .post('/user/session', UserController.login)

//Registered Time
routes
    .post('/registered_time/register', authorization, Registered_Time.register)
    .get('/registered_time/get_list', authorization, Registered_Time.get)
    .get('/registered_time/list_all', authorization, Registered_Time.list)

    
module.exports = routes