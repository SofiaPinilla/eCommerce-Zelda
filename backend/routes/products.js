const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')
const { authentication } = require('../middleware/authentication');
const { uploadCommentImages } = require('../middleware/multer');

router.get('/', ProductController.getAll);
router.get('/name/:name', ProductController.getProductsByName);
router.get('/new', ProductController.getNewProducts);
router.get('/:_id', ProductController.getById);
router.post('/', ProductController.addProduct);
router.put('/likes/:_id', authentication, ProductController.like);
router.put('/dislikes/:_id', authentication, ProductController.disLike);
router.put('/reviews/:_id', authentication, uploadCommentImages.single('image'), ProductController.insertComment)
module.exports = router;