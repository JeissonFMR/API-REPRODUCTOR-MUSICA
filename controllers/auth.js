const { userModel } = require('../models')
const bcryptjs = require('bcryptjs')
const { signToken } = require('../utils/handlerJWT')
module.exports.registerController = {
    registerUser: async (req, res) => {
        const { body } = req
        try {
            const isUser = await userModel.findOne({ email: body.email })
            if (isUser) {
                return res.status(403).send('Usuario ya existe')
            }
            //TODO: ENCRIPTAR PASSWORD
            const passwordPlain = body.password
            const passwordEncrypt = await bcryptjs.hash(passwordPlain, 15)

            const user = await userModel.create({ name: body.name, age: body.age, email: body.email, password: passwordEncrypt })
            user.set('password', undefined, { strict: false }) //TODO:no aparezca en la respuesta del postman la password

            //TODO: FIRMAR EL TOKEN JWT
            const data = {
                token: await signToken(user),
                user: user
            }
            res.status(200).send(data)
        } catch (error) {
            console.log(error);
            res.status(403).send('ERROR_REGISTER_USER')
        }
    }
}

module.exports.loginController = {
    login: async (req, res) => {
        try {
            const { body } = req
            const user = await userModel.findOne({ email: body.email }).select('password name email role')
            if (!user) {
                return res.status(403).send('USER_NOT_EXISTS')
            }
            const passwordHashed = user.password
            const check = await bcryptjs.compare(body.password, passwordHashed) //true-false

            if (!check) {
                return res.status(403).send('PASSWORD_INVALID')
            }
            const data = {
                token: await signToken(user),
                user: { user }
            }
            user.set('password', undefined, { strict: false }) // no me muestra password en pastman
            res.status(200).send(data)
        } catch (error) {
            console.log(error);
            res.status(403).send('ERROR_LOGIN_USER')
        }
    }
}