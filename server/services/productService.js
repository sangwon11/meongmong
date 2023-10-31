const models = require('../models/index');

exports.getAllProduct = async () => {
  const res = await models.Product.find({});

  return res;
};

exports.getProductById = async (id) => {
  try {
    const product = await models.Product.findOne({ id });

    if (product === null) {
      const error = { status: 400, message: '사용자를 찾을 수 없습니다.' };
      return error;
    }

    return { status: 200, message: product };
  } catch (err) {
    throw new Error('서버 오류 입니다.');
  }
};

// 수정해야함. kind 에 Schema.Types.ObjectId 가 들어가야함
exports.createProduct = async (product) => {
  console.log(product);
  const res = await models.Product.create(product);
  console.log(res);
  return res;
};

exports.updateProduct = async (id, product) => {
  try {
    const res = await models.Product.updateOne({ id }, { product });
    console.log(res);
    return res;
  } catch (error) {
    throw new Error('업데이트 할 수 없습니다.');
  }
};

exports.deleteProduct = async (id) => {
  try {
    const res = await models.Product.deleteOne({ id });
    console.log(res);
    return res;
  } catch (err) {
    throw new Error('삭제 할 수 없습니다.');
  }
};
