const models = require('../models/index');

exports.getAllProduct = async () => {
  const res = await models.Product.find({});

  return res;
};

exports.getProductById = async (_id) => {
  const product = await models.Product.findOne({ _id });

  return product;
};

exports.getProductByCategoryName = async (name) => {
  const products = await models.Product.find({})
    .populate({
      path: 'category',
      match: { name },
    })
    .exec();

  const filteredProducts = products.filter((product) => product.category);
  return filteredProducts;
};

exports.createProduct = async ({ name, desc, category, img_url, price }) => {
  const product = await models.Product.create({
    name,
    desc,
    category,
    img_url,
    price,
  });
  return product;
};

exports.updateProduct = async (_id, name, desc, category, img_url, price) => {
  try {
    const data = await models.Product.updateOne(
      { _id },
      { name, desc, category, img_url, price },
    );
    if (!data.acknowledged) {
      return { state: 200, message: '수정 실패' };
    }
    return { state: 200, massage: '수정 성공' };
  } catch (error) {
    throw new Error('업데이트 할 수 없습니다.');
  }
};

exports.deleteProduct = async (_id) => {
  const res = await models.Product.deleteOne({ _id });

  return res;
};
