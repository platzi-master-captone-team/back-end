import BaseEmail from '../templates/email/BaseEmail';

module.exports = {
  EMAIL: {
    BASE: {
      SENDER: { name: 'John Doe', email: 'example@example.com' },
      SUBJECT: 'Base Email',
      CONTENT: BaseEmail,
    },
  },
};
