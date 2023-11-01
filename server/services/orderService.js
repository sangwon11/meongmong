const models = require('../models/index');

exports.getAllOrders = async (id) => {
  return await models.Order.find({ id });
};

exports.getOrderById = async (id) => {
  try {
    const order = await models.Order.findOne({ id });

    if (order === null) {
      const error = {
        status: 400,
        message: '해당 주문이 존재하지 않습니다.',
      };
      return error;
    }

    return { status: 200, message: order };
  } catch (err) {
    throw new Error('서버 오류 입니다.');
  }
};

exports.createOrder = async (order) => {
  return await models.Order.create(order);
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
