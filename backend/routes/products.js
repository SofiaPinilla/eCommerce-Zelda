const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middleware/authentication');
const { uploadCommentImages, uploadUserProductsImages } = require('../middleware/multer');

router.get('/', ProductController.getAll);
router.get('/name/:name', ProductController.getProductsByName);
router.get('/new', ProductController.getNewProducts);
router.get('/:_id', ProductController.getById);
router.post('/', authentication, isAdmin, uploadUserProductsImages.single('imageProduct'), ProductController.addProduct);
router.put('/likes/:_id', authentication, ProductController.like);
router.put('/dislikes/:_id', authentication, ProductController.disLike);
router.put('/reviews/:_id', authentication, uploadCommentImages.single('image'), ProductController.insertComment)
router.put('/:_id', authentication, isAdmin, uploadUserProductsImages.single('imageProduct'), ProductController.update);
router.delete('/:_id', authentication, isAdmin, ProductController.delete);

module.exports = router;