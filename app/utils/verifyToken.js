const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const { jwt: jwtConfig } = require('../config');

async function verify(req, _res, next) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) return next(boom.unauthorized('Token required'));

  const [bearer, token] = bearerToken.split(' ');
  if (bearer !== 'Bearer') return next(boom.unauthorized('Invalid token format'));

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    if (decoded) {
      req.userId = decoded.id;
      return next();
    }
    return boom.badData('Bad Data');
  } catch (error) {
    return boom.internal(error.message);
  }
}

module.exports = verify;
