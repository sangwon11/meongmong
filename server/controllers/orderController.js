const orderService = require('../services/orderService');

exports.getAllOrders = async (req, res, next) => {};

exports.getOrderById = async (req, res, next) => {};

exports.createOrder = async (req, res, next) => {
  
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
