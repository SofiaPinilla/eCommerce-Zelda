const Product = require('../models/Product.js');
const Category = require('../models/Category.js');
const CategoryController = {
    getAll(req, res) {
        Category.find({})
            .populate('ProductId')
            .then(categories => res.send(categories))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
            })
    },
    getCategoryByName(req, res) {
        Category.findOne({ nombre: req.params.nombre })
            .populate('ProductId')
            .then(categories => res.send(categories))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
            })
    },
    addCategory(req, res) {
        Category.create({...req.body })
            .then(category => res.status(201).send(category))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
            })
    }
}

module.exports = CategoryController;