const productService = require('../services/productService');

exports.getAllProducts = async (req, res, next) => {
  const productList = await productService.getAllProduct();

  res.json({
    status: 200,
    productList,
  });
};

exports.getProductByID = async (req, res, next) => {
  const { id } = req.params;

  const product = await productService.getProductById(id);

  res.json(product);
};

exports.createProduct = async (req, res, next) => {
  const product = req.body;

  try {
    await productService.createProduct(product);

    res.status(200).json({
      status: 200,
      message: '상품 등록 성공',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: '서버 오류 입니다.',
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  const status = await productService.updateProduct(id, body);

  res.json(status);
};
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  const status = await productService.deleteProduct(id);

  res.json(status);
};
