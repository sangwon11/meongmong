const adminOrderService = require('../services/adminOrderService');

exports.getAllOrders = async function (req, res, next) {
  const orders = await adminOrderService.getAllOrders();

  res.json({ status: 200, orders });
};

exports.getAllOrdersByUserId = async function (req, res, next) {
  console.log('userId');
  try {
    const { userId } = req.params;

    const orders = await adminOrderService.getAllOrdersByUserId(userId);

    res.json({ status: 200, orders });
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByOrderId = async function (req, res, next) {
  console.log('orderId');
  try {
    const { orderId } = req.params;

    const order = await adminOrderService.getOrdersByOrderId(orderId);

    res.json({ status: 200, order });
  } catch (err) {
    next(err);
  }
};

exports.updateOrderByOrderId = async function (req, res, next) {
  try {
    const { orderId } = req.params;
    const { totalPrice, deliveryFee, status } = req.body;

    await adminOrderService.updateOrderByOrderId(
      orderId,
      totalPrice,
      deliveryFee,
      status,
    );

    res.json({ state: 200, message: '수정 성공' });
  } catch (err) {
    next(err.message);
  }
};

exports.deleteOrderByOrderId = async function (req, res, next) {
  try {
    const { orderId } = req.params;
    await adminOrderService.deleteOrderByOrderId(orderId);

    res.json({ state: 200, message: '삭제 성공' });
  } catch (err) {
    next(err.message);
  }
};
