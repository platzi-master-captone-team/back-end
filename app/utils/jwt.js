/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config');

module.exports = (req, _res) => {
  const {
    id,
    name,
    role_id,
    email,
  } = req.user;
  const token = jwt.sign({
    id,
    name,
    role_id,
    email,
  }, jwtConfig.secret);
  return token;
};
