const models = require('../models');
const userService = require('../services/userService');

exports.getAllOrders = async function () {
  const orders = await models.Order.find({});

  return orders;
};

exports.getAllOrdersByUserId = async function (userId) {
  const isExist = await userService.getUserById(userId);

  if (!isExist) {
    throw new Error('유저 정보를 찾을 수 없습니다.');
  }

  const orders = await models.Order.find({})
    .populate({ path: 'userId', match: { _id: userId }, select: 'name phone' })
    .exec();

  const filtered = orders.filter((order) => order.userId);

  return filtered;
};

exports.getOrdersByOrderId = async function (orderId) {
  const order = await models.Order.findOne({ _id: orderId }).populate({
    path: 'userId',
    select: 'name phone',
  });

  if (!order) {
    throw new Error('주문 정보가 없습니다.');
  }

  return order;
};

exports.updateOrderByOrderId = async function (
  orderId,
  totalPrice,
  deliveryFee,
  status,
) {
  const order = await models.Order.findOne({ _id: orderId });

  if (!order) {
    throw new Error('주문 정보가 없습니다.');
  }

  try {
    const result = await models.Order.updateOne(
      { _id: orderId },
      {
        totalPrice,
        deliveryFee,
        status,
      },
    );

    return result;
  } catch (error) {
    throw new Error('수정 실패');
  }
};

exports.deleteOrderByOrderId = async function (orderId) {
  const order = await models.Order.findOne({ _id: orderId });

  if (!order) {
    throw new Error('주문 정보가 없습니다.');
  }

  try {
    const result = await models.Order.deleteOne({ _id: orderId });

    return result;
  } catch (error) {
    throw new Error('삭제 실패');
  }
};
