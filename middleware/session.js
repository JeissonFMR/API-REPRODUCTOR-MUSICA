const { userModel } = require('../models')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.TOKEN_JWT;

//TODO: VERIFICAR TOKEN

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {//TODO:CABECERAS

            res.status(403).send('NOT_TOKEN_YOUR_NEED_TOKEN')
            return
        }
        const token = req.headers.authorization.split(' ').pop()
        //TODO:VERIFICACIÓN
        const dataToken = await jwt.verify(token, JWT_SECRET)

        if (!dataToken._id) {
            res.status(403).send('ERROR_ID_TOKEN')
            return
        }
        //TODO:SABER QUE USUARIO ESTA INYECTADNO O USANDO EL TOKEN
        const user = await userModel.findById(dataToken._id)
        req.user = user
        next()
    } catch (error) {
        res.status(403).send('NOT_SESSION')
    }
}

module.exports = { authMiddleware }

