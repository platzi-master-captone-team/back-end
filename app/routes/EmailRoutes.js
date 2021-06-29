const express = require('express');

const { EmailToSendSchema } = require('../validators/EmailSchema');
const validate = require('../middleware/ValidationHandler');

const router = express.Router();

const EmailController = require('../controllers/EmailController');

router.post('/', validate(EmailToSendSchema), EmailController.sendEmail);

module.exports = router;
