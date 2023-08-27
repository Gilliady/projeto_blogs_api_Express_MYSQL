const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESS', data: categories };
};

const create = async (name) => {
  const category = await Category.create({ name });
  return { status: 'CREATED', data: category };
};

module.exports = {
  getAll,
  create,
};