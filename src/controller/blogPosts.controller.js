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

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;
  const { status, data } = await blogPostsService.update(id, title, content, userId);
  return res.status(mapStatusHttp(status)).json(data);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { status } = await blogPostsService.deletePost(id, userId);
  return res.status(mapStatusHttp(status)).end();
};

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, data } = await blogPostsService.create(title, content, categoryIds, id);
  return res.status(mapStatusHttp(status)).json(data);
};

const search = async (req, res) => {
  const { q } = req.query;
  const { status, data } = await blogPostsService.search(q);
  return res.status(mapStatusHttp(status)).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deletePost,
  search,
};
