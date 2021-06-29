/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (req, res) => {
  const { id, name, role_id, email } = req.user;
  const token = jwt.sign({ id, name, role_id, email }, config.jwt.secret);
  res.status(200).send({ token });
};
