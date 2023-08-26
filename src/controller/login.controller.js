const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { status, data } = await loginService.login(req.body);
  console.log('STATUS', status);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};