/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = function (req) {
  const { id, name, role_id, email } = req.user;
  const token = jwt.sign({ id, name, role_id, email }, config.jwt.secret);
  return token;
};
