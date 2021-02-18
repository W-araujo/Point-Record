const JWT = require('jsonwebtoken')

const jwtKey = process.env.JWT_KEY

const tokenGenerator = (user) => {

    return JWT.sign({
        id: user.id,
        email: user.email,
        role: user.role
    },
        jwtKey,
        {
            expiresIn: "1h"
        }
    )
}

const decode = (token) => { 
    return JWT.verify(token, jwtKey)
}

module.exports = { tokenGenerator, decode }