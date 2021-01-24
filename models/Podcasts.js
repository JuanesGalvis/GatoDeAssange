const mongoose = require('mongoose')
const { Schema } = mongoose

const Pods = new Schema({
    titulo: String,
    imagen: String,
    descripcion: String,
    invitado: String,
    link: String,
})

module.exports = mongoose.model('Podcasts', Pods);