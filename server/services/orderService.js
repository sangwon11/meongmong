const models = require('../models/index');

exports.getAllOrder = async () => {
  const res = await models.Order.find({});

  return res;
};

exports.getAllOrderById = async (userId) => {
  try {
    const orders = await models.Order.find({ userId });
    if (orders.length === 0) {
      const error = {
        status: 400,
        message: '해당 주문이 존재하지 않습니다.',
      };
      return error;
    }

    return orders;
  } catch (err) {
    throw new Error('서버 오류 입니다.');
  }
};

exports.getOneOrderById = async (userId, id) => {
  try {
    const order = await models.Order.findOne({ userId, id });
    if (!order) {
      const error = {
        status: 400,
        message: '해당 주문이 존재하지 않습니다.',
      };
      return error;
    }

    return order;
  } catch (err) {
    throw new Error('서버 오류 입니다.');
  }
};

exports.createOrder = async (order) => {
  const res = await models.Order.create(order);
  return res;
};

exports.updateOrder = async (userId, id, updateData) => {
  try {
    const order = await models.Order.findOneAndUpdate(
      { userId, id },
      { $set: updateData },
      { new: true },
    );

    if (!order) {
      const error = {
        status: 400,
        message: '해당 주문이 존재하지 않습니다.',
      };
      return error;
    }

    return order;
  } catch (err) {
    throw new Error('서버 오류 입니다.');
  }
};

// 주문 전체 삭제
exports.deleteOrderAll = async (userId) => {
  try {
    const order = await models.Order.deleteMany({ userId });
    return order;
  } catch (err) {
    throw new Error('삭제 할 수 없습니다.');
  }
};

// 주문 개별 삭제
exports.deleteOrder = async (userId, id) => {
  try {
    const order = await models.Order.deleteOne({ userId, id });
    return order;
  } catch (err) {
    throw new Error('삭제 할 수 없습니다.');
  }
};
