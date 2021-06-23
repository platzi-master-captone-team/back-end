// User related routes
const express = require('express');
const { getAllMetaData, createMetaData } = require('../controllers/MetaDataController');

const router = express.Router();

router.get('/', getAllMetaData);
router.post('/', createMetaData);

module.exports = router;
