const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

const validatePass = async (
  userPassword,
  encryptedPassword,
) => bcrypt.compare(userPassword, encryptedPassword);

module.exports = {
  hashPassword,
  validatePass,
};
