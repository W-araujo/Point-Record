const User = require('../models/User')
const md5 = require("md5")

class UserService {

    async create(data) {
        return User.create({ name: data.name, email: data.email, password: md5(data.password), role: data.role })
    }

}

module.exports = new UserService()