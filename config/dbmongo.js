const mongoose = require('mongoose')

mongoose.set("strictQuery", false); //TODO: No muestra error en esta version 
const dbConnect = (error, res) => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!error) {
            console.log('*** CONEXIÓN CORRECTA ***');
        } else {
            console.log('*** ERROR DE CONEXIÓN ***');
        }
    })

}

module.exports = dbConnect
