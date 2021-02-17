const BaseModel = require("./Base")

class User extends BaseModel {
    constructor() {
        super("user")
    }
}

module.exports = new User()