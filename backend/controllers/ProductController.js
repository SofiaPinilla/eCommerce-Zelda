const Product = require('../models/Product.js');
const Category = require('../models/Category.js');
const ProductController = {
    getAll(req, res) {
        Product.find({})
            .populate('CategoryId')
            .then(products => res.send(products))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
            })

    },
    addProduct(req, res) {
        Product.create({...req.body })
            .then(product => res.status(201).send(product))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
            })
    }
}

module.exports = ProductController;