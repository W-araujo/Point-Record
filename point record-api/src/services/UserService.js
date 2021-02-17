const User = require('../models/User')

class UserService {

    async create(data) {
        return User.create(data)
    }

}

module.exports = new UserService()