const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewSuscriptor = new Schema({
    name: String,
    email: String,
    areas: Array
})

module.exports = mongoose.model('Suscriptor', NewSuscriptor);