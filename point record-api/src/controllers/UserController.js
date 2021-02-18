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

    async register(req, res) {
        if (req.user.role != "fun") {
            return res.status(403).json({ message: "Unauthorizad" })
        }
        return res.send("ok")
    }

    async login(req, res) {
        try {
            const user = await UserService.login(req.body)
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(401).json({ message: "Authentication failure" })
        }
    }

}

module.exports = new UserController()