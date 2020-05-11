const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El campo nombre es requerido']
    },
    description: {
        type: String,
        required: [true, 'El campo descripción es requerido']
    },
    price: {
        type: Number,
        required: [true, 'El campo precio es requerido']
    },

    image_path: {
        type: String,
        required: [true, 'El campo ruta de imagen es requerido']
    },
    favoritos: { ObjectId },
    stock: {
        type: Number,
        required: [true, 'El campo stock es requerido']
    },
    orderIds: [{
        type: ObjectId,
        ref: 'Order'
    }],
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    CategoryId: {
        type: ObjectId,
        ref: 'Category'
    },
    commentId: [{
        type: ObjectId,
        ref: 'Comment'
    }],

}, { timestamps: true });
ProductSchema.index({
    name: 'text'

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;