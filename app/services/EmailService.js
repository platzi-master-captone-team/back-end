const EmailService = module.exports;

const nodemailer = require('nodemailer');

const { BASE_EMAIL_LABEL } = require('../constants/EmailConstants');
const EmailTemplateData = require('../utils/EmailTemplate');

const { EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env;

EmailService.sendEmail = (data) => {
  const { email_label: emailLabel = BASE_EMAIL_LABEL, email_to: emailTo, params = {} } = data;

  const emailData = EmailTemplateData[emailLabel];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_ADDRESS || 'ssip.team.proj01@gmail.com',
      pass: EMAIL_PASSWORD || 'npexpxbosxflmzuh',
    },
  });

  const content = emailData.content(params);

  const mailOptions = {
    from: EMAIL_ADDRESS,
    to: emailTo,
    subject: emailData.subject,
    html: content,
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`[[EmailResource.sendEmail][error] ${error}`);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.log(`[EmailResource.sendEmail][error] ${error}`);
  }
};
