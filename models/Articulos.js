const mongoose = require('mongoose')
const { Schema } = mongoose;

const Art = new Schema({
    titulo: String,
    sinapsis: String,
    imagen: String,
    categoria: String,
})

module.exports = mongoose.model('Articulos', Art);