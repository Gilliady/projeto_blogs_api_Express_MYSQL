const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return { status: 'CREATED', data: category };
};

module.exports = {
  create,
};