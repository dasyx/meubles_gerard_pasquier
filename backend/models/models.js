const mongoose = require('mongoose');

const meubleSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Meuble', meubleSchema)