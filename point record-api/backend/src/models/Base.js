const { development } = require("../../knexfile")

const knex = require("knex")(development)

class BaseModel {
    constructor(model) {
        this.model = model
    }
    
    async create(data) {
        return knex(this.model).insert(data)
    }

}

module.exports = BaseModel