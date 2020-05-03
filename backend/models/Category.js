const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    ProductId: [{ type: Schema.Types.ObjectId, ref: 'Product' }],

}, { timestamps: true });
CategorySchema.index({
    name: 'text'

});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;