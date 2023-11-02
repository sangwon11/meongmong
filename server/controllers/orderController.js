const orderService = require('../services/orderService');

exports.getAllOrders = async (req, res, next) => {
  const orderList = await orderService.getAllOrder();

  res.json({
    status: 200,
    orderList,
  });
};

exports.getAllOrdersById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const orders = await orderService.getAllOrderById(userId);
    res.json({
      status: 200,
      orders,
    });
  } catch (err) {
    next(err);
  }
};

exports.getOneOrderById = async (req, res, next) => {
  const { userId, id } = req.params;

  try {
    const order = await orderService.getOneOrderById(userId, id);
    res.json({
      status: 200,
      order,
    });
  } catch (err) {
    next(err);
  }
};

exports.createOrder = async (req, res, next) => {
  const order = await req.body;
  try {
    await orderService.createOrder(order);
    res.status(200).json({
      status: 200,
      message: '상품 주문 성공',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: '서버 오류 입니다.',
    });
  }
};

exports.updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  const updateOrder = await orderService.updateOrder(id, status);

  res.json(updateOrder);
};

exports.deleteOrderAll = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  const deleteOrderAll = await orderService.deleteOrderAll(id, status);

  res.json(deleteOrderAll);
};

exports.deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  const deleteOrder = await orderService.deleteOrder(id, status);

  res.json(deleteOrder);
};
