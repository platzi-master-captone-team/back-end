const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config');

module.exports = (req, res) => {
  // eslint-disable-next-line
  const { id, name, role_id, email, avatar } = req.user;
  const token = jwt.sign(
    {
      id,
      name,
      role_id,
      email,
      avatar,
    }, jwtConfig.secret,
  );
  res.redirect(`https://consultify.online?token=${encodeURIComponent(token)}`);
};
