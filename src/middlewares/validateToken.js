const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const tokenWithBearer = req.headers.authorization;
  if (!tokenWithBearer) return res.status(401).json({ message: 'Token not found' });
  const [, token] = tokenWithBearer.split(' ');
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      );
    req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;