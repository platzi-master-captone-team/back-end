const express = require('express');

const ConsultantsController = require('../controllers/ConsultantsController');

const router = express.Router();

router.get('/', ConsultantsController.getConsultants);

module.exports = router;
