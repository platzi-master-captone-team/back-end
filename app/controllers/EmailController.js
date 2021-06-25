const EmailController = module.exports;

const EmailService = require('../services/EmailService');

/**
 * @api {post} /api/email/ Send an email
 * @apiName PostNewEmail
 * @apiDescription Send a new email
 *
 * @apiParam (body) {string} email_label: email label to send
 * @apiParam (body) {number} email_to: user to receive the email
 *
 * @apiSuccessExample Success Response
 * HTTP/1.1 200
 *
 * @apiError (500) {Object} System error.
 */
EmailController.sendEmail = async (req, res) => {
  const { body } = req;

  await EmailService.sendEmail(body);

  res.status(204);
};
