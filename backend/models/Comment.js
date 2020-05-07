const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: false
    },
    image_path: {
        type: String,
        required: false
    },
    productId: {
        type: ObjectId,
        ref: 'Product'
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    }

}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);