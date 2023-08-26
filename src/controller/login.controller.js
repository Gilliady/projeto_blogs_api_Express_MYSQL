const { generateToken } = require('../auth/authenticate');
const { User } = require('../models');
const getPayload = require('../utils/getPayload');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const payload = getPayload(user.dataValues);
  const token = generateToken(payload);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};