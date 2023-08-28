const { BlogPost, PostCategory, Category, sequelize } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const categoryExists = await Category.findAll({ where: { id: categoryIds } });
  if (categoryExists.length !== categoryIds.length) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
  const response = await sequelize.transaction(async (t) => {
    const blogPost = await BlogPost
      .create({ title, content, userId }, { transaction: t });
    await PostCategory
      .bulkCreate([...categoryIds.map((id) => ({ categoryId: id, postId: blogPost.id }))], {
        transaction: t,
      });
    return blogPost;
  });
  const post = await BlogPost.findOne({ where: { id: response.id } });
  return { status: 'CREATED', data: post };
};

module.exports = {
  create,
};