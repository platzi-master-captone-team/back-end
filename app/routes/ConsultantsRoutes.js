const express = require('express');

const ConsultantsController = require('../controllers/ConsultantsController');

const router = express.Router();

router.get('/', ConsultantsController.getConsultants);
router.get('/:consultant_id', ConsultantsController.getConsultantById);

module.exports = router;
