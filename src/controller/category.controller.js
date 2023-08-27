const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
  const { status, data } = await categoryService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.create(name);
  return res.status(mapStatusHTTP(status)).json(data);
};
module.exports = {
  getAll,
  create,
};