const Product = require('../models/Product.js');
const User = require('../models/User.js');

const Category = require('../models/Category.js');
const ProductController = {
    getAll(req, res) {
        Product.find({})
            .populate('CategoryId')
            .then(products => res.send(products))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'There was a problem trying to load products' })
            })

    },
    getNewProducts(req, res) {
        Product.find({})
            .then(product => res.send(product.reverse()))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'There was a problem trying to load products' })
            })
    },
    getProductsByName(req, res) {
        // Product.find({ name: /.*req.params.name.*/i })
        const name = new RegExp(`${req.params.name}`, 'i')
        console.log(name)
        Product.aggregate([{
                $match: {
                    name
                }
            }, ])
            .then(products => res.send(products))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'There was a problem trying to load products' })
            })
    },
    addProduct(req, res) {
        Product.create({...req.body })
            .then(product => res.status(201).send(product))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
            })
    },
    getById(req, res) {
        Product.findById(req.params._id)
            .populate('userId')
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
    async like(req, res) {
        try {
            // if (product.likes.includes()) {}
            const product =
                await Product.findByIdAndUpdate(req.params._id, { $push: { favoritos: req.user._id } }, { new: true });
            const user = await User.findByIdAndUpdate(req.user._id, { $push: { favoritos: req.params._id } }, { new: true });

            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem with your like' })
        }
    },
    async disLike(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params._id, { $pull: { favoritos: req.user._id } }, { new: true });
            const user = await User.findByIdAndUpdate(req.user._id, { $pull: { favoritos: req.params._id } }, { new: true });
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem with your like' })
        }
    },
}

module.exports = ProductController;