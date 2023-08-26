const { generateToken } = require('../auth/authenticate');
const { User } = require('../models');
const getPayload = require('../utils/getPayload');

const login = async (userData) => {
  const { email, password } = userData;
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  const payload = getPayload(user.dataValues);
  const token = generateToken(payload);
  return { status: 'SUCCESS', data: { token } };
};

module.exports = {
  login,
};