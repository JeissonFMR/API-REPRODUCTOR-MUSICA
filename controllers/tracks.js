const { tracksModel } = require('../models')
module.exports.TracksController = {
    /**
 * OBETENER LISTA DE TRACKS DE LA BASE DE DATOS
 * @param {*} req 
 * @param {*} res 
 */
    getTracks: async (req, res) => {
        try {
            console.log(req);
            const user = req.user //TODO:persona que realizo la peticion
            console.log(user);
            const data = await tracksModel.find({})
            // console.log(data);
            res.status(200).send({ data, user })
        } catch (error) {
            res.status(403).send('ERROR_GET_TRACKS')
        }
    },

    /**
     * OBTENER DETALLE DE TRACKS DE LA BASE DE DATOS
     * @param {*} req 
     * @param {*} res 
     */
    getTrack: async (req, res) => {
        try {
            const { params: { id } } = req
            const data = await tracksModel.findById(id)
            res.status(200).send(data)
        } catch (error) {
            res.status(403).send('ERROR_DETAILS_TRACK')
        }
    },

    /**
     * CREAR REGISTRO (TRACK) EN LA BASE DE DATOS
     * @param {*} req 
     * @param {*} res 
     */
    createTrack: async (req, res) => {
        try {
            const { body } = req
            console.log(body);
            const data = await tracksModel.create(body)
            res.status(201).send(data)
        } catch (error) {
            res.status(403).send('ERROR_CREATE_TRACKS')
        }
    },
    /**
     * ACTUALIZAR REGISTRO TRACK DE LA BASE DE DATOS 
     * @param {*} req 
     * @param {*} res 
     */
    updateTrack: async (req, res) => {
        try {
            const { params: { id } } = req
            const data = await tracksModel.findOne({ _id: id })
            Object.assign(data, req.body)
            await data.save()
            console.log(data);
            res.status(204).send(data)
        } catch (error) {
            console.log(error);
            res.status(403).send('ERROR_UPDATE_TRACK')
        }

    },
    /**
 * ELIMINAR REGISTRO TRACK DE LA BASE DE DATOS 
 * @param {*} req 
 * @param {*} res 
 */
    deleteTrack: async (req, res) => {
        try {
            const { params: { id } } = req
            const data = await tracksModel.deleteOne({ _id: id })
            res.status(200).send(data)
        } catch (error) {
            res.status(403).send('ERROR_DELETE_TRACK')
        }
    }


}
