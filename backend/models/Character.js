const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    meta: {
        type: String,
        required: true
    },
    image_path: {
        type: String,
        required: true
    },
}, { timestamps: true });
CharacterSchema.index({
    name: 'text'

});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;