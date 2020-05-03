const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.getAll);
// router.get('/id/:id', CategoryController.getCategoryById);
router.get('/name/:nombre', CategoryController.getCategoryByName);
router.post('/', CategoryController.addCategory);

module.exports = router;