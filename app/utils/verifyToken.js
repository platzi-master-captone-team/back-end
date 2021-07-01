const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');

const config = require('../config');

async function verify(req, res, next) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return next(boom.unauthorized('Token required'));
  }
  const [bearer, token] = bearerToken.split(' ');
  if (bearer !== 'Bearer') {
    return next(boom.unauthorized('Invalid token format'));
  }
  try {
    const decoded = await jwt.verify(token, config.jwt.secret);
    if (decoded) {
      req.user = decoded;
      return next();
    }
    return boom.badData('Bad Data');
  } catch (error) {
    return boom.internal(error.message);
  }
}

module.exports = verify;
