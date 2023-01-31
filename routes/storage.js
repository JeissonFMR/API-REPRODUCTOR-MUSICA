const express = require('express')
const { storageController } = require('../controllers/storage')
const router = express.Router()
const uploadMiddleware = require('../utils/multerHandler')


//TODO:VALIDADOR
const { validatorGetStorage } = require('../validators/storage')
module.exports.storageAPI = (app) => {
    router
        .get('/', storageController.getStorages)
        .get('/:id', validatorGetStorage, storageController.getStorage)
        .post('/', uploadMiddleware.single('myfile'), storageController.createStorage)
        .delete('/:id', validatorGetStorage, storageController.deleteStorage)
    app.use('/api/storage', router)
}