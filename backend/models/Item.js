const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
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
ItemSchema.index({
    name: 'text'

});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;