const RegisterTemplate = require('../templates/RegisterTemplate');
const BookingTemplate = require('../templates/BookingTemplate');

module.exports = {
  base_email: {
    subject: 'Integration test',
    content: () => '<html><body><h1>This is an integration email</h1></body></html>',
    sender: 'test@test.com',
  },
  register: {
    subject: 'Ya eres parte de la comunidad de Consultify',
    content: RegisterTemplate,
    sender: 'test@test.com',
  },
  booking: {
    subject: 'Ya se hizo tu reserva!',
    content: BookingTemplate,
    sender: 'test@test.com',
  },
};
