const UserService = require("../services/UserService")
const md5 = require("md5")

class UserController {

    async create(req, res) {
        try {
            const { name, email, password, role } = req.body
            const encrypted = md5(password)
            await UserService.create({ name: name, email: email, password: encrypted, role: role })
            return res.status(200).json({ message: "Registered successfully" })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "something went wrong, try again" })
        }
    }
}

module.exports = new UserController()