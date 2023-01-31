const express = require('express')
const router = express.Router()
const { registerController, loginController } = require('../controllers/auth')
const { validatorLogin, validateRegister } = require('../validators/auth')


module.exports.authAPI = (app) => {
    router.post('/register', validateRegister, registerController.registerUser)
    router.post('/login', validatorLogin, loginController.login)
    app.use('/api/auth/', router)
}