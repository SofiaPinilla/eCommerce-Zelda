const Product = require('../models/Product.js');
const Order = require('../models/OrderProduct.js');
const User = require('../models/User.js');

const OrderController = {
    getAll(req, res) {
        Order.find({})
            .populate('productIds')
            .populate('userId')
            .then(orders => res.send(orders))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
            })
    },
    async addOrder(req, res) {
        try {
            const order = await Order.create({...req.body,
                status: "pending",
                deliveryDate: new Date(),
                userId: req.user._id
            })
            await User.findByIdAndUpdate(req.user._id, { $push: { orderIds: order._id } })

            res.status(201).send(order)
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = OrderController;