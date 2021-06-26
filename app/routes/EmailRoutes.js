const express = require('express');

const {
  EmailToSendSchema,
} = require('../validators/EmailSchema');
const validate = require('../middleware/ValidationHandler');
const EmailController = require('../controllers/EmailController');

const router = express.Router();

router.post('/', validate(EmailToSendSchema), EmailController.sendEmail);

module.exports = router;
