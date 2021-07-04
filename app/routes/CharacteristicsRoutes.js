const express = require('express');

const CharacteristicsController = require('../controllers/CharacteristicsController');

const router = express.Router();

router.get('/', CharacteristicsController.getUserCharacteristics);

module.exports = router;
