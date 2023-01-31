const express = require('express')

const { TracksController } = require('../controllers/tracks')
const router = express.Router()


const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')

//TODO: MIDDLEWARE VERIFICAR ROL
const { checkRole } = require('../middleware/roles')

//TODO:MIDDLEWARE DEL TOKEN JWT
const { authMiddleware } = require('../middleware/session')

module.exports.TracksAPI = (app) => {
    router
        .get('/', authMiddleware, TracksController.getTracks)
        .get('/:id', authMiddleware, validatorGetItem, TracksController.getTrack)
        .post('/', authMiddleware, checkRole(['admin']), validatorCreateItem, TracksController.createTrack)
        .put('/:id', authMiddleware, validatorGetItem, TracksController.updateTrack)
        .delete('/:id', authMiddleware, validatorGetItem, TracksController.deleteTrack)
    app.use('/api/tracks', router)
}