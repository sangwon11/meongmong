const models = require('../models/index');

exports.getAllCategory = async () => {
  const res = await models.Category.find({});

  return res;
};

exports.getCategoryByName = async (id) => {
  try {
    const category = await models.Category.findOne({ id });

    if (category === null) {
      const error = { status: 400, message: '에러 메세지' };
      return error;
    }

    return { status: 200, message: category };
  } catch (err) {
    throw new Error('서버 오류 입니다.');
  }
};

exports.createCategory = async (category) => {};

exports.updateCategory = async (id, category) => {};

exports.deleteCategory = async (id) => {};
