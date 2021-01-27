const mongoose = require('mongoose')
const { Schema } = mongoose;

const RequestCaricatura = new Schema({
    name: String,
    tema: String
})

module.exports = mongoose.model('PedirCaricatura', RequestCaricatura)