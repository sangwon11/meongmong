const models = require('../models/index');

exports.getAllOrders = async () => {
  return await models.Order.find({});
};

exports.getOrderById = async (id) => {};

exports.createOrder = async (order) => {
  return await models.Order.create(order);
};

exports.updateOrder = async (id, order) => {};

exports.deleteOrder = async (id) => {};
