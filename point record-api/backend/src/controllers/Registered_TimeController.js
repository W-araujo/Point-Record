const Registered_TimeService = require("../services/Registered_TimeService")

class Registered_TimeController {

    async register(req, res) {
        try {
            if (req.user.role != "emp") {
                return res.status(403).json({ message: "Unauthorizad" })
            }

            await Registered_TimeService.register(req.body, req.user.id)

            return res.status(200).json({ message: "Registered successfully" })
        } catch (error) {
            console.log(error)
            return res.status(403).json({ message: "Something went wrong" })
        }
    }

    async get(req, res) {
        try {
            if (req.user.role != "emp") {
                return res.status(403).json({ message: "Unauthorizad" })
            }
            const user = await Registered_TimeService.get(req.user.id)
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(403).json({ message: "Something went wrong" })
        }
    }

    async list(req, res) {
        try {
            if (req.user.role != "adm") {
                return res.status(403).json({ message: "Unauthorizad" })
            }
            const users = await Registered_TimeService.list()
            return res.status(200).json(users)
        } catch (error) {
            console.log(error)
            return res.status(403).json({ message: "Something went wrong" })
        }
    }

}

module.exports = new Registered_TimeController()