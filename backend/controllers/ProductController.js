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
        const name = new RegExp(`${req.params.name}`, 'i')
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
    async addProduct(req, res) {
        try {
            if (req.file) req.body.image_path = req.file.filename;
            const product = await Product.create({...req.body })
            await Category.findByIdAndUpdate(req.body.CategoryId, { $push: { productIds: product._id } });
            res.status(201).send(product)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
        }
    },
    getById(req, res) {
        Product.findById(req.params._id)
            .populate('userId')
            .populate('reviews.userId')
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
    async like(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params._id, { $push: { favoritos: req.user._id } }, { new: true });
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
    async insertComment(req, res) {
        try {
            if (req.file) req.body.image_path = req.file.filename;
            const product = await Product.findByIdAndUpdate(req.params._id, { $push: { reviews: {...req.body, reviewDate: new Date(), userId: req.user._id } } }, { new: true });
            res.send(product);

        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem with your review' })
        }
    },
    update(req, res) {
        if (req.file) req.body.image_path = req.file.filename;
        Product.findByIdAndUpdate(req.params._id, req.body, { new: true })
            .then(product => res.send({ message: 'product successfully updated', product }))
            .catch(console.error)
    },
    async delete(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params._id)
            res.send({ product, message: 'Product deleted' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the publication' })
        }


    },
}

module.exports = ProductController;