const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
  const { status, data } = await userService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req, res) => {
  const { status, data } = await userService.create(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteMe = async (req, res) => {
  const { id: userId } = req.user;
  const { status } = await userService.deleteMe(userId);
  return res.status(mapStatusHTTP(status)).end();
};

module.exports = {
  getAll,
  getById,
  create,
  deleteMe,
};