const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const fs = require('fs')
const path = require('path')

const MEDIA_PATH = path.join(__dirname, '../storageFiles')
console.log(MEDIA_PATH);
module.exports.storageController = {

    /**
     * OBTENER LISTA COMPLETA DE STORAGE DE LA BASE DE DATOS
     * @param {*} req 
     * @param {*} res 
     */
    getStorages: async (req, res) => {
        try {
            const data = await storageModel.find({})
            res.status(200).send(data)
        } catch (error) {
            res.status(403).send('ERROR_LIST_STORAGE')
        }
    },

    /**
     * DETALLE DEL STORAGE
     * @param {*} req 
     * @param {*} res 
     */
    getStorage: async (req, res) => {
        try {
            const { params: { id } } = req
            const data = await storageModel.findOne({ _id: id })
            res.status(200).send(data)
        } catch (error) {
            res.status(403).send('ERROR_DETAIL_STORAGE')
        }
    },
    /**
     * SUBIR ARCHIVO ... 
     * @param {*} req 
     * @param {*} res 
     */
    createStorage: async (req, res) => {
        try {
            const { file } = req //TODO: APARECE SIEMPRE Y CUANDO ESTE EL MIDDLEWARE DE MULTER
            const fileData = {
                filename: file.filename,
                url: `${PUBLIC_URL}/${file.filename}` //acceder a la carpeta de StorageFile
            }
            const data = await storageModel.create(fileData)
            res.status(200).send(data)
        } catch (error) {
            res.status(403).send(error)
        }
    },
    deleteStorage: async (req, res) => {

        try {
            const { params: { id } } = req
            const dataFile = await storageModel.findById(id)

            const { filename } = dataFile
            const filepath = `${MEDIA_PATH}/${filename}` //TODO:RUTA ABSOLUTA

            fs.unlinkSync(filepath) //eliminar del servidor

            //TODO:ELIMINAR REGISTRO DB
            const data = await storageModel.deleteOne({ _id: id })
            //TODO:FIN ELIMINAR REGISTRO DB
            res.send(data)
        } catch (error) {
            console.log(error);
            res.status(403).send('ERROR_DELETE_STORAGE')
        }



    }

}