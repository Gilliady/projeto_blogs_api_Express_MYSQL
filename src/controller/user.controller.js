const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
  const { status, data } = await userService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req, res) => {
  const { status, data } = await userService.create(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAll,
  create,
};