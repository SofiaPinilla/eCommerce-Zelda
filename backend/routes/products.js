const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.getAll);
router.get('/name/:name', ProductController.getProductsByName);
router.get('/new', ProductController.getNewProducts);
// router.post('/', ProductController.addProduct);

module.exports = router;