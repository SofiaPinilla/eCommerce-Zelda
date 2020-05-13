const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({
    status: String,
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    productId: [{
        type: ObjectId,
        ref: 'Product'
    }],
    deliveryDate: Date
}, { timestamps: true });
OrderSchema.index({
    name: 'text'

});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;