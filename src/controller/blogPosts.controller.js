const mapStatusHttp = require('../utils/mapStatusHTTP');
const { blogPostsService } = require('../services');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, data } = await blogPostsService.create(title, content, categoryIds, id);
  return res.status(mapStatusHttp(status)).json(data);
};

module.exports = {
  create,
};
