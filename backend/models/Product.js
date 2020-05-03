const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image_path: {
        type: String,
        required: true
    },
    CategoryId: { type: Schema.Types.ObjectId, ref: 'Category' },

}, { timestamps: true });
ProductSchema.index({
    name: 'text'

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;