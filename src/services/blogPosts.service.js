const { User, BlogPost, PostCategory, Category, sequelize } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESS', data: posts };
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }
  return { status: 'SUCCESS', data: post };
};

const update = async (id, title, content, userId) => {
  if (!title || !content) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }
  const post = await BlogPost.findOne({ where: { id } });
  console.log('POST: ', post);
  if (post.userId !== userId) {
    return ({ status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } });
  }
  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESS', data: updatedPost };
};

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
  getAll,
  getById,
  update,
};