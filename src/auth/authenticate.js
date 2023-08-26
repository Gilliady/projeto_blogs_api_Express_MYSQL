const jwt = require('jsonwebtoken');

const generateToken = (payload) => jwt.sign({ data: payload }, process.env.JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: '7d',
});

module.exports = {
  generateToken,
};