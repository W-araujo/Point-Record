const User = require('../models/User')

const { encryptPassword, comparePassword } = require('../utils/password')
const { tokenGenerator } = require('../utils/jwt')


class UserService {
    async create(data) {
        return User.create({
            name: data.name, email: data.email, password: encryptPassword(data.password), role: data.role.toLowerCase()
        })
    }

    async login(data) {
        const { password: passwordEncrypted, ...user } = await User.getByEmail(data.email)
        const isTrue = comparePassword(data.password, passwordEncrypted)
        if (!isTrue) {
            throw new Error('Password is not equal')
        }
        const token = tokenGenerator(user)
        return { token, user }
    }

}

module.exports = new UserService()