const { decode } = require('../utils/jwt')

const authorization = (req, res, next) => {
    try {
        const { token } = req.headers
        const decoded = decode(token)
        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
        return res.status(403).json({ message: "Invalid token" })
    }
}

module.exports = { authorization }