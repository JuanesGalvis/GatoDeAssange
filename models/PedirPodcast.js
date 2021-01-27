const mongoose = require('mongoose')
const { Schema } = mongoose;

const RequestPodcast = new Schema({
    name: String,
    tema: String,
    invitado: String
})

module.exports = mongoose.model('PedirPodcast', RequestPodcast)