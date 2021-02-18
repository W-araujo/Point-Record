const { development } = require("../../knexfile")

const knex = require("knex")(development)

const BaseModel = require("./Base")

class User extends BaseModel {
    constructor() {
        super('user')
    }

    async getByEmail(email) {
        const user = await knex('user')
            .where('email', email)
            .select('user.email', 'user.password', 'user.id', 'user.name', 'user.role')
            .first()

        if (!user) {
            throw new Error("User not found");
        }
        return user
    }
}

module.exports = new User()