const mongoose = require('mongoose');
// const ObjectID = require('mongodb').ObjectID
const ObjectId = mongoose.SchemaTypes.ObjectId;


const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    DNI: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    orderIds: [{ type: ObjectId, ref: 'Order' }],
    favoritos: [{ type: ObjectId, ref: 'Product' }],
    role: String,

    tokens: [],

}, { timestamps: true });
UserSchema.index({
    name: 'text'

});
UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;