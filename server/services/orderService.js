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

exports.updateOrder = async (email, status) => {
  const body = req.body;
  // const status = body.status;

  try {
    const order = await models.Order.updateOne({ email }, { body });
    if (status === '배송중') {
      return res.status(400).json({
        status: 'Error',
        error: `이미 ${status}이므로 변경이 불가합니다.`,
      });
    }
    if (status === '배송완료') {
      return res.status(400).json({
        status: 'Error',
        error: `이미 ${status}되어 변경이 불가합니다.`,
      });
    }
    return order;
  } catch (err) {
    throw new Error('삭제 할 수 없습니다.');
  }
};

// 주문 전체 삭제
exports.deleteOrderAll = async (email, status) => {
  try {
    const user = await models.Order.findOne({ email: email });
    const order = await models.Order.deleteMany({ user });
    if (status === '배송중') {
      return order.status(400).json({
        status: 'Error',
        error: `이미 ${status}이므로 변경이 불가합니다.`,
      });
    }
    if (status === '배송완료') {
      return order.status(400).json({
        status: 'Error',
        error: `이미 ${status}되어 변경이 불가합니다.`,
      });
    }
    return order;
  } catch (err) {
    throw new Error('삭제 할 수 없습니다.');
  }
};

// 주문 개별 삭제
exports.deleteOrder = async (id, status) => {
  try {
    const order = await models.Order.deleteOne({ id });
    // status2 => 배송중
    if (status === 2) {
      return order.status(400).json({
        status: 'Error',
        error: '이미 배송중이므로 삭제가 불가합니다.',
      });
    }
    // status3 => 배송완료
    if (status === 3) {
      return order.status(400).json({
        status: 'Error',
        error: '이미 배송이 완료되어 삭제가 불가합니다.',
      });
    }
    return order;
  } catch (err) {
    throw new Error('삭제 할 수 없습니다.');
  }
};
