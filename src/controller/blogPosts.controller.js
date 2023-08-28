const mapStatusHttp = require('../utils/mapStatusHTTP');
const { blogPostsService } = require('../services');

const getAll = async (req, res) => {
  const { status, data } = await blogPostsService.getAll();
  return res.status(mapStatusHttp(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await blogPostsService.getById(id);
  return res.status(mapStatusHttp(status)).json(data);
};

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, data } = await blogPostsService.create(title, content, categoryIds, id);
  return res.status(mapStatusHttp(status)).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
};
