const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (req, res) => {
  const { id, name, role_id, email, avatar } = req.user;
  const token = jwt.sign(
    { id, name, role_id, email, avatar },
    config.jwt.secret,
  );
  res.redirect(`https://consultify.online?token=${encodeURIComponent(token)}`);
};
