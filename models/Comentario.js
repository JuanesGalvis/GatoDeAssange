const mongoose = require('mongoose')
const { Schema } = mongoose

const Comentario = new Schema({
    contenido: String,
    titulo_origen: String
})

module.exports = mongoose.model('Comentario', Comentario);