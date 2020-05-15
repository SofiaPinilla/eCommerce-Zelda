const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({
    status: String,
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    productIds: [{
        _id: { type: ObjectId, ref: 'Product' },
        units: Number
    }, ],
    deliveryDate: Date
}, { timestamps: true });
OrderSchema.index({
    name: 'text'

});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;