const mongoose = require('mongoose')
const { Schema } = mongoose;

const Cart = new Schema({
    caricatura: String,
})

module.exports = mongoose.model('Caricaturas', Cart);