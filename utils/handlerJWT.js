const jwt = require('jsonwebtoken')
const TOKEN_JWT = process.env.TOKEN_JWT

/**
 * PASAR OBJETO USER
 * @param {*} user 
 */
const signToken = async (user) => {
    const sign = await jwt.sign({
        _id: user.id,
        role: user.role
    }, TOKEN_JWT, {
        expiresIn: "2h"
    })
    return sign
}


module.exports = { signToken }