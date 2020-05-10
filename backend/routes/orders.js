const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')
const { authentication } = require('../middleware/authentication');

router.get('/', OrderController.getAll)
router.post('/:_id', authentication, OrderController.addOrder)

module.exports = router;