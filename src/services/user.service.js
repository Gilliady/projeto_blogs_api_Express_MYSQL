const { generateToken } = require('../auth/authenticate');
const { User } = require('../models');
const getPayload = require('../utils/getPayload');

const create = async (userData) => {
  const { email, password, image, displayName } = userData;
  const userExistence = await User.findOne({ where: { email } });
  if (userExistence) {
 return {
    status: 'CONFLICT',
    data: { message: 'User already registered' },
  }; 
}
  const user = await User.create({ displayName, email, image, password });
  const payload = getPayload(user.dataValues);
  const token = generateToken(payload);
  return { status: 'CREATED', data: { token } };
};

module.exports = {
  create,
};