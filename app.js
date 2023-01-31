const express = require('express')
require('dotenv').config()
const cors = require('cors')

const { TracksAPI } = require('./routes/tracks')
const { storageAPI } = require('./routes/storage')
const { authAPI } = require('./routes/auth')
//TODO:Base de datos
const dbConnect = require('./config/dbmongo')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./storageFiles'))

/**
 * TODO:EXPORTACION DE RUTAS
 */
TracksAPI(app)
storageAPI(app)
authAPI(app)


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})


dbConnect()