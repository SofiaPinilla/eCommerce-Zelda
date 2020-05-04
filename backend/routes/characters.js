const express = require('express');
const router = express.Router();
const CharacterController = require('../controllers/CharacterController')

router.get('/', CharacterController.getAll);

module.exports = router;