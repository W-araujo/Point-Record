const UserService = require("../services/UserService")

class UserController {

    async create(req, res) {
        try {
            await UserService.create(req.body)
            return res.status(200).json({ message: "Registered successfully" })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "something went wrong, try again" })
        }
    }
}

module.exports = new UserController()